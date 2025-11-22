import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import "../styles/navbarFlip.css";

gsap.registerPlugin(Physics2DPlugin);

export default function NavbarWithFlip({ onThemeOpen }) {
  const buttonRef = useRef(null);
  const coinRef = useRef(null);
  const purseRef = useRef(null);
  const holeRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const coin = coinRef.current;
    const purse = purseRef.current;
    const hole = holeRef.current;

    if (!button || !coin || !purse || !hole) return;

    const config = {
      timeScale: 1.0,
      distance: { lower: 100, upper: 350 },
      bounce: { lower: 2, upper: 12 },
      velocity: { lower: 300, upper: 700 },
      rotation: { lower: 0, upper: 15 },
      flipSpeed: { lower: 0.25, upper: 0.6 },
      spins: { lower: 1, upper: 6 },
      rotate: { lower: 0, upper: 90 },
      muted: true,
    };

    const tipSound = new Audio("https://myinstants.com/media/sounds/coin_1.mp3");
    tipSound.volume = 0.3;
    tipSound.muted = config.muted;

    function tip() {
      if (button.dataset.tipping === "true") return;

      const currentRotation = gsap.getProperty(button, "rotate") || 0;

      if (currentRotation < 0) document.documentElement.dataset.flipped = "true";
      button.dataset.tipping = "true";

      const duration = gsap.utils.mapRange(
        config.rotation.lower,
        config.rotation.upper,
        0,
        config.flipSpeed.upper
      )(Math.abs(currentRotation));

      const distance = gsap.utils.snap(
        1,
        gsap.utils.mapRange(
          config.rotation.lower,
          config.rotation.upper,
          config.distance.lower,
          config.distance.upper
        )(Math.abs(currentRotation))
      );

      const velocity = gsap.utils.mapRange(
        config.rotation.lower,
        config.rotation.upper,
        config.velocity.lower,
        config.velocity.upper
      )(Math.abs(currentRotation));

      const bounce = gsap.utils.mapRange(
        config.velocity.lower,
        config.velocity.upper,
        config.bounce.lower,
        config.bounce.upper
      )(Math.abs(velocity));

      const distanceDuration = gsap.utils.mapRange(
        config.distance.lower,
        config.distance.upper,
        config.flipSpeed.lower,
        config.flipSpeed.upper
      )(distance);

      const spin = gsap.utils.snap(
        1,
        gsap.utils.mapRange(
          config.distance.lower,
          config.distance.upper,
          config.spins.lower,
          config.spins.upper
        )(distance)
      );

      const offRotate =
        gsap.utils.random(config.rotate.lower, config.rotate.upper, 1) * -1;

      const hangtime = Math.max(1, duration * 4);

      const tl = gsap.timeline({
        onComplete: () => {
          if (!config.muted) tipSound.play();

          gsap.set(coin, { yPercent: 100 });

          gsap
            .timeline({
              onComplete: () => {
                gsap.set(button, { clearProps: "all" });
                gsap.set(coin, { clearProps: "all" });
                gsap.set(purse, { clearProps: "all" });
                button.dataset.tipping = "false";
              },
            })
            .to(button, {
              yPercent: bounce,
              repeat: 1,
              duration: 0.12,
              yoyo: true,
            })
            .fromTo(hole, { scale: 1 }, { scale: 0, duration: 0.2, delay: 0.2 })
            .set(coin, { clearProps: "all" })
            .set(coin, { yPercent: -50 })
            .fromTo(
              purse,
              { xPercent: -200 },
              { delay: 0.5, xPercent: 0, duration: 0.5, ease: "power1.out" }
            )
            .fromTo(
              coin,
              { rotate: -460 },
              { rotate: 0, duration: 0.5, ease: "power1.out" },
              "<"
            )
            .timeScale(config.timeScale);
        },
      });

      tl.set(button, { transition: "none" })
        .fromTo(
          button,
          { rotate: currentRotation },
          { rotate: 0, duration, ease: "elastic.out(1.75, 0.75)" }
        )
        .to(
          coin,
          {
            onUpdate: function () {
              const y = gsap.getProperty(coin, "y");
              if (y >= coin.offsetHeight) {
                this.progress(1);
                tl.progress(1);
              }
            },
            duration: hangtime,
            physics2D: { velocity, angle: -90, gravity: 1000 },
          },
          `>-${duration * 0.825}`
        )
        .fromTo(
          coin,
          { rotateX: 0 },
          { rotateX: spin * -360, duration: distanceDuration * 2 },
          "<"
        )
        .to(coin, { rotateY: offRotate, duration: distanceDuration }, "<")
        .to(coin, { "--rx": offRotate, duration: distanceDuration }, "<")
        .fromTo(
          hole,
          { scale: 0 },
          { scale: 1, duration: 0.2 },
          hangtime * 0.35
        )
        .timeScale(config.timeScale);
    }

    button.addEventListener("click", tip);

    return () => {
      button.removeEventListener("click", tip);
      gsap.killTweensOf([button, coin, purse, hole]);
    };
  }, []);

  return (
    <nav className="navbar-flip">
      <div className="nav-left">
        <div className="brand">
          <div className="logo">YourLogo</div>

          {/* Corrected Flip Button */}
          <button
            aria-label="Leave a tip"
            data-tipping="false"
            ref={buttonRef}
            className="flip-button"
          >
            <span className="content">
              {/* Scene */}
              <span className="scene">
                {/* Hole */}
                <span className="hole" ref={holeRef}></span>

                {/* Purse */}
                <div className="purse" ref={purseRef}>
                  {/* Coin */}
                  <div className="coin" ref={coinRef}>
                    {/* Front face */}
                    <div className="coin__face coin__face--front">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 273.6 360"
                      >
                        <path
                          d="M217.02 167.04c18.63-9.48 30.29-26.18..."
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div className="coin__core"></div>
                    <div className="coin__core coin__core--rotated"></div>

                    {/* Rear face */}
                    <div className="coin__face coin__face--rear">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 273.6 360"
                      >
                        <path
                          d="M217.02 167.04c18.63-9.48 30.29-26.18..."
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </span>

              <span>Leave tip</span>
            </span>
          </button>
        </div>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/cats">Categories</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        <div className="theme-placeholder" onClick={onThemeOpen}>
          Themes
        </div>
      </div>
    </nav>
  );
}

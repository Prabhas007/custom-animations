import React, { useEffect } from "react";
import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";
import "../styles/splash.css";

gsap.registerPlugin(DrawSVGPlugin);

export default function SplashAnimation() {
  useEffect(() => {
    const bulbContainer = document.getElementById("bulb-container");
    const leaf = document.getElementById("leaf");

    const head = document.getElementById("bulb-head");
    const topThread = document.getElementById("bulb-thread-top");
    const midThread = document.getElementById("bulb-thread-middle");
    const bottomThread = document.getElementById("bulb-thread-bottom");

    const lines = [];
    for (let i = 0; i < 9; i++) {
      lines.push(document.getElementById("glow-line" + i));
    }

    gsap.set(bulbContainer, {
      position: "absolute",
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 110%"
    });

    gsap.set(lines, { drawSVG: "100% 100%", opacity: 1 });
    gsap.set(leaf, { scale: 0, transformOrigin: "50% 110%" });
    gsap.set([head, topThread, midThread, bottomThread], {
      drawSVG: "0% 0%"
    });

    const tl = gsap.timeline();

    tl.to(bottomThread, { duration: 1, drawSVG: "100% 0%" })
      .to(midThread, { duration: 1, drawSVG: "100% 0%" }, "-=1")
      .to(topThread, { duration: 1, drawSVG: "100% 0%" }, "-=1")
      .to(head, { duration: 1.2, drawSVG: "100% 0%" }, "-=0.8")
      .to(leaf, { duration: 0.7, scale: 0.7 })
      .fromTo(
        bulbContainer,
        { rotation: -10 },
        { rotation: 0, duration: 1, ease: "elastic.out" }
      )
      .to(lines, { duration: 0.8, drawSVG: "0% 0%", opacity: 0 }, "-=0.6")
      .to([leaf, head, topThread, midThread, bottomThread], {
        duration: 0.6,
        opacity: 0
      });
  }, []);

  return (
    <div className="splash-wrapper">
      <div id="title">Eco-Tracify Carbon Footprint</div>

      <div id="bulb-container">
        <svg
          id="bulb-svg-node"
          xmlns="http://www.w3.org/2000/svg"
          width="428px"
          height="372.5px"
          viewBox="0 0 428 372.5"
        >
          <path
            id="leaf"
            fill="#88CE02"
            d="M244.8,225.4c0.9-7.4,1-16,0.3-25.6c-0.9-8.4-1.3-13.1-1.3-13.9
              c-35.6,8.4-53.6,23.2-54,44.3c-0.1,6.6,1.5,13.4,4.9,20.5c1.7,3.5,3.4,6.4,5.1,8.7
              c0-12.4,3.6-22,10.8-29.1c2.4-2.3,4.9-4.1,7.5-5.3c2.3-1.1,3.5-1.4,3.7-1
              c-6.3,6.1-11.9,18.7-16.7,37.9c-2.4,9.6-4.2,18.5-5.3,26.8h14.6v-29.3
              C231.8,260.3,242,249,244.8,225.4z"
          />

          <path
            id="bulb-head"
            fill="none"
            stroke="#ecf0f1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M287.5,207.9c0,8.9-1.3,17.1-3.9,24.5c-1.6,4.7-4.6,10.8-8.8,18.3
              c-4.6,8.1-7.8,14.4-9.6,18.9c-3.3,8.1-5.4,16.9-6.4,26.6c0,2-0.7,3.8-2.1,5.2
              c-1.4,1.4-3.2,2.1-5.2,2.1h-75c-2,0-3.8-0.7-5.2-2.1s-2.1-3.2-2.1-5.2
              c-1-9.6-3.1-18.5-6.4-26.6c-1.8-4.5-5-10.8-9.6-18.9c-4.2-7.4-7.2-13.5-8.8-18.3
              c-2.6-7.4-3.9-15.6-3.9-24.5c0-10,1.9-19.5,5.8-28.6c3.7-8.8,9-16.5,15.8-23.3
              s14.5-12,23.3-15.8c9.1-3.8,18.6-5.8,28.6-5.8c10,0,19.5,1.9,28.6,5.8
              c8.8,3.7,16.6,9,23.4,15.8s12,14.5,15.8,23.3C285.6,188.4,287.5,198,287.5,207.9z"
          />

          <path
            id="bulb-thread-top"
            fill="none"
            stroke="#ecf0f1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M258.1,318.1c0,2-0.7,3.8-2.1,5.1c-1.4,1.4-3.2,2.1-5.2,2.1h-73.4
              c-2,0-3.8-0.7-5.2-2.1c-1.4-1.4-2.1-3.1-2.1-5.1s0.7-3.8,2.1-5.2c1.4-1.4,3.2-2.1,5.2-2.1h73.4
              c2,0,3.8,0.7,5.2,2.1C257.4,314.4,258.1,316.1,258.1,318.1z"
          />

          <path
            id="bulb-thread-middle"
            fill="none"
            stroke="#ecf0f1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M250.8,332.8h-73.4c-2,0-3.8,0.7-5.2,2.1c-1.4,1.4-2.1,3.2-2.1,5.2
              s0.7,3.8,2.1,5.2c1.4,1.4,3.2,2.1,5.2,2.1h73.4c2,0,3.8-0.7,5.2-2.1c1.4-1.4,2.1-3.2,2.1-5.2
              s-0.7-3.8-2.1-5.2C254.5,333.5,252.8,332.8,250.8,332.8z"
          />

          <path
            id="bulb-thread-bottom"
            fill="none"
            stroke="#ecf0f1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M199.4,369.5h29.4c4.1,0,7.5-1.4,10.4-4.3c2.9-2.9,4.3-6.3,4.3-10.4h-58.8
              c0,4.1,1.4,7.5,4.3,10.4C191.8,368.1,195.3,369.5,199.4,369.5z"
          />

          {/** Glow Lines FIXED JSX version */}
          {[8,7,6,5,4,3,2,1,0].map((n)=>(
            <path
              key={n}
              id={`glow-line${n}`}
              fill="none"
              stroke="#88CE02"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                n === 8 ? "M391,322.5l-86.6-50" :
                n === 7 ? "M423,222h-100" :
                n === 6 ? "M395,117.5l-86.6,50" :
                n === 5 ? "M324.5,35l-50,86.6" :
                n === 4 ? "M214,5v100" :
                n === 3 ? "M103.5,35l50,86.6" :
                n === 2 ? "M33,117.5l86.6,50" :
                n === 1 ? "M5,222h100" :
                "M37,322.5l86.6-50"
              }
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

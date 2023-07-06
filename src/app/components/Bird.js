'use client'

import styles from "./Bird.module.css";
import { useRef } from "react";

const useBird = () => {
  const bird = useRef(0);

  let moveBy = 50;

  window.addEventListener('load', () => {
    const winHeight = window.innerHeight
    // console.log(winHeight)
    const winWidth = window.innerWidth
    const birdTopPos0 = `${winHeight/2}px`
    // console.log(birdTopPos0)
    const birdLeftPos0 = `${winWidth/6}px`
    bird.current.style.position = 'absolute';
    bird.current.style.left = `${birdLeftPos0}`;
    bird.current.style.top = `${birdTopPos0}`;
});

  window.addEventListener("keyup", (e) => {
    switch (e.key) {
    //   case "ArrowLeft":
    //     bird.current.style.left = parseInt(bird.current.style.left) - moveBy + "px";
    //     break;
    //   case "ArrowRight":
    //     bird.current.style.left = parseInt(bird.current.style.left) + moveBy + "px";
    //     break;
      case "ArrowUp":
        bird.current.style.top = parseInt(bird.current.style.top) - moveBy + "px";
        console.log(bird.current.style.top)
        break;
      case "ArrowDown":
        bird.current.style.top = parseInt(bird.current.style.top) + moveBy + "px";
        console.log(bird.current.style.top)
        break;
    }
  });
  return bird;
};

export default function Bird() {
  let bird = useBird();
  return (
    <div
      ref={bird}
      className={`${styles.frendWrapper} relative overflow-hidden`}
    >
      <div className={`${styles.frend} absolute`}></div>
    </div>
  );
}

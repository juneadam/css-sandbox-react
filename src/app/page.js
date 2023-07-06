// import Image from "next/image";

import ParallaxBackground from "./components/ParallaxBackground";
import Bird from "./components/Bird";

export default function Home() {
  return (
    <main className="app-wrap relative">
      <ParallaxBackground />
      <Bird />
    </main>
  );
}

/* <Image
    className="mars far object-none absolute overflow-hidden"
    src="/marsfar2x.png"
    width={2560}
    height={720}
    alt="Mars background far"
  />
  <Image
    className="mars mid object-none absolute overflow-hidden"
    src="/marsmid2x.png"
    width={2560}
    height={720}
    alt="Mars background mid."
  />
  <Image
    className="mars close object-none absolute overflow-hidden"
    src="/marsclose2x.png"
    width={2560}
    height={720}
    alt="Mars background close."
  /> */

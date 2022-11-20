import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import classNames from "classnames";

export default function WorkPage() {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - Reciprocal Ltd.</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reciprocal-ltd" />
        <meta name="twitter:title" content="Reciprocal Ltd." />
        <meta
          name="twitter:description"
          content="View the Reciprocal catalogue."
        />
        <meta
          name="description"
          content="Reciprocal is an interactive design and development studio based out of Vancouver, Canada. We create interactive media, video games, and provide full development service and management to external clients."
        />
        <meta
          name="twitter:image"
          content="https://rift.reciprocal.ltd/reciprocal.ltd/store.jpg"
        />
        <meta name="theme-color" content="black" />
      </Head>
      <div className="bg-black text-black overflow-hidden">
        <Header black />
        <div
          className={classNames("overflow-hidden bg-black", {
            "checkerboard grid checker-grid": playAnimation,
            "opacity-0": !playAnimation,
          })}
        >
          <div
            className={classNames("overflow-hidden wait-preload", {
              "wait-and-rotate": playAnimation,
              "opacity-0": !playAnimation,
            })}
            style={{ width: "calc(100vw + 200px)" }}
          >
            <Marquee
              gradient={false}
              speed={20}
              play={playAnimation}
              className="invisible md:visible z-0"
            >
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.25.13-collage1.jpg"
              />
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.25.19-collage2.jpg"
              />
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.25.25-collage3.jpg"
              />
            </Marquee>
          </div>
        </div>
        <div
          className={classNames("fixed -top-4 -right-2 text-8xl steps", {
            portfolio: playAnimation,
            "opacity-0": !playAnimation,
          })}
        >
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
        </div>
        <div className="w-full max-w-screen-sm h-screen absolute pt-16 bg-black mx-auto top-0 overflow-y-auto">
          <div className="text-white p-6 font-sans list-none flex flex-col space-y-8 pb-16">
            <p>
              As Reciprocal Ltd. was recently founded, some of these samples are
              sourced from our individual portfolios.
            </p>
            <h2 className="steps text-2xl">Software development</h2>
            <div className="flex flex-wrap portfolio">
              <a
                target="_blank"
                href="https://urbit.org/applications/~sitden-sonnet/channel"
              >
                <img
                  src="https://rift.reciprocal.ltd/channel/2022.7.27..21.08.18-icon.png"
                  className="w-24 h-24 rounded-xl object-cover"
                />
              </a>
              <a target="_blank" href="/portfolio/landscape">
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.08..09.18.41-2022.6.05..15.57.56-original_5ef5d6892515506a74e95258f3168f2a.jpg"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">Graphic design</h2>
            <p className="font-semibold">Album covers</p>
            <div className="flex flex-wrap portfolio">
              <a
                target="_blank"
                href="https://brainfunnel.bandcamp.com/track/to-trigger-a-synapse"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://rift.reciprocal.ltd/reciprocal.ltd/to_trigger_a_synapse.png"
                />
              </a>
              <a
                target="_blank"
                href="https://brainfunnel.bandcamp.com/album/shitpost-futurist"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.08..09.15.46-shitpost.jpg"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">
              Interactive media and video games
            </h2>
            <div className="flex flex-wrap portfolio">
              <a
                target="_blank"
                href="http://aetherinteractive.itch.io/localhost"
              >
                <img
                  className="w-24 h-24 rounded-xl"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.08..09.13.49-local-itch.jpg"
                />
              </a>
              <a
                target="_blank"
                href="http://aetherinteractive.itch.io/subserial-network"
              >
                <img
                  className="w-24 h-24 rounded-xl"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.08..09.19.32-subserial.jpg"
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

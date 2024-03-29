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
          content="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.23..13.45.18-twit-card.png"
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
                src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.55.43-2022.7.27..21.25.13-collage1.jpg"
              />
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.55.43-2022.7.27..21.25.19-collage2.jpg"
              />
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.55.43-2022.7.27..21.25.25-collage3.jpg"
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
            <h2 className="steps text-2xl">Software development</h2>
            <div className="flex flex-wrap portfolio">
              <a
                target="_blank"
                href="https://urbit.org/applications/~sitden-sonnet/channel"
              >
                <img
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.7.09..22.54.53-channel.png"
                  className="w-24 h-24 rounded-xl object-cover"
                />
              </a>
              <a target="_blank" href="/portfolio/scene">
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.53.39-scene-logo-stroke-2.svg"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">Web projects</h2>
            <div className="flex flex-wrap portfolio">
              <a target="_blank" href="/portfolio/urbit-org">
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.53.37-urbit-org-2.jpg"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">Maintained historical work</h2>
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
              <a
                target="_blank"
                href="https://decept.org"
              >
                <img
                  className="w-24 h-24 rounded-xl"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.10..00.03.09-6b81ada41581e4c3d5013e4a456f25f6a313df0b1343526229575e038f6654d1-2.png"
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

import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import FLSGif from "../public/images/FLS.gif";
import siteLogo from "../public/images/favicon.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Funny Looking Strangers | 10,555 FLS NFTs</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex hero-section w-full h-screen bg-gray-500 items-center overflow-hidden">
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-4">
            <div class="grid grid-cols-3 mt-8 items-center sm:mx-10 lg:mx-0">
              <div className="col-span-3 lg:col-span-2 order-last lg:order-first">
                <h1 className="hero-text text-5xl text-center md:text-7xl lg:text-8xl lg:text-left text-shadow mt-6 lg:mt-0">
                  Funny Looking Strangers
                </h1>
                <p className="text-lg sm:text-xl text-center mt-2 text-shadow lg:text-left mb-3">
                  Minting available on October 10th.
                </p>
                <div className="flex w-full items-center justify-center lg:justify-start">
                  <a href="/#mint">
                    <button className="btn-main text-xl w-full h-auto px-12 mt-4 sm:w-auto">
                      Mint Now
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-span-3 px-20 sm:col-span-3 sm:px-40 md:px-52 lg:p-0 lg:col-span-1 ">
                <Image className="bg-alt rounded-2xl" src={FLSGif} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mint" className="flex w-full bg-alt overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center text-center">
            <div className="m-4 mt-24 mb-12 p-10 max-w-4xl bg-white rounded-xl border-8 border-gray-900">
              <div className="flex items-center justify-center -mt-24 mb-6">
                <div className="w-40 h-40 rounded-full border-8 border-gray-900 bg-alt overflow-hidden">
                  <Image src={FLSGif} />
                </div>
              </div>
              <h1 className="mb-6 text-darktype text-4xl sm:text-5xl md:text-6xl">
                Mint from October 10th
              </h1>
              <p className="text-darktype w-full px-0 md:px-10 mb-8">
                It costs 0.0555 Ξ + gas to mint a Stranger. To limit gas and
                economize fees, you can mint up to 15 Strangers at once.
              </p>
              <button className="btn-main text-xl w-full h-auto px-12 sm:w-auto">
                Mint Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div classname=" mx-auto px-4 max-w-2xl">
          <div className="flex">
            <div className="mr-4">
              <a className="flex items-center" href="/">
                <Image
                  className="object-contain"
                  src={siteLogo}
                  height="55"
                  width="55"
                />
                <span className="hidden logo-text sm:hidden ml-4">
                  MekaVerse
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

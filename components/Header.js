import Image from "next/image";
import Link from "next/link";
import siteLogo from "../public/images/favicon.png";
import { Discord } from "@icons-pack/react-simple-icons";
import { Twitter } from "@icons-pack/react-simple-icons";

function Header() {
  return (
    <div className="navbar">
      <div className="max-w-6xl mx-auto p-4 lg:px-10">
        <div className="flex justify-between">
          <div className="flex space-x-8">
            {/* Left Nav */}
            <div className="mr-4">
              <Link href="/" passHref>
                <div className="flex items-center cursor-pointer">
                  <Image
                    className="object-contain"
                    src={siteLogo}
                    height="55"
                    width="55"
                  />
                  <span className="hidden logo-text sm:hidden ml-4">
                    MekaVerse
                  </span>
                </div>
              </Link>
            </div>

            {/* Left Nav */}
            <div className="hidden nav-text md:flex items-center space-x-8">
              <Link href="#" passHref>
                <div className="nav-link">Lore</div>
              </Link>

              <Link href="#" passHref>
                <div className="nav-link">The Strangers</div>
              </Link>
              <Link href="#" passHref>
                <div className="nav-link">Roadmap</div>
              </Link>
              <Link href="#" passHref>
                <div className="nav-link">FAQ</div>
              </Link>
              <Link href="#" passHref>
                <div className="nav-link">Our Team</div>
              </Link>
            </div>
          </div>

          {/* Right Nav */}
          <div className="nav-text flex items-center justify-end space-x-3">
            <button className="btn-social">
              <Discord className="w-4 h-4" />
            </button>
            <button className="btn-social">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="btn-main">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

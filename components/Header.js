import Image from "next/image";
import siteLogo from "../public/images/favicon.png";
import { Discord } from "@icons-pack/react-simple-icons";
import { Twitter } from "@icons-pack/react-simple-icons";

function Header() {
  return (
    <div className="navbar">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between">
          <div className="flex space-x-8">
            {/* Left Nav */}
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

            {/* Left Nav */}
            <div className="hidden nav-text md:flex items-center space-x-8">
              <a className="nav-link" href="#">
                Lore
              </a>
              <a className="nav-link" href="#">
                The Strangers
              </a>
              <a className="nav-link" href="#">
                Roadmap
              </a>
              <a className="nav-link" href="#">
                FAQ
              </a>
              <a className="nav-link" href="#">
                Our Team
              </a>
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

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="bg-cnordic">
      <div className="flex justify-between px-10 py-10 text-cwhite items-center font-slap container mx-auto">
        <div>
          <p className="font-semibold ">Detail Description</p>
          <p className="text-xs py-2">
            For more details, please visit the link notion listed in the hero
            section above.
          </p>
        </div>
        <div className="mt-3 flex justify-between">
          <Link href="https://www.instagram.com/hendartea/">
            <a
              className="cursor-pointer mx-2"
              target="_blank"
              title="instagram"
            >
              <FontAwesomeIcon className="h-5" icon={faInstagram} />
            </a>
          </Link>
          <Link href="https://twitter.com/hendartea">
            <a className="cursor-pointer mx-2" target="_blank" title="twitter">
              <FontAwesomeIcon className="h-5" icon={faTwitter} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/mahendar-dwipayana-4ba1a076/">
            <a className="cursor-pointer mx-2" target="_blank" title="linkedIn">
              <FontAwesomeIcon className="h-5" icon={faLinkedinIn} />
            </a>
          </Link>
          <Link href="https://github.com/mahendaruui">
            <a
              className="cursor-pointer mx-2"
              target="_blank"
              title="office github"
            >
              <FontAwesomeIcon className="h-5" icon={faGithub} />
            </a>
          </Link>
          <Link href="https://github.com/mahendartea">
            <a
              className="cursor-pointer mx-2"
              target="_blank"
              title="private github"
            >
              <FontAwesomeIcon className="h-5" icon={faGithubSquare} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

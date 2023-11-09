import Image from "next/image";
import Link from "next/link";
import { texts, appData } from "@/models/constants";
import githubSvg from "@/public/assets/images/vector/github-icon-24.svg";

export default function PostImage() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div>{texts.copyrightNotice}</div>
          <div>{texts.license}</div>
          <Link href={appData.githubRepo} target="_blank" className="footer-text-github">
            Check it out at my <Image src={githubSvg} alt="github icon" className="mx-2" /> repo!
          </Link>
        </div>
        <div className="footer-right">
          <div className="footer-text-version">{texts.websiteVersionText}</div>
          <div>
            {texts.rant}
            <span className="group relative">
              <button className="text-blue-600">{texts.rantDisclaimer}</button>
              <div className="tooltip-disclaimer">{texts.disclaimer}</div>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

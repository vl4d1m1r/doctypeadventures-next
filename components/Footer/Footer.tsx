import Image from "next/image";
import Link from "next/link";
import { texts, appData } from "@/models/constants";
import githubSvg from "@/public/assets/images/vector/github-icon-24.svg";

export default function PostImage() {
  return (
    <footer className="bg-primary border-t">
      <div className="wrapper text-small p-6 lg:grid lg:grid-cols-3">
        <div className="flex flex-col space-y-4 mb-6 lg:mb-0">
          <div>{texts.copyrightNotice}</div>
          <div>{texts.license}</div>
          <Link href={appData.githubRepo} target="_blank" className="btn-primary el-color-secondary w-60">
            Check it out at my <Image src={githubSvg} alt="github icon" className="mx-2" /> repo!
          </Link>
        </div>
        <div className="flex flex-col space-y-4 col-span-2">
          <div className="flex justify-center rounded-2xl px-4 py-1 w-72 bg-slate-700 text-white">
            {texts.websiteVersionText}
          </div>
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

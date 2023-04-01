/**
 * All of this texts should be served from the Wordpress end-point.
 * I will fix this in the new version of software.
 */

import { website } from "@/models/constants";
const currentYear = new Date().getFullYear();

export const text = {
    tagline: "Technology, security and stuff according to some guy.",
    websiteVersionText: `${website.name} version: ${website.version}`,
    copyrightNotice: `Ⓒ ${website.author}, 2016-${currentYear}`,
    rant: "All the articles on this site represent my opinions, and I could be wrong. So take everything that I said here with a grain of salt. Also, I am not into monetization with my texts, so no tracking cookies, ads, or anything of that sort here. And, please, please, please don't f*ck something up after reading articles from this site! ",
    rantDisclaimer:
        "Therefore, here it is - the disclaimer - read it, and you're good to go.",
    disclaimer: `The information provided by this website ${website.name} (“we,” “us” or “our”) on ${website.url} (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk. The Site may contain (or you may be sent through the Site links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.`,
    error: {
        general: {
            smiley: `( ͡ಠ ʖ̯ ͡ಠ )`,
            description: "SOME STRANGE ERROR OCCURRED",
            text: "Hey, don`t blame me! I made this site as good as I could!",
        },
        notFound: {
            smiley: `¯${String.fromCharCode(92)}_(ツ)_/¯`,
            description: "ERROR 404",
            text: "Page not found!",
        },
    },
};

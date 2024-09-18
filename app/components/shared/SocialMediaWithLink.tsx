import { Link } from "@remix-run/react";
import _ from "lodash";
const icons = {
  youtube: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/youtube.png",
  reddit: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/reddit.png",
  instagram:
    "https://retro-blog-image.s3.ap-south-1.amazonaws.com/instagram.png",
  threads: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/threads.png",
  twitter: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/twitter.png",
  twitch: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/twitch.png",
  loco: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/loco.png",
  rooter: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/rooter.png",
  linkedin: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/linkedin.png",
  telegram: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/telegram.png",
  whatsapp: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/whatsapp.png",
  facebook: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/facebook.png",
  tiktok: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/tiktok.png",
  snapchat: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/snapchat.png",
  discord: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/discord.png",
  vk: "https://retro-blog-image.s3.ap-south-1.amazonaws.com/vk.png",
} as const;
type SocialName = keyof typeof icons;

const SocialMediaWithLink = ({
  socialName,
  link,
}: {
  socialName: SocialName;
  link?: string; // Make the link optional
}) => {
  // Fallback to a default link if the link is not provided
  const generatedLink = link || `https://www.${_.toLower(socialName)}.com`;

  return (
    <Link to={generatedLink} prefetch="viewport" className="h-8 w-8">
      <img
        src={icons[socialName]}
        alt={`${socialName} Icon`}
        className="h-8 w-8 rounded-full"
      />
    </Link>
  );
};

export default SocialMediaWithLink;

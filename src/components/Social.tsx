import { PiInstagramLogo, PiTiktokLogo } from "react-icons/pi";

type Props = {
  className?: string;
};

export const Social: React.FC<Props> = ({ className }) => {
  const socialMediaLinks = [
    {
      name: "TikTok",
      icon: <PiTiktokLogo className="w-10 h-10 sm:w-20 sm:h-20" />,
      link: "https://www.tiktok.com/",
    },
    {
      name: "Instagram",
      icon: <PiInstagramLogo className="w-10 h-10 sm:w-20 sm:h-20" />,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div
      className={className + ` flex items-center gap-4 sm:gap-8 justify-center`}
    >
      {socialMediaLinks.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
};

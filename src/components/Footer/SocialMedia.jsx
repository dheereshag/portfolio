import { socialIcons } from "../../constants";

const SocialMedia = () => {
  return (
    <div className="flex gap-3">
      {socialIcons.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-zinc-800 w-12 h-12 tw-box-shadow-inset app__flex animate__animated animate__rollIn animate__delay-1s animate__slower group`}
        >
          <i
            className={`ci ci-${icon.name} ci-xl transition-transform duration-300 transform-gpu group-hover:scale-125`}
          ></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;

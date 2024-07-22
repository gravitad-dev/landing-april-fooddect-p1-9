import data from "../data.json";

import Logo from "./ui/Logo";
import MyLink from "./ui/MyLink";
import SeparatorGradient from "./ui/SeparatorGradient";
import SocialButtons from "./ui/SocialButtons";

const Footer = () => {
  return (
    <div className="bg-bg p-5">
      <div className="w-max mx-auto">
        <Logo />
      </div>
      {/* links */}
      <ul className="flex flex-wrap justify-center gap-4 mt-10">
        <SocialButtons />
      </ul>
      {/* <ul className='flex justify-center gap-4 mt-5'>
        {data['section-footer']['footer-links'].map((link) => (
          <li key={link.id}>
            <MyLink
              href={link.href}
              text={link.text}
              title={link.title}
              css='text-black-200/40'
            />
          </li>
        ))}
      </ul> */}
      {/* <SeparatorGradient css='my-4' /> */}
      {/* social */}
      {/* 
      <div className='flex justify-center flex-wrap gap-5 my-10'>
        {data["section-footer"]["footer-social"].map((social) => (
          <a
            className='p-2 rounded-full bg-black-50 shadow-md'
            href={social.href}
            key={social.id}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={social.icon}
              alt={social.title}
              className='w-5 h-5 object-contain'
            />
          </a>
        ))}
      </div> */}

      <span className="text-center text-[14px] block mt-5 ">
        ©{" "}
        {`${new Date().getFullYear()} - ${
          data["section-footer"]["footer-copyright"]
        }`}
        Reserved.
      </span>
    </div>
  );
};
export default Footer;

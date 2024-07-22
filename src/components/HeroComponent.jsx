import data from "../data.json";
//import PrimaryButton from './ui/PrimaryButton';
import Layout from "./ui/Layout";

const Hero = () => {
  return (
    <div
      className="flex justify-center bg-[#f2fff5] min-h-[80vh] w-full"
      id="home"
    >
      <div className="flex flex-col-reverse gap-20 lg:gap-10 lg:flex-row lg:justify-between pt-[10%] w-full max-w-[1200px]">
        {/* text */}
        <div className="w-full lg:max-w-[440px] flex flex-col gap-2 items-center justify-center text-center ">
          <h1 className="text-[40px] leading-[1.1] mb-5 font-bold">
            <span className="text-[60px] md:text-[80px]  text-primary-red">
              {data["section-one"].title.big}
            </span>{" "}
            {data["section-one"].title.small}
          </h1>
          <p className="text-[20px]">{data["section-one"].subtitle}</p>
          {/* <PrimaryButton>
          <a
            href={data["section-one"].button.href}
            target='_blank'
            rel='noreferrer'
          >
            {data["section-one"].button.text}
          </a>
        </PrimaryButton> */}
          {/* <span className='text-[14px]'>
          {data['section-one'].button.buttonDesc}
        </span> */}
        </div>
        {/* img */}
        <div className="flex-1 flex items-center justify-end lg:pl-20">
          <img
            src={data["section-one"].img.url}
            alt={data["section-one"].img.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

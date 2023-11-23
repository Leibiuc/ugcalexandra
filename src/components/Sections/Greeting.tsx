import bgale1 from "../../assets/bgale1.jpeg";
import { Social } from "../Social";
import { Header } from "../Header";

export const Greeting = () => {
  return (
    <div className="relative flex flex-col items-center justify-between h-screen overflow-hidden">
      <Header />

      <div
        className="absolute -z-10 inset-0 bg-center bg-cover brightness-[0.4]"
        style={{ backgroundImage: `url(${bgale1})` }}
      />

      <div className="text-white text-center mt-8 px-4">
        <div className="text-3xl sm:text-6xl lg:text-9xl xl:text-[12rem]">
          Anca Alexandra
        </div>

        <div className="text-lg font-extralight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          UGC Creator
        </div>

        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-6 md:mt-8 lg:mt-12 xl:mt-16">
          Creez conținut original pentru brandul tău. Transform ideile în
          promovări de succes.
        </div>
      </div>

      <Social className="text-white py-8" />
    </div>
  );
};

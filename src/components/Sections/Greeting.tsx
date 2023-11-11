import bgale1 from "../../assets/bgale1.jpeg";
import { Header } from "../Header";
import { Social } from "../Social";

export const Greeting = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-between">
      <div
        className="absolute -z-10 inset-0 bg-center bg-cover brightness-[0.4]"
        style={{ backgroundImage: `url(${bgale1})` }}
      />

      <Header />

      <div className="text-white text-center px-2">
        <div>
          <div className="text-8xl lg:text-[200px]">Anca Alexandra</div>

          <div className="text-lg font-extralight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            UGC Creator
          </div>
        </div>

        <div className="text-md font-extralight lg:text-lg xl:text-3xl mt-20">
          Creez conținut original pentru brandul tău. Transform ideile în
          promovări de succes.
        </div>
      </div>

      <Social className="text-white py-8" />
    </div>
  );
};

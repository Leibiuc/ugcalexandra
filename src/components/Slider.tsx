import { useState } from "react";
import { InfoImages } from "../assets/infoImages";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? InfoImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === InfoImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate the indices of the three visible images
  const prevIndex = (currentIndex - 1 + InfoImages.length) % InfoImages.length;
  const nextIndex = (currentIndex + 1) % InfoImages.length;

  return (
    <div className="w-full rounded-lg flex items-center justify-center gap-8 overflow-hidden">
      <div className="relative flex items-center justify-center w-fit gap-8">
        <button
          className="absolute left-2 bg-white px-2 py-1 font-bold rounded z-10"
          onClick={handlePrev}
        >
          {"<"}
        </button>

        {[prevIndex, currentIndex, nextIndex].map((index) => (
          <img
            key={index}
            src={InfoImages[index]}
            className={`rounded-lg object-cover w-full max-w-[20rem] h-[35rem] ${
              index === currentIndex ? "scale-110" : "brightness-75"
            } transition-transform ease-in-out duration-300`}
            alt={`Image ${index}`}
          />
        ))}

        <button
          className="absolute right-2 bg-white font-bold  px-2 py-1 rounded z-10"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

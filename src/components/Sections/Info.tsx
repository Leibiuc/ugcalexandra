import ImageSlider from "../Slider";

const Info = ({ ...rest }) => {
  return (
    <div {...rest} className="px-6 py-10">
      <h1 className="font-light text-6xl mb-8">INFO</h1>

      <div className="md:flex-row flex flex-col max-w-full gap-20 justify-between overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-amber-100 via-white to-amber-100 bg-opacity-90 rounded-md shadow-lg p-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4">TIPURI DE VIDEO</h3>
            <p className="font-light">
              unboxing <br />
              voice-over <br />
              testimoniale <br />
              talk to camera <br />
              demonstrație de produs <br />
              prezentare produs
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-100 via-white to-amber-100 bg-opacity-90 rounded-md shadow-lg p-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4">INDUSTRII</h3>
            <p className="font-light">
              home decor <br />
              modă <br />
              accesorii și bijuterii <br />
              beauty și skincare
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-100 via-white to-amber-100 bg-opacity-90 rounded-md shadow-lg p-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4">
              COMPETENȚE DE EDITARE VIDEO
            </h3>
            <p className="font-light">
              editare și montaj <br />
              tranziții <br />
              efecte vizuale și audio <br />
              voice-over
            </p>
          </div>
        </div>

        {/* <div className="max-h-fit max-w-2/3 overflow-hidden flex items-center flex-wrap gap-2 justify-center">
          {InfoImages.map((src) => (
            <img
              {...{ src }}
              className="object-cover max-h-96 rounded-xl"
              key={src}
            />
          ))}
        </div> */}

        <ImageSlider />
      </div>
    </div>
  );
};

export default Info;

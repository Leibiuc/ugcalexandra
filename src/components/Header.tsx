import aleRoz from "../assets/aleroz.png";

export const Header = () => {
  return (
    <div className="h-full w-full flex flex-col sm:flex-row items-center md:justify-between font-extralight">
      <div className="space-y-10">
        <div className="text-8xl">Anca Alexandra</div>
        <div className="text-3xl">Content creator</div>
      </div>

      <img
        className="min-w-[300px] w-2/3 hover:shadow-xl border-purple-500"
        src={aleRoz}
      />
    </div>
  );
};

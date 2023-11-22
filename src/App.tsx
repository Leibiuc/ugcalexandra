import { Greeting } from "./components/Sections/Greeting";

import { Videos } from "./components/Sections/Videos";

const App = () => {
  return (
    <div className="!scroll-smooth w-full">
      <Greeting />
      <Videos id="videos" />
    </div>
  );
};

export default App;

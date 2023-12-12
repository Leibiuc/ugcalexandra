import { CreationProcess } from "./components/Sections/CreationProcess";
import { Footer } from "./components/Sections/Footer";
import { Greeting } from "./components/Sections/Greeting";
import Info from "./components/Sections/Info";

import { Videos } from "./components/Sections/Videos";

const App = () => {
  return (
    <div className="!scroll-smooth w-full">
      <Greeting id="Hi!" />

      <div className="bg-amber-50">
        <Videos id="videos" />
        <Info id="info" />
        <CreationProcess id="creation" />
      </div>

      <Footer />
    </div>
  );
};

export default App;

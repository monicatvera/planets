import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Provider from "./components/Provider/Provider";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Mercury from "./pages/Mercury/Mercury";
import Venus from "./pages/Venus/Venus";
import Earth from "./pages/Earth/Earth";
import Mars from "./pages/Mars/Mars";
import Jupiter from "./pages/Jupiter/Jupiter";
import Saturn from "./pages/Saturn/Saturn";
import Uranus from "./pages/Uranus/Uranus";
import Neptune from "./pages/Neptune/Neptune";
import KeyVisual from "./components/KeyVisual/KeyVisual";

const App = () => {
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState("/");

  return (
    <Provider>
      <Wrapper>
        <Navbar
          pathName={location.pathname}
          onHover={setActivePlanet}
          activePlanet={activePlanet}
        />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route exact path="/mercury" element={<Mercury />} />
            <Route exact path="/venus" element={<Venus />} />
            <Route exact path="/earth" element={<Earth />} />
            <Route exact path="/mars" element={<Mars />} />
            <Route exact path="/jupiter" element={<Jupiter />} />
            <Route exact path="/saturn" element={<Saturn />} />
            <Route exact path="/uranus" element={<Uranus />} />
            <Route exact path="/neptune" element={<Neptune />} />
            <Route
              exact
              path="/"
              Component={KeyVisual}
              render={(props) => <KeyVisual activePlanet={activePlanet} />}
            />
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
};

export default App;

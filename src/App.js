import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
// import FrameComponent from "./pages/frame-component";
import FrameComponent1 from "./pages/frame-component1";
import FrameComponent2 from "./pages/frame-component2";
import FrameComponent3 from "./pages/frame-component3";
import FrameComponent4 from "./pages/frame-component4";
import FrameComponent5 from "./pages/frame-component5";
import Button03 from "./pages/button03";
import Button04 from "./pages/button04";
import FrameComponent6 from "./pages/frame-component6";
import FrameComponent from "./pages/frame-component";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/button-03":
        title = "";
        metaDescription = "";
        break;
      case "/button-04":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
        case "/frame-8":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent5 />} />
      <Route path="/frame-7" element={<FrameComponent1 />} />
      <Route path="/frame-6" element={<FrameComponent2 />} />
      <Route path="/frame-5" element={<FrameComponent3 />} />
      <Route path="/frame-4" element={<FrameComponent4 />} />
      <Route path="/frame-3" element={<FrameComponent5 />} />
      <Route path="/button-03" element={<Button03 />} />
      <Route path="/button-04" element={<Button04 />} />
      <Route path="/frame-2" element={<FrameComponent6 />} />
      <Route path="/frame-8" element={<FrameComponent/>} />
    </Routes>
  );
}
export default App;

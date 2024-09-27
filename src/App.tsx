import { Box, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Tracks from "./components/Tracks";
import About from "./components/About";
import Schedules from "./components/Schedules";

const RootWrapper = styled(Box)(() => ({
  width: "100%",
  padding: 0,
  backgroundImage: `url(${"../background.png"})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

function App() {
  return (
    <RootWrapper>
      <Navbar />
      <Hero/>
      <About/>
      <Tracks/>
      <Schedules/>
      <FAQ/>
      <Sponsors/>
      <Footer/>
    </RootWrapper>
  )
}

export default App

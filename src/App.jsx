import { BrowserRouter } from "react-router-dom";

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0 flex justify-center mb-4'>
          <a href="https://www.linkedin.com/in/chiaqijun/" target="_blank">
            <img src="./src/assets/linkedin.png" alt="LinkedIn" className="h-20 mx-10" />
          </a>
          <a href="https://github.com/melwin911" target="_blank">
            <img src="./src/assets/github.png" alt="Github" className="h-20 mx-10" />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

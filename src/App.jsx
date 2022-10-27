import React from "react";
import { Hero, Sale, FlexContent, Stories,Footer, Navbar,Cart } from "./components";
import { heroapi, highlight, popularsales, sneaker, story, toprateslaes, footerAPI } from "./data/data";

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sale endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sale endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  );
};

export default App;

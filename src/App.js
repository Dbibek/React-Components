import React from "react";
import Header from "./Components/header";
// import Banner from "./Components/Banner";
// import TitleList from "./Components/Services";
// import Content from './Components/Content'
import Services from './Components/Services'
import RecentWork from './Components/RecentWork'
import Testimonial from './Components/Testimonial'
import Footer from "./Components/footer";
const App = () => {
  return (
    <div className="full-page">
      <Header />
      
      {/* <Content /> */}
      <Services />
      <RecentWork />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default App;

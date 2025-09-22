import Title from "../JSX/Title.jsx";
import Nav from "../JSX/Nav.jsx";
import Content from "../JSX/Content.jsx";
import Footer from "../JSX/Footer.jsx";

import '../CSS/App.css'

function Home() {
  return (
    <div>
      <Nav />
      <Title />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;

import AboutMe from "./components/organisms/AboutMe";
import Contact from "./components/organisms/Contact";
import Header from "./components/organisms/Header";
import Projects from "./components/organisms/Projects";
import Referrals from "./components/organisms/Referrals";
import TechStack from "./components/organisms/TechStack";

const Home = () => {
  return (
    <main>
      <Header />
      <AboutMe />
      <TechStack />
      <Projects />
      <Referrals />
      <Contact />
    </main>
  );
};

export default Home;

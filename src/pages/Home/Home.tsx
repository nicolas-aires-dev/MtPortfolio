import Hero from "./sections/Hero/Hero"
import Navbar from "../../components/navbar/navbar"
import ProjectsSection from "./sections/Projects/Projects"
import AboutSection from "./sections/About/AboutSection"


const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection />
      <ProjectsSection />
    </>
  )
}

export default Home

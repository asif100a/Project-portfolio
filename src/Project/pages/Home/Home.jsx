import Footer from "../../sharedFile/footer/Footer";
import Navbar from "../../sharedFile/navbar/Navbar";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#0d1117] text-white">
                <Banner />
                <About />
                <Education />
                <Skills />
                <Projects />
                <WorkExperience />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
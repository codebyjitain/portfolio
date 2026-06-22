import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Projects from './pages/Projects'
import Contact from './pages/Contact'



export const MainLayout = () => {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>

      <div className='fixed bottom-3 flex justify-center w-full'>
        <Navbar />
      </div>
    </>
  );
};

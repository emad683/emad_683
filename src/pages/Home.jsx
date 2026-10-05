import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Edu from '../components/Edu'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Edu />
      <Content />
      <Footer />
    </div>
  )
}

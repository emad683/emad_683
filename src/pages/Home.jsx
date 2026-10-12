import { lazy, Suspense } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const Skill = lazy(() => import('../components/Skill'))
const Project = lazy(() => import('../components/Project'))
const Edu = lazy(() => import('../components/Edu'))
const Content = lazy(() => import('../components/Content'))
const Footer = lazy(() => import('../components/Footer'))

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Skill />
        <Project />
        <Edu />
        <Content />
        <Footer />
      </Suspense>
    </div>
  )
}

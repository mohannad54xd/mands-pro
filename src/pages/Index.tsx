import About from "../components/About"
import Background from "../components/Background"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"

const Index = () => {
  return (
    <div>
      <Background>
      <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </Layout>
    </Background>
    </div>
  )
}

export default Index

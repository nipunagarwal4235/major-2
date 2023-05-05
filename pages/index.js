import AboutUs from "@/components/AboutUs"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import News from "@/components/News"
import Footer from "@/components/Footer"
import Research from "@/components/Research"


export default function Home() {
  return (
    <>
      <Header />
      <Navbar/>
      <AboutUs/>
      <Research/>
      <News/>
      <Footer/>
    </>
  )
}

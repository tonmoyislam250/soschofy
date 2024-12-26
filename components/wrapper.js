import Navbar from "./Navbar"
import Footer from "./footer"
export default function RootLayout({ children,...props}) {
    console.log(props);
    return (
      <div>
        <Navbar />
        {children}
        <Footer/>
      </div>
    )
  }
  
import Footer from "./footer/index";
import Header from "./header/index";

function Layout({ children }) {
  return (
      <>
          <Header />
             {children}
          <Footer />
      </>
  )
}
export default Layout
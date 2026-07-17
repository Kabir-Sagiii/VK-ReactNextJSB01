import "./App.css"
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./pages/home/Home.jsx"
function App(){
  return <div id="app">
     <Navbar />
     <Home />
    <h1 id="title">Welcome to React Application</h1>
    <Footer />
  </div>
}

export default App



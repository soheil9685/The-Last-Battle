import "./App.css"
import Explanation from "./components/Explanation/Explanation";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Purchase from "./components/Purchase/Purchase";
import Training from "./components/Training/Training";

function App() {
    return (
        <>
            <MyNavbar />    
            <Hero />
            <Explanation />
            <Training />
            <Purchase />
            <Footer />
        </>
    )
}

export default App;
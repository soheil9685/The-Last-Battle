import "./App.css"
import Explanation from "./components/Explanation/Explanation";
import Hero from "./components/Hero/Hero";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Training from "./components/Training/Training";

function App() {
    return (
        <>
            <MyNavbar />
            <Hero />
            <Explanation />
            <Training />
        </>
    )
}

export default App;
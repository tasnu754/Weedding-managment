import Agency from "../Components/Agency";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HoverAnimation from "../Components/HoverAnimation";
import Serviecs from "../Components/Serviecs";

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Serviecs></Serviecs>
            <HoverAnimation></HoverAnimation>
            <Agency></Agency>
            <Footer></Footer>
        </div>
    );
};

export default Home;
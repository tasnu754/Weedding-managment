import Agency from "../Components/Agency";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HoverAnimation from "../Components/HoverAnimation";

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <HoverAnimation></HoverAnimation>
            <Agency></Agency>
            <Footer></Footer>
        </div>
    );
};

export default Home;
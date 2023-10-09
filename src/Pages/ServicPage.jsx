import { useParams } from "react-router-dom";
import CustomContext from "../Components/CustomContext";
import { useEffect, useState } from "react";
import swal from "sweetalert";


const ServicPage = () => {
    const params = useParams();
    const { serviceData } = CustomContext();
    const [card, setCard] = useState({});
    // console.log(params , serviceData);

    const handlebook = () => {
         swal("Booked!", "We will contact you soon", "success");
    }

    useEffect(() => {
        const currentCard = serviceData.find((card) => card.id == params.id)
        setCard(currentCard);
    },[params.id , serviceData])
    return (
      <div>
        <h1 className="text-5xl font-extrabold text-center p-10">
          We focus on your desire
        </h1>
        <div className="lg:flex gap-4 lg:p-10 text-sky-900 bg-sky-100">
          <div className=" ">
            <img className="rounded-md" src={card.image_url} alt="" />
          </div>
          <div className="p-6 lg:p-8 flex-grow-1 space-y-10 items-center ">
            <h3 className="text-2xl font-bold">{card.name}</h3>
            <p className="text-xl">{card.details}</p>
            <div className="flex justify-between text-xl font-bold">
              <p>Price: {card.price}</p>
              <p>Reviews: {card.reviews_count}k</p>
            </div>
            <div className="md:flex justify-between space-y-6">
              <p className="text-xl font-bold">
                Loaction: <span> {card.location}</span>
              </p>
              <p className="text-xl font-bold">
                Working Duration: {card.duration}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-xl font-bold">
                Availability: {card.availability}
              </p>

              <p className="text-xl font-bold">Rating: {card.rating}</p>
            </div>
            <button onClick={handlebook} className="btnSignin ">
              Book now
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServicPage;
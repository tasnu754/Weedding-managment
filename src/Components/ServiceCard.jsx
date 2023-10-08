import PropTypes from "prop-types";


const ServiceCard = ({ data }) => {
    console.log(data);
    return (
      <div>
        <div data-aos="fade-left" className="card card-side bg-base-100 shadow-xl md:h-[250px]">
          <figure>
            <img
              className="h-[350px] lg:w-[400px]"
              src={data.image_url}
              alt="Movie"
            />
          </figure>
          <div className="card-body space-y-4">
            <h2 className="card-title md:text-2xl font-bold text-sky-900">
              {data.short_description}
            </h2>
            <p className="font-bold text-sky-700">
              Service Charge: {data.price}
            </p>
            <div className="card-actions justify-end">
              <button className="btnSignin  text-white font-bold">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};
ServiceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceCard;

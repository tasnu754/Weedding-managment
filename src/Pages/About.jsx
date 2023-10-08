import Footer from "../Components/Footer";

const About = () => {
    return (
      <div className="">
        <div className="">
          <div className="p-10 bg-gray-300">
            <h1 className="text-5xl font-bold">About Us</h1>
          </div>
          <div className="p-6 md:p-10 text-xl ">
            <p>
              Our full services, all-the-way subtleties, and administrations
              make our studio the ideal beginning for everything party style.
              Through imaginative structure and immaculate execution, we create
              paramountly and one-of-a-kind events, everything being equal,
              sizes and styles.We are grant-winning industry pioneers giving the
              executives complete gathering, event coordination, and inventive
              generation.
            </p>
            <br />
            <img
              className="w-[90%] mx-auto h-[400px] md:h-[600px] my-10"
              src="https://i.ibb.co/cF1bV9Q/ben-rosett-n-Yugm-V-SY6s-unsplash.jpg"
              alt=""
            />
            <p>
              For a long time, our capable, experienced group has aced
              incalculable festivals , weddings, corporate occasions, birthday
              celebrations, meals and that’s only the tip of the iceberg.
            </p>
            <p>
              Named World’s Top 10 Event Planner by Famous magazine name, top
              wedding organizer by ‘Famous wedding planner’ and ‘Magazine name
              2’, top event organizer by ‘famous organization in event
              management domain’, and best event trend-setter by ‘TV Channel
              name’, we share our understanding and energy with customers both
              huge and little.
            </p>{" "}
            <br />
            <p>
              Our Chicago studio is the ideal break from the real world. Walk
              around the best new plan patterns, shading palettes, florals, and
              presents for each event as we breathe life into motivation 7 days.
              From arranging, styling, florals, lighting, rentals, stationery,
              cute gifts, and coordination, our administration is exceptionally
              close to home.
            </p>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default About;
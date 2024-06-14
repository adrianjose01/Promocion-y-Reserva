import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import background from "../Images/background-homepage.png";
import imageExperience from "../Images/image-homepage.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Header />
      <div
        className="flex h-[80vh] w-full bg-no-repeat bg-cover items-center justify-center flex-col gap-4 px-3"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-white font-black text-5xl text-center">
          Conoce Los Mejores Lugares Turisticos de Republica Dominicana
        </h1>
        <Link
          to="/registrarse"
          className="py-2 px-4 bg-sky-900 text-white rounded-lg"
        >
          Empieza ya
        </Link>
      </div>
      <section className="flex items-center justify-around my-20 px-3">
        <div>
          <img className="w-96" src={imageExperience} />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-sky-900 font-black text-2xl text-center">
            Vive La Experiencia!
          </p>
          <Link
            to="/registrarse"
            className="py-2 px-4 bg-sky-900 text-white rounded-lg"
          >
            Conoce Lugares
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;

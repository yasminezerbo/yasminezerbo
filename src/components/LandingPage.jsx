import React from "react";
import { Link } from "react-router-dom";
import "./custom.css"

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center h-full w-full landingPage">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-auto lg:h-full flex items-center justify-center">
              <img
                src={require("../assets/images/Awa-yasmine.png")}
                alt="Awa Yasmine Zerbo-Civil Engineer"
                className="w-/2 h-auto lg:h-full"
              />
            
            </div>
          </div>
          <div className="lg:w-1/2  pt-5 text-white">
            <div className="py-12 lg:py-24">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Yasmine Zerbo
              </h1>
              <p className="text-lg mb-8 profession uppercase">
                Ingénieure Civile
              </p>
              <p className="mb-6 text-white">
                Bienvenue sur mon site portfolio. Je suis spécialisée dans la
                conception et la construction de différents projets d'ingénierie
                civile, tels que des ponts, des routes et des bâtiments. Fort de
                plusieurs années d'expérience dans ce domaine, je m'engage à
                fournir des solutions d'ingénierie de haute qualité et
                innovantes pour relever les défis complexes.
              </p>
              <Link
                to="/projets"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold uppercase"
              >
                Mes Projets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

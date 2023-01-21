import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/binTree.png";
import IMG2 from "../../assets/Min-Heap1.png";
import IMG3 from "../../assets/cFour.png";

const data = [
  {
    id: 2,
    image: IMG2,
    title: "FastAPI: Blog Backend",
    github: "https://github.com/walitemuri/FastAPI-Blog",
    demo: "https://github.com/walitemuri",
    p1: "RESTful API, all CRUD operations",
    p2: "PostgreSQL Database, JWT secured endpoints",
    p3: "SQLAlchemy ORM, Alembic DB Migration"
  },
  {
    id: 1,
    image: IMG1,
    title: "Binary Expression Tree",
    github: "https://github.com/walitemuri/Binary_Expression_Tree",
    demo: "https://github.com/walitemuri",
    p1: "C Implementation of BST Data Structure",
    p2: "Supports variables, calculation of entered expressions",
    p3: "Displays Preorder, Postorder, Inorder"
  },
  {
    id: 4,
    image: IMG1,
    title: "Covid-19 Regional Analysis",
    github: "https://github.com/walitemuri/covid-19-response",
    demo: "https://github.com/walitemuri",
    p1: "Data Analysis on relationship between vaccination rates and positive test cases",
    p2: "Covered various regions in Ontario, sorted by Age Group and plotted on a graph",
    p3: "Python Libs: Seaborn, Pandas, matplotlibs"
  },
  {
    id: 3,
    image: IMG1,
    title: "Portfolio Page: React",
    github: "https://github.com/walitemuri/ConnectFour_OOP",
    demo: "https://github.com/walitemuri",
    description: ""
  },
  {
    id: 5,
    image: IMG1,
    title: "Car Rental Data Management",
    github: "https://github.com/walitemuri/CarRental_LinkedList",
    demo: "https://github.com/walitemuri",
    description: ""
  },
  {
    id: 6,
    image: IMG1,
    title: "A* Pathfinding Algorithm",
    github: "https://github.com/walitemuri/TicTacToe_OOP",
    demo: "https://github.com/walitemuri",
    description: "Hey <br> There"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, p1, p2,p3 }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer" >
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer" >
                  Live Demo
                </a>
              </div>
              <div className="portfolio__description">
                <ul>
                  <li>{p1}</li>
                  <li>{p2}</li>
                  <li>{p3}</li>
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/binTree.png";
import IMG2 from "../../assets/Min-Heap1.png";
import IMG4 from "../../assets/post1.png";
import IMG5 from "../../assets/plot.png";
import IMG6 from "../../assets/portfolio.png";
import IMG7 from "../../assets/down-heap.png";

const data = [
  {
    id: 2,
    image: IMG4,
    title: "FastAPI: Blog Backend",
    github: "https://github.com/walitemuri/FastAPI-Blog",
    demo: "https://fastapi--wt-blog.herokuapp.com/docs",
    p1: "RESTful API, all CRUD operations",
    p2: "PostgreSQL Database, JWT secured endpoints",
    p3: "SQLAlchemy ORM, Alembic DB Migration",
  },
  {
    id: 1,
    image: IMG1,
    title: "Binary Expression Tree Calculator",
    github: "https://github.com/walitemuri/Binary_Expression_Tree",
    demo: "https://github.com/walitemuri/Binary_Expression_Tree",
    p1: "C Implementation of BST Data Structure",
    p2: "Supports variables, calculation of entered expressions",
    p3: "Displays Preorder, Postorder, Inorder",
  },
  {
    id: 4,
    image: IMG5,
    title: "Covid-19 Regional Analysis",
    github: "https://github.com/walitemuri/covid-19-response",
    demo: "https://github.com/walitemuri",
    p1: "Data Analysis on KPIs like vaccination rates and positive test cases",
    p2: "Covered various regions in Ontario, includes modifiable date-range for analysis",
    p3: "Python Libs: Seaborn, Pandas, matplotlib",
  },
  {
    id: 3,
    image: IMG6,
    title: "Personal Portfolio Page",
    github: "https://github.com/walitemuri/react-portfolio",
    demo: "#header",
    p1: "Personal Portfolio Page created with ReactJSX",
    p2: "Utilizes Media Queries, CSS animations and dynamic arrays for responsive design",
    p3: "Integration with EmailJS in order to send emails directly from contact form",
  },
  {
    id: 5,
    image: IMG2,
    title: "Car Rental System",
    github: "https://github.com/walitemuri/Car_LinkedList_py",
    demo: "https://github.com/walitemuri",
    p1: "Python Implementation for Car Rental Services, managing the database lists",
    p2: "Maintains 3 linked lists: Rented, Repair, Available",
    p3: "Implementation of Merge Sort for efficient sorting of lists by plate and date",
  },
  {
    id: 6,
    image: IMG7,
    title: "A* Pathfinding Algorithm",
    github: "https://github.com/walitemuri/A-PathFinding_Py",
    demo: "https://www.youtube.com/shorts/0W1wnDD8vwY",
    p1: "Python Implenentation of the  A* algorithm utilizes PyGame for visualization",
    p2: "Manhattan distance used for heuristic function",
    p3: "Aesthetic visualization illustrates the functionality of the A* algorithm",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, p1, p2, p3 }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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

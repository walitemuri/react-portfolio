import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/binTree.png'
import IMG2 from '../../assets/Min-Heap1.png'
import IMG3 from '../../assets/cFour.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Binary Expression Tree',
    github: 'https://github.com/walitemuri/Binary_Expression_Tree',
    demo: 'https://github.com/walitemuri'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Down-Heap Algorithm',
    github: 'https://github.com/walitemuri/Down-Heap',
    demo: 'https://github.com/walitemuri'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Connect-Four OOP',
    github: 'https://github.com/walitemuri/ConnectFour_OOP',
    demo: 'https://github.com/walitemuri'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Covid-19 Regional Analysis',
    github: 'https://github.com/walitemuri/covid-19-response',
    demo: 'https://github.com/walitemuri'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Car Rental Data Management',
    github: 'https://github.com/walitemuri/CarRental_LinkedList',
    demo: 'https://github.com/walitemuri'
  },
  {
    id: 6,
    image: IMG1,
    title: 'TicTacToe OOP',
    github: 'https://github.com/walitemuri/TicTacToe_OOP',
    demo: 'https://github.com/walitemuri'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key = {id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>  
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
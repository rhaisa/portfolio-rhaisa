import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/todoList.png'
import thumb02 from '../assets/images/thumbs/ecommerce.png'
import thumb03 from '../assets/images/thumbs/mealPlanner.png'
import thumb04 from '../assets/images/thumbs/bootcamp.jpg'

const DEFAULT_IMAGES = [
  {
    id: '4',
    thumbnail: thumb04,
    caption: 'Coding Bootcamp',
    path: '/project-bootcamp',
  },
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Todo List',
    path: '/project-todo-list',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'Ecommerce',
    path: '/project-ecommerce',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Meal Planer',
    path: '/project-meal-planner',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Hi! I'am Rhaisa, a Junior Web Developer</h2>
            </header>
            <p>
              {' '}
              I am a Web developer student with experience in building websites
              and web applications. My focus in JavaScript, React, HTML and CSS.
              I also work with Next.js and GraphQL. Take a look at my work or
              get in touch!
            </p>
            <ul className="actions">
              <li>
                <Link to="/about" className="button">
                  More about me
                </Link>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>My Portfolio</h2>

            <Gallery images={DEFAULT_IMAGES} />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)"></div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Vienna, Austria
                  </li>

                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:rhaisaalves@gmail.com">
                      rhaisaalves@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

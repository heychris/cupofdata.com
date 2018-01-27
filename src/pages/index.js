import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link, { withPrefix} from 'gatsby-link'
import graphql from 'graphql'
import SliderCODView from '../containers/SliderCODView'

import '../sass/landing.sass';

const IndexPage = ({ data }) => (
  <div>
    <div className="banner-wrapper">
      <Container>
        <div className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={withPrefix('/files/images/img-logo.svg')}></img>
          </Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to='/features' className='nav-link'>Features</Link>
            </li>
            <li className='nav-item'>
              <Link to='/pricing' className='nav-link'>Pricing</Link>
            </li>
            <li className='nav-item'>
              <Link to='/company' className='nav-link'>Company</Link>
            </li>
            <li className='nav-item'>
              <Link to='/resouces' className='nav-link'>Resources</Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-link'>Blog</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>Login</Link>
            </li>
          </ul>
        </div>
        <div className="banner-view pa-5">
          <h1>Sip of your future</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</p>
          <button className="submit-button">Regiser Now</button>
        </div>
      </Container>
    </div>
    <SliderCODView />
  </div>
)

export default IndexPage

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           frontmatter {
//             title
//             contentType
//             date(formatString: "MMMM DD, YYYY")
//             path
//           }
//         }
//       }
//     }
//   }
// `
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Podcasts = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PodcastsQuery {
        allRanking1Json {
          totalCount,
          edges {
            node {
              title,
              url,
              episodes,
              description
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <table class="table">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Título</th>
              <th>Episodios</th>
              <th>Enlace</th>
            </tr>
          </thead>
          {data.allRanking1Json.edges.map(({ node }, index) => (
            <tr>
                <td>{index + 1}</td>
                <td>{node.title}</td>
                <td>{node.episodes}</td>
                <td><a href="{node.url}">Enlace</a></td>
            </tr>
          ))}
        </table>
      </>
    )}
  />
)

Podcasts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Podcasts

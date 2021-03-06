import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-simple-flex-grid'

import { ProductCard } from './index'

const FeaturedProductListRow = styled(Row)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
`
export const FeaturedSection = ({ allProducts, filterOut }) => {
  let getFirst3Featured = allProducts => {
    let filteredProducts = allProducts.edges
    if (filterOut) {
      filteredProducts = allProducts.edges.filter(
        ({ node }) => node.contentful_id !== filterOut.contentful_id
      )
    }
    return filteredProducts
      .filter(({ node }) => node.isFeatured === true)
      .slice(0, 3)
  }

  return (
    <div>
      <h2>Препоръчани</h2>
      <hr />
      <FeaturedProductListRow gutter={20}>
        {getFirst3Featured(allProducts).map(({ node }) => (
          <Col xs={12} sm={6} md={6} lg={4} xl={4} key={node.contentful_id}>
            <ProductCard productData={node} />
          </Col>
        ))}
      </FeaturedProductListRow>
    </div>
  )
}

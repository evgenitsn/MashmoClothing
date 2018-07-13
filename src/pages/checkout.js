import React from 'react'
import { push } from 'gatsby-link'
import { Row, Col } from 'react-simple-flex-grid'
import { toast } from 'react-toastify'

import { Toast, CartTable } from '../components'
import {
  H1,
  FeaturedButton,
  InputField,
  Container,
  GhostButtonLink,
  TextAreaField,
} from '../components/styled'

import colors from '../utils/colors'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    //TODO: Redirect from this page to Products if there is nothing in the cart
    this.state = {
      cartItems: [],
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.setState(
        {
          cartItems: JSON.parse(localStorage.getItem('cart')) || [],
        },
        () => {
          if (this.state.cartItems.length === 0) {
            //TODO: Display toastr msg for redirect
            this.props.history.push('/products')
          }
        }
      )
    }
  }

  handleChange = e => {
    //TODO: Create Validations
    this.setState({ [e.target.name]: e.target.value })
  }

  successMadeOrder = () =>
    toast(() => (
      <div>
        <div style={{ color: colors.black }}>
          Поръчката беше направена успешно! 😎
        </div>
      </div>
    ))

  handleSubmit = e => {
    //TODO: Create Validations
    e.preventDefault()
    console.log('Submit Order')
    this.successMadeOrder()
  }

  render() {
    const { cartItems } = this.state
    let isCartEmpty = cartItems.length === 0

    return (
      <div>
        <H1 underlined>Завършване на поръчката</H1>
        <Container backgroundColor={colors.grey} height="0.9rem">
          <CartTable readOnly={true} cartItems={cartItems} />
          <Row justify="end">
            <GhostButtonLink to="/cart" style={{ fontSize: '1rem' }}>
              Обратно към кошницата
            </GhostButtonLink>
          </Row>
        </Container>
        <br />
        <H1 underlined>Данни за доставка</H1>
        <form
          name="order"
          method="post"
          action="/" //TODO: decide what to do here maybe thanks for the order ?
          onSubmit={this.handleSubmit}
        >
          <Row gutter={40}>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <InputField
                type="text"
                name="name"
                placeholder="Име и Фамилия"
                onChange={this.handleChange}
              />
              <InputField
                type="text"
                name="name"
                placeholder="Телефон"
                onChange={this.handleChange}
              />
              <InputField
                type="text"
                name="name"
                placeholder="Адрес"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <InputField
                type="text"
                name="name"
                placeholder="Еконт офис"
                onChange={this.handleChange}
              />
              <TextAreaField
                name="message"
                rows={4}
                placeholder="Бележка"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row justify="center">
            <FeaturedButton type="submit">Поръчай</FeaturedButton>
          </Row>
        </form>
        <Toast />
      </div>
    )
  }
}

export default Checkout

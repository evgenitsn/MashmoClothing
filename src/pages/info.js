import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-simple-flex-grid'

import { GhostButtonLink } from '../components/styled'

const SectionHeading = styled.h2`
  margin-bottom: 1.5rem;
  text-align: left;
`

const Paragraph = styled.p`
  font-size: 0.9rem;
`

const CharSpan = styled.span`
  font-size: 2rem;
`

const Info = () => (
  <div>
    <Row gutter={60}>
      <Col
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        style={{ marginBottom: '2rem', borderRight: '1px solid grey' }}
      >
        <SectionHeading>Доставка</SectionHeading>
        <Paragraph>
          Продуктите, предлагани в www.mashmoclothing.com се изпращат единствено
          и само чрез Еконт. Срокът за доставка е 1-3 работни дни след
          потвърждаване на поръчката. Поръчки направени след 15:30 ч., се
          изпращат на следващия ден. Доставката се извършва от куриерска фирма
          Еконт Експрес, като транспортните разходи са за сметка на клиента, а
          сумата за тях се изчислява според тарифите на куриерската фирма.
          Плащането се извършва чрез наложен платеж при получаване на стоката.
        </Paragraph>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        style={{ marginBottom: '2rem' }}
      >
        <SectionHeading>Начин на доставка</SectionHeading>
        <ul>
          <li>Доставка до офис на Еконт</li>
          <li>Доставка до посочен адрес</li>
          <li>Опция преглед и тест</li>
        </ul>
      </Col>
    </Row>
    <Row gutter={60}>
      <Col
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        style={{ marginBottom: '2rem', borderRight: '1px solid grey' }}
      >
        <SectionHeading>Връщане на стоки</SectionHeading>
        <Paragraph>
          Връщането на стоки може да се осъществи в 14 дневен срок, след
          получаване на пратката. Съгласно чл. 50, ал. 1 от ЗЗП, потребителят
          може да се откаже от закупена стока в 14 дневен срок, без да посочва
          причина, като транспортните разходи са за сметка на клиента. Моля
          свържете се с нас преди да изпратите стоки за връщане. След получаване
          на върнатата стока, сумата за нея ще бъде възстановена в 14 дневен
          срок.
        </Paragraph>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        style={{ marginBottom: '2rem' }}
      >
        <SectionHeading>Контакти</SectionHeading>
        <ul>
          <li>mashmoclothing@gmail.com</li>
          <li>+395 899 999 999</li>
        </ul>
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <GhostButtonLink to="/products">
        Към продуктите <CharSpan>→</CharSpan>{' '}
      </GhostButtonLink>
    </Row>
  </div>
)

export default Info

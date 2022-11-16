import React from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"

const Footer = () => {
  return (
    <S.Container>
      <S.Box>
        <S.LogoBox>
          <Link to="/">
            <p>Qumunity</p>
          </Link>
        </S.LogoBox>
        <S.CenterBox>
          <S.InnerBox>
            <S.Title>STACK OVERFLOW</S.Title>
            <ul>
              <Link to="/">
                <li>Questions</li>
              </Link>
              <li>Help</li>
            </ul>
          </S.InnerBox>
          <S.InnerBox>
            <S.Title>PRODUCTS</S.Title>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </S.InnerBox>
          <S.InnerBox>
            <S.Title>COMPANY</S.Title>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </S.InnerBox>
          <S.InnerBox>
            <S.Title>STACK EXCHANGE NETWORK</S.Title>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li> </li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </S.InnerBox>
        </S.CenterBox>

        <S.RightBox>
          <S.SnsBox>
            <ul>
              <li>Blog</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </S.SnsBox>
          <S.Copyright>
            <p>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under <span>CC BY-SA.</span>
            </p>

            <p>rev 2022.8.26.42919</p>
          </S.Copyright>
        </S.RightBox>
      </S.Box>
    </S.Container>
  )
}

export default Footer

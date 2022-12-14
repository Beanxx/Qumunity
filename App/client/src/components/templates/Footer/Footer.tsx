import React from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"
import { ReactComponent as LogoImg } from "../../../assets/icons/logo.svg"
import { ReactComponent as GithubIcon } from "../../../assets/icons/github.svg"

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Top>
          <div className="logo_box">
            <div className="logo-box">
              <a href="/">
                <LogoImg viewBox="300 0 200 400" fill="var(--footer-color)" />
              </a>
            </div>
          </div>
          <div className="link_box">
            <Link to="/">Questions</Link>
            <Link to="/users">Users</Link>
          </div>
        </S.Top>
        <S.Bottom>
          <div className="copyright_box">
            © Copyright 2022. Qumunity inc. all rights reserved.
          </div>
          <div className="github_box">
            <a href="https://github.com/Beanxx/Qumunity">
              <div>
                <GithubIcon />
              </div>
              <span>Github</span>
            </a>
          </div>
        </S.Bottom>
      </S.Content>
    </S.Container>
  )
}

export default Footer

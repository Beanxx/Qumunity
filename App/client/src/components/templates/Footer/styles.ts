import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  height: 322px;
  background-color: var(--header-color);
  padding: 32px 12px 12px 12px;
`

export const Box = styled.div`
  width: 83%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 auto;
`

export const InnerBox = styled.div`
  flex: 3;
  li {
    color: #9fa6ad;
    line-height: 2;
    font-size: 13px;
  }
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 150px;

  li {
    color: #9fa6ad;
    line-height: 1.6;
  }
`

export const Title = styled.h5`
  color: #babfc4;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 12px;
`

export const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;

  ul li {
    float: left;
    margin-right: 1rem;
  }
`

export const Copyright = styled.div`
  color: #9199a1;
  font-size: 11px;
  line-height: 14px;
  padding-right: 3rem;
  letter-spacing: 0.7px;
  p span {
    text-decoration: underline;
  }
`

export const LogoBox = styled.div`
  margin: 0 1rem;
  p {
    color: #9fa6ad;
    font-size: 20px;
  }
`

export const CenterBox = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-direction: row;
  margin-top: 5px;
`

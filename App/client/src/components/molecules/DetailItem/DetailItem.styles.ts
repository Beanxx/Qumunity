import styled from "styled-components"

type Props = {
  detailType: "question" | "answer"
}

export const Container = styled.li<Props>`
  border-bottom: ${(props) =>
    props.detailType === "answer" ? "1px solid #e3e6e8" : null};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid #e3e6e8;
  color: rgb(106, 115, 124);
`

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const View = styled.div`
  > span {
    color: #000;
  }
`

export const Edit = styled.div`
  display: flex;
  gap: 10px;

  > button {
    font-size: 13px;
    color: rgb(131, 140, 149);
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
`

export const Main = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
`

export const Side = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  svg {
    cursor: pointer;
    fill: rgb(186, 191, 196);
  }
`

export const Content = styled.div`
  flex-grow: 1;
`

export const Top = styled.div`
  min-height: 124px;
  margin-bottom: 16px;

  > p {
    font-size: 14px;
    color: #232629;
    line-height: 22.5px;
    margin-bottom: 16px;
  }
`

export const Tags = styled.ul`
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
`

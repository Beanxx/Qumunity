import styled from "styled-components"

type Props = {
  detailType: "question" | "answer"
}

export const Container = styled.li<Props>`
  display: flex;
  gap: 16px;
  padding: 16px;

  border-bottom: ${(props) =>
    props.detailType === "answer" ? "1px solid #e3e6e8" : null};
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
  > p {
    font-size: 15px;
    color: #232629;
    line-height: 22.5px;
    margin-bottom: 24px;
  }
`

export const Tags = styled.ul`
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
`

export const Edit = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    font-size: 13px;
    color: rgb(131, 140, 149);
    background-color: #fff;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
`

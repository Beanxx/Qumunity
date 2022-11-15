import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 16px;
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
  > p {
    font-size: 15px;
    color: #232629;
    line-height: 22.5px;
  }
`

export const Tags = styled.ul`
  display: flex;
  gap: 3px;
  margin: 24px 0 12px 0;
`

export const Edit = styled.div`
  display: flex;
  justify-content: space-between;

  > a {
    font-size: 13px;
    color: rgb(131, 140, 149);
    cursor: pointer;
  }
`

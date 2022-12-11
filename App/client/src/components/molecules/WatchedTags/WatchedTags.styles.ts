import styled from "styled-components"

export const Container = styled.div`
  font-size: 13px;
  width: 300px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
`

export const Title = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--side-bgc);
  color: var(--text-color);
  font-weight: 400;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: rgb(106, 115, 124);
  padding: 15px 15px;
  border-bottom: #d6d9dc;

  svg {
    fill: #379fef;
  }
`

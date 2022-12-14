import styled from "styled-components"

export const styles = {
  container: {
    height: "580px",
  },
}

export const Description = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6a737c;
  margin-bottom: 1rem;
`

export const BottomDescription = styled.div`
  margin-top: 1rem;
  font-size: 12px;
  color: #6a737c;

  span {
    color: #0074cc;
  }
`
export const CheckDescription = styled.div`
  height: 70px;
  display: flex;
  align-items: flex-start;
  font-size: 13px;
  line-height: 1rem;
  margin-bottom: 10px;
  color: var(--text-color);

  input {
    margin-right: 5px;
  }
`
export const Message = styled.div`
  width: 100%;
  color: #ed5e3e;
  font-size: 11px;
  padding-left: 3px;
`

export const Box = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const BtnBox = styled.div`
  margin-top: 1rem;
`

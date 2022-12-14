import styled from "styled-components"

const Container = styled.form`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--side-bgc);
  border: 1px solid var(--border-color);
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`
export default Container

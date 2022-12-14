import styled from "styled-components"

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 4px;

    > span {
      color: #0a95ff;
    }
  }

  time {
    color: rgb(106, 115, 124);
    > span {
      color: var(--text-color);
    }
  }
`

export default Container

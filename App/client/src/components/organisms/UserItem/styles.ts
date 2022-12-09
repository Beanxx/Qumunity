import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex: 1 1 auto;

  img {
    border-radius: 10px;
    width: 70px;
  }

  .info_box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      color: #0074cc;

      &:hover {
        color: #0a95ff;
      }
    }
  }
`

export default Container

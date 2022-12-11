import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex: 1 1 auto;
  color: var(--text-color);

  img {
    border-radius: 10px;
    width: 70px;
  }

  .info_box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      color: var(--title-color);

      &:hover {
        color: #5aa4fa;
      }
    }
  }
`

export default Container

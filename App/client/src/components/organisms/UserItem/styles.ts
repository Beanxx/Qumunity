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

    div {
      color: var(--text-color);
      font-size: 13px;
    }

    .title {
      color: var(--btn-hover-color);
      font-size: 17px;

      &:hover {
        color: var(--title-color);
      }
    }
  }
`

export default Container

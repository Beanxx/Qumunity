import styled from "styled-components"

export const Layout = styled.div`
  width: 100%;
  height: 82vh;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;

  div {
    color: var(--content-color);
  }

  .link-style {
    color: var(--title-color);
    &:hover {
      border-bottom: 1px solid var(--title-color);
    }
  }
`

import styled from "styled-components"

export const Container = styled.div`
  width: 95%;
  height: calc(100vh - 50px);
  display: flex;
  gap: 10px;
  padding: 1rem;
  margin: auto;
  color: var(--text-color);

  > .inner_box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: 100%;

    > .title_style {
      color: var(--text-color);
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 15px;
    }
  }
`

export const ListBox = styled.div`
  width: 100%;
  height: 90%;
  background-color: var(--side-bgc);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  .list_box {
    flex: 8;
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .pagination_box {
    flex: 1;
    width: 100%;
  }
`

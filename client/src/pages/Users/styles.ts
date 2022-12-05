import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-right: 0;

  .top_container {
    display: flex;
    margin-bottom: 2rem;

    .page_title {
      flex: 4;
      font-size: 27px;
    }

    .search_box {
      flex: 1;
    }
  }
`
export default Layout

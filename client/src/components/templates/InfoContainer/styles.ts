import styled from "styled-components"

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 50px - 80vh);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-right: 1.5rem;
  margin: auto;
  margin-top: 2rem;
`

export const ProfileBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    border-radius: 20px;
    margin-right: 10px;
  }

  .name-style {
    font-size: 30px;
    padding-bottom: 5px;
  }
`

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;

  > .title_style {
    font-size: 23px;
    font-weight: 400;
    margin-left: 3px;
  }
`

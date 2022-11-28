import styled from "styled-components"

export const Container = styled.div`
  width: 80%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: auto;
`

export const ProfileBox = styled.div`
  display: flex;
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
  margin-top: 6px;

  > .title_style {
    font-size: 23px;
    font-weight: 400;
    margin-left: 3px;
  }
`

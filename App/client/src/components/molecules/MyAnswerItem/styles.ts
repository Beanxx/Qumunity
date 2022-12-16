import styled from "styled-components"

export const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 5px;
`

export const TopBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  div {
    color: var(--text-color);
    font-size: 13px;
  }
`

export const TitleBox = styled.div`
  color: var(--title-color);
  font-size: 15px;
  display: flex;
  margin-bottom: 10px;
`

export const BottomBox = styled.div`
  color: var(--text-color);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  div {
    color: var(--content-color);
    font-size: 12px;
  }
`
export const Tags = styled.ul`
  display: flex;
  gap: 4px;
`

import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  border-bottom: 1px solid #e3e6e8;
  padding: 16px;
  font-size: 13px;
`

export const State = styled.ul`
  margin-right: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 100px;
  gap: 10px;

  color: rgb(106, 115, 124);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 8px;

  h1 {
    font-size: 17px;
    color: #0074cc;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
  }
`

export const ContentBot = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;
`

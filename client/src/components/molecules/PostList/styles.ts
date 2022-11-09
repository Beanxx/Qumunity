import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border: 1px solid #e3e6e8;
  /* border-bottom: 1px solid #e3e6e8; */
  padding: 16px;
  font-size: 13px;
`

export const State = styled.div`
  border: 1px solid red;
  margin-right: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 100px;
  gap: 10px;

  color: rgb(106, 115, 124);
`

export const Content = styled.div`
  border: 1px solid blue;

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

export const UserInfo = styled.div``

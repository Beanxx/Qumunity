import styled from "styled-components"

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid #e3e6e8;
`

export const AnswerTitle = styled.div`
  font-size: 19px;
  color: #232629;
  padding: 24px 12px;
`

export const AnswerForm = styled.form`
  > label {
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    gap: 24px 0;

    > textarea {
      border: 1px solid #babfc4;
      border-radius: 3px;
      width: 100%;
      height: 200px;
      resize: none;
      padding: 10px;

      &:focus {
        outline: 1px solid #59a4de;
      }
    }
  }
`

import React, { useState, useRef } from "react"
import Tag from "../../atoms/Tag/Tag"
import * as S from "./TagsInput.styles"

export interface Props {
  id: string
  name: string
  onEnterTag?: React.Dispatch<React.SetStateAction<string[]>>
}

const TagsInput: React.FC<Props> = ({ id, name, onEnterTag }) => {
  const [tags, setTags] = useState<string[]>([])
  const InputRef = useRef<HTMLInputElement>(null)
  InputRef.current?.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault()
    }
  })

  const tagAddHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isIncludes = tags.filter((el) => el === event.currentTarget.value)
    if (event.key === "Enter" || event.key === " ") {
      if (isIncludes.length === 0 && event.currentTarget.value !== "") {
        setTags([...tags, event.currentTarget.value.trim()])
        if (onEnterTag) {
          onEnterTag([...tags, event.currentTarget.value.trim()])
        }
        event.currentTarget.value = ""
      }
    }
  }

  return (
    <S.Container>
      <S.Tags>
        {tags.map((el) => (
          <li key={el}>
            <Tag>{el}</Tag>
          </li>
        ))}
      </S.Tags>
      <input id={id} name={name} onKeyUp={tagAddHandler} ref={InputRef} />
    </S.Container>
  )
}

export default TagsInput

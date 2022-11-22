import React, { useState } from "react"
import Tag from "../../atoms/Tag/Tag"
import Input from "../../atoms/Input/Input"
import * as S from "./TagsInput.styles"

export interface Props {
  id: string
  name: string
  onEnterTag?: React.Dispatch<React.SetStateAction<string[]>>
}

const TagsInput: React.FC<Props> = ({ id, name, onEnterTag }) => {
  const [tags, setTags] = useState<string[]>([])

  const tagAddHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const isIncludes = tags.filter((el) => el === event.currentTarget.value)
    if (event.key === "Enter" || event.key === " ") {
      if (isIncludes.length === 0 && event.currentTarget.value !== "") {
        setTags([...tags, event.currentTarget.value])
        // setTags((preTags) => {
        //   return [...preTags, event.currentTarget.value]
        // })
        // 이건 왜 안되는거지?

        if (onEnterTag) {
          onEnterTag([...tags, event.currentTarget.value])
        }
      }
    }
  }

  return (
    <S.Container>
      <S.Tags>
        {tags.map((el, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={idx}>
            <Tag>{el}</Tag>
          </li>
        ))}
      </S.Tags>
      <Input id={id} name={name} onKeyUp={tagAddHandler} />
    </S.Container>
  )
}

export default TagsInput

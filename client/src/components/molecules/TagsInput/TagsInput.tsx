import React, { useState } from "react"
import Tag from "../../atoms/Tag/Tag"
import Input from "../../atoms/Input/Input"
import * as S from "./TagsInput.styles"

const TagsInput: React.FC = () => {
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
      <Input id="input" name="input" onKeyUp={tagAddHandler} />
    </S.Container>
  )
}

export default TagsInput

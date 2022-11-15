import React, { useState, useRef } from "react"
import Tag from "../../atoms/Tag/Tag"
import Input from "../../atoms/Input"
import * as S from "./TagsInput.styles"

// type Test = {}

const TagsInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>([])
  const tagInputRef = useRef<HTMLInputElement>(null)

  const tagAddHandler = () => {
    // setTags([...tags, tagInputRef.current?.value])
  }

  return (
    <S.Container>
      <S.Tags>
        <li>
          <Tag>태그</Tag>
        </li>
        <li>
          <Tag>태그</Tag>
        </li>
      </S.Tags>
      <Input
        id="input"
        name="input"
        ref={tagInputRef}
        onKeyUp={tagAddHandler}
      />
    </S.Container>
  )
}

export default TagsInput

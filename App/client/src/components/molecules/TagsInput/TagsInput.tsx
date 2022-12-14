import React, { useState, useRef, useEffect } from "react"
import Tag from "../../atoms/Tag/Tag"
import * as S from "./TagsInput.styles"

export interface Props {
  id: string
  name?: string
  onEnterTag?: React.Dispatch<React.SetStateAction<string[]>>
  value?: string | string[]
}

const TagsInput: React.FC<Props> = ({ id, name, onEnterTag, value }) => {
  const [tags, setTags] = useState<string[]>([])

  const InputRef = useRef<HTMLInputElement>(null)
  InputRef.current?.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault()
    }
  })

  useEffect(() => {
    if (value) {
      setTags(value as string[])
      if (onEnterTag) {
        onEnterTag(value as string[])
      }
    }
  }, [value])

  const addHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (tags.length >= 5) {
      return alert("최대 5개까지 입력가능합니다.")
    }

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

  const deleteHandler = (tag: string) => {
    const filteredTags = tags.filter((el) => tag !== el)
    setTags(filteredTags)
    if (onEnterTag) {
      onEnterTag(filteredTags)
    }
  }

  return (
    <S.Container>
      <S.Tags>
        {tags.map((el) => (
          <li key={el} onClick={() => deleteHandler(el)} aria-hidden="true">
            <Tag>
              {el}
              <span>&times;</span>
            </Tag>
          </li>
        ))}
      </S.Tags>
      <input
        style={{ border: "none" }}
        id={id}
        name={name}
        onKeyUp={addHandler}
        ref={InputRef}
      />
    </S.Container>
  )
}

export default TagsInput

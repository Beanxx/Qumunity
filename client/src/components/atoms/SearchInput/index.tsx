import React, { useState } from "react"
import * as S from "./styles"
import { ReactComponent as SearchIcon } from "../../../assets/icons/searchIcon.svg"

export type Props = {
  setInputSearch: (search: string) => void
}

const SearchInput: React.FC<Props> = ({ setInputSearch }) => {
  const [input, setInput] = useState("")

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value)
  }

  const test = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setInputSearch(input)
    }
  }

  return (
    <S.Container>
      <SearchIcon />
      <S.Input
        type="text"
        placeholder="Search..."
        onChange={inputHandler}
        onKeyDown={test}
      />
    </S.Container>
  )
}

export default SearchInput

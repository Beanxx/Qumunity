import React, { useState } from "react"
import { useNavigate } from "react-router"
import * as S from "./styles"
import { ReactComponent as SearchIcon } from "../../../assets/icons/searchIcon.svg"

export type Props = {
  setInputSearch: (search: string) => void
}

const SearchInput: React.FC<Props> = ({ setInputSearch }) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value)
  }

  const submitHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setInputSearch(input)
      navigate("/")
    }
  }

  return (
    <S.Container>
      <SearchIcon />
      <S.Input
        type="text"
        placeholder="Search..."
        onChange={inputHandler}
        onKeyDown={submitHandler}
      />
    </S.Container>
  )
}

export default SearchInput

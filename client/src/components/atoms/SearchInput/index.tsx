import React from "react"
import * as S from "./styles"
import { ReactComponent as SearchIcon } from "../../../assets/icons/searchIcon.svg"

export type Props = {
  // props: string
}

const SearchInput: React.FC<Props> = () => {
  return (
    <S.Container>
      <SearchIcon />
      <S.Input type="text" placeholder="Search..." />
    </S.Container>
  )
}

export default SearchInput

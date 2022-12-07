import React from "react"
import * as S from "./styles"

interface Props {
  total: number
  page: number
  setPage: (num: number) => void
}

const Pagination: React.FC<Props> = ({ total, page, setPage }) => {
  return (
    <S.Nav>
      <S.Button onClick={() => setPage(1)} disabled={page === 1}>
        ≪
      </S.Button>
      <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        ◀️
      </S.Button>
      {Array(total)
        .fill(undefined)
        .map((_, i) => (
          <S.Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 && "page"}
          >
            {i + 1}
          </S.Button>
        ))}
      <S.Button onClick={() => setPage(page + 1)} disabled={page === total}>
        ▶️
      </S.Button>

      <S.Button onClick={() => setPage(total)} disabled={page === total}>
        ≫
      </S.Button>
    </S.Nav>
  )
}

export default Pagination

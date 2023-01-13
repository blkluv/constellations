import { css } from '@emotion/css'

export function SearchInput({
  placeholder, onChange, value, onKeyDown = null
}) {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={inputStyle}
      onKeyDown={onKeyDown}
    />
  )
}

const inputStyle = css`
  outline: none;
  border: none;
  padding: 6px 20px;
  font-size: 13px;
  border: 2px solid black;
  transition: all .4s;
  width: 300px;
  background-color: #fafafa;
  &:focus {
    background-color: white;
    border: 2px solid green;
  }
`
// border-radius: 10px;

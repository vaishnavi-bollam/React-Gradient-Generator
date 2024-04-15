// Style your elements here
import styled from 'styled-components'

export const Input = styled.input`
  width: 200px;
`

export const Button = styled.button`
  color: black;
  background-color: #00c9b7;
  border: none;
  padding: 10px;
  margin: 5px;
`

export const Container = styled.div`
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.colorOne}, ${props.colorTwo});`};
`

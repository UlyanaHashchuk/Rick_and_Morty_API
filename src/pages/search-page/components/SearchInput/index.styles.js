import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.label`
  color: #fff;
  font-size: 20px;
  margin: 25px;
  border-bottom: 1px solid #ccc;
`

const Input = styled.input`
  border: 2px solid #b4bfd4;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 10px;
`

const Button = styled.button`
  margin: 15px 15px 25px 15px;
  padding: 7px 12px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #79b6f2;
  border: none;
  border-radius: 11px;
  box-shadow: 0 5px #999;

  &:hover {
    background-color: #4d92d6;
  }
  &:active {
    background-color: #3d6fa1;
    box-shadow: 0 2px #666;
    transform: translateY(3px);
  }
`

export { Form, Label, Input, Button }

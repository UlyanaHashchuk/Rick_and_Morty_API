import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
`

const Character = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: wrap;
`

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 15px;
`

const Name = styled.div`
  margin: 5px 0;
  color: #fff;
  font-size: 20px;
`

const Loading = styled.div`
  color: #fff;
`

export { Container, Grid, Character, Avatar, Name, Loading }

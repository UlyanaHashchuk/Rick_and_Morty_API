import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 25px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 15px;
  background-color: #40434a;
  padding: 20px;
  word-wrap: wrap;
`

const Title = styled.div`
  color: #c8d3e8;
  margin-bottom: 5px;
  font-size: 16px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const Type = styled.div`
  font-size: 16px;
  margin: 10px 0;
`

const Dimension = styled.div`
  font-size: 16px;
`

export { Component, Details, Title, Name, Type, Dimension }

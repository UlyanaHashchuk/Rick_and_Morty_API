import styled, { css } from 'styled-components'
import { Avatar } from '../../../search-page/components/WelcomeCharacters/index.styles'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const Grid = styled.div`
  display: flex;
  color: #fff;
  word-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const SingleAvatar = styled(Avatar)`
  border-radius: 15px 0 0 15px;

  @media screen and (max-width: 600px) {
    border-radius: 15px 15px 0 0;
    width: 300px;
    height: 300px;
  }
`

const Info = styled.div`
  height: 250px;
  width: 400px;
  border-radius: 0 15px 15px 0;
  background-color: #40434a;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    height: 250px;
    width: 285px;
    border-radius: 0 0 15px 15px;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: #79b6f2;
  }
`

const Status = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`

const Color = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  ${({ red }) =>
    red &&
    css`
      background-color: red;
    `}
 

  ${({ green }) =>
    green &&
    css`
      background-color: #27db51;
    `}

  ${({ grey }) =>
    grey &&
    css`
      background-color: #c3c7c4;
    `}
`

const CurrentStatus = styled.div`
  font-size: 16px;
  margin-left: 7px;
`
const Location = styled.div`
  display: flex;
  flex-direction: column;
`

const LocationTitle = styled.div`
  color: #c8d3e8;
  font-size: 16px;
`

const Place = styled.div`
  font-size: 18px;
  margin-top: 10px;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #79b6f2;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}
`

export {
  Container,
  Grid,
  SingleAvatar,
  Info,
  Header,
  Name,
  Status,
  Color,
  CurrentStatus,
  Location,
  LocationTitle,
  Place,
}

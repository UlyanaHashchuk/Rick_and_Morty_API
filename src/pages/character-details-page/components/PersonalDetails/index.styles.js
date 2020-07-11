import styled from 'styled-components'
import { Avatar } from '../../../search-page/components/WelcomeCharacters/index.styles'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const Grid = styled.div`
  display: flex;
  height: 250px;
  width: 600px;
  border-radius: 15px;
  background-color: #40434a;
  color: #fff;
  word-wrap: wrap;

  @media and screen (max-width: 600px) {
    flex-direction: column;
    width: 250px;
  }
`

const SingleAvatar = styled(Avatar)`
  border-radius: 15px 0 0 15px;
`

const Info = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  font-size: 24px;
  margin-top: -5px;
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

const Red = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
`
const Green = styled(Red)`
  background-color: #27db51;
`
const Grey = styled(Red)`
  background-color: #c3c7c4;
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
`

export {
  Container,
  Grid,
  SingleAvatar,
  Info,
  Header,
  Name,
  Status,
  Red,
  Green,
  Grey,
  CurrentStatus,
  Location,
  LocationTitle,
  Place,
}

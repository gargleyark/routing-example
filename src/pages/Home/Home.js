import styled from 'styled-components'
import { Heading } from '../../components'

const Wrapper = styled.div`
  background: white;
  height: 300px;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  color: black;
  padding: 16px;
`

export const Home = ({ heading }) => (
  <Wrapper>
    <Heading>{heading} page</Heading>
    <p>Welcome to my website.</p>
  </Wrapper>
)

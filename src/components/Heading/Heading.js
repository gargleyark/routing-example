import styled from 'styled-components'

const HeadingText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const Heading = ({ children }) => <HeadingText>{children}</HeadingText>

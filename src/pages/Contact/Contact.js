import { Heading, Button, TextInput } from '../../components'

export const Contact = ({ heading }) => (
  <div>
    <Heading>{heading} page</Heading>
    <form>
      <TextInput label="Email" placeholder="example@dogsonskateboards.com" />
      <TextInput label="Name" placeholder="Doug O'Skateboards" />
      <TextInput label="Message" placeholder="Hello I am doug" />
      <Button>Submit</Button>
    </form>
  </div>
)

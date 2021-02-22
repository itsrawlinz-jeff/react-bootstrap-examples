import { Container } from 'react-bootstrap'

const Header = ({ pageTitle, pageDescription }) => {
  const description = 'Feel free to clone and start using the template as yours'
  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <h1>{pageTitle} Page</h1>
        <p className='lead text-capitalize'>{pageDescription}</p>
        <p className='lead text-capitalize'>{description}</p>
      </div>
    </Container>
  )
}

export default Header

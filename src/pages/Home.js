import { Container, CardGroup, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

const HomePage = () => {
  // page content
  const pageTitle = 'Bootstrap React Examples'
  const pageDescription = 'Bootstrap Examples - React Version'

  return (
    <div>
      <CustomHelmet titleTage={pageTitle} />
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
      <Container>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Album</Card.Title>
              <Card.Text>Album layout</Card.Text>
            </Card.Body>
            <Card.Footer>
              <LinkContainer to='/album'>
                <a className='text-muted'>Preview</a>
              </LinkContainer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>Blog Example</Card.Text>
            </Card.Body>
            <Card.Footer>
              <LinkContainer to='/blog'>
                <a className='text-muted'>Preview</a>
              </LinkContainer>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default HomePage

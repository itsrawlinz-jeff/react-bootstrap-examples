import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Album from './pages/Album'

// styles
import './App.css'

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/album' component={Album} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

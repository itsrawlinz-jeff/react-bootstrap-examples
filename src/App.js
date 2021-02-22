import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Album from './pages/Album'
import AlbumRTL from './pages/AlbumRTL'
import Blog from './pages/Blog'
import Carousel from './pages/Carousel'

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
          <Route path='/album-rtl' component={AlbumRTL} />
          <Route path='/blog' component={Blog} />
          <Route path='/carousel' component={Carousel} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

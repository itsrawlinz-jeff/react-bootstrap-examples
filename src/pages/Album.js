// global components
import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

// page components
import Content from '../components/album/Content'

const Album = () => {
  // page content
  const pageTitle = 'Album'
  const pageDescription = 'another page implimented with React-Router'

  return (
    <div>
      <CustomHelmet titleTage={pageTitle} />
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
      <Content />
    </div>
  )
}

export default Album

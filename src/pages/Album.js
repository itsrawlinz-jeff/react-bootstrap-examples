// components
import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

const Album = () => {
  // page content
  const pageTitle = 'Albums'
  const pageDescription = 'another page implimented with React-Router'

  return (
    <div>
      <CustomHelmet titleTage={pageTitle} />
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
    </div>
  )
}

export default Album

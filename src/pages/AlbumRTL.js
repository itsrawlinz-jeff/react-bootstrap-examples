// global components
import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

// contents
import Content from '../components/albumrtl/Content'

const AlbumRTL = () => {
  // page content
  const pageTitle = 'مثال الألبوم'
  const pageDescription = 'another page implimented with React-Router'
  return (
    <div>
      <CustomHelmet titleTage={pageTitle} />
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
      <Content />
    </div>
  )
}

export default AlbumRTL

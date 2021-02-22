// global components
import Header from '../components/Header'
import CustomHelmet from '../components/CustomHelmet'

// conent
import Content from '../components/blog/Content'

const Blog = () => {
  // page content
  const pageTitle = 'Blog'
  const pageDescription = 'another page implimented with React-Router'

  return (
    <div>
      <CustomHelmet titleTage={pageTitle} />
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
      <Content />
    </div>
  )
}

export default Blog

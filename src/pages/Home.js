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
    </div>
  )
}

export default HomePage

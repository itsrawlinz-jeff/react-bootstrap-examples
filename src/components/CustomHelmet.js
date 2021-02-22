import { Helmet } from 'react-helmet'

const CustomHelmet = ({titleTage}) => {
  return (
    <Helmet>
      <title>{titleTage}</title>
    </Helmet>
  )
}

export default CustomHelmet

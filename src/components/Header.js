import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
   <header className='content'>
        <h1>{title}</h1>
        <p>Keep track of your doses of medications and supplements for you or your loved ones. Whether it is for an illness or daily health.</p>
   </header>
  )
}

Header.defaultProps = {
    title: 'Dubble Dose'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
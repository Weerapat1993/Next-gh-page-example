import React from 'react'
import { bool, shape, number } from 'prop-types'
import withSizes from 'react-sizes'
import AppDesktop from './AppDesktop'
import AppMobie from './AppMobile'

const AppContainer = (props) => (
  props.isDesktop ? 
    <AppDesktop {...props} />
  : 
    <AppMobie {...props} />
)

AppContainer.propTypes = {
  isDesktop: bool.isRequired,
  dimenstion: shape({
    width: number,
    height: number,
  })
}

const mapSizesToProps = ({ width, height }) => ({
  isMobile: width < 480,
  isDesktop: width > 1024,
  dimenstion: {
    width, 
    height,
  }
})

const App = (withSizes(mapSizesToProps)(AppContainer))

export { App }

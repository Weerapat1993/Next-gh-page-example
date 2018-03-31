import React, { Component } from 'react'
import Link from 'next/link'

class AppLoading extends Component {
  render() {
    const { url, children } = this.props
    return (
      <div>
        <Link href={url.pathname}>Go to {url.pathname}</Link>
        {children}
      </div>
    )
  }
}

export default AppLoading

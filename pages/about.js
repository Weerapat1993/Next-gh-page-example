import React from 'react'
import Link from 'next/link'
import { App } from "../src/components"
import stylesheet from 'antd/dist/antd.min.css'
import css from '../src/components/App/styles.css'

const About = (props) => (
  <App {...props}  >
    <style dangerouslySetInnerHTML={{ __html: stylesheet + css }} />
    <div>About us</div>
    <div>Back to <Link href='/' as={ process.env.BACKEND_URL + '/'}><a>Home</a></Link></div>
  </App>
)

export default About


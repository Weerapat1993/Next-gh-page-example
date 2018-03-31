import React, { Component } from "react"
import Link from 'next/link'
import withRedux from "next-redux-wrapper"
import { configureStore } from '../src/config/store'
import { App } from "../src/components"
import stylesheet from 'antd/dist/antd.min.css'
import css from '../src/components/App/styles.css'

class Page extends Component {
  static getInitialProps({store, isServer, pathname, query}) {
    // console.log(query)
    const { dispatch, getState } = store
    // componentDidMount
    store.dispatch({type: 'FOO', payload: 'foo2'}); // component will be able to read from store's state when rendered
    // mapStateToProps
    return {
      foo: getState().foo.foo,
      custom: 'custom2',
      title: query.title,
    }; // you can pass some custom props to component from here
  }
  render() {
    const { title } = this.props
    // console.log(this.props)
    return (
      <App {...this.props} >
        <style dangerouslySetInnerHTML={{ __html: stylesheet + css }} />
        <h1>{title}</h1>
        <div>Home <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
        <div>Prop from Redux {this.props.foo}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
      </App>
    )
  }
}

export default withRedux(configureStore)(Page)
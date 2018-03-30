import React, { Component } from "react"
import Link from 'next/link'
import withRedux from "next-redux-wrapper"
import { configureStore } from '../src/config/store'

class Page extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
      const { dispatch, getState } = store
      // componentDidMount
      store.dispatch({type: 'FOO', payload: 'foo2'}); // component will be able to read from store's state when rendered
      // mapStateToProps
      return {
        foo: getState().foo.foo,
        custom: 'custom2'
      }; // you can pass some custom props to component from here
    }
    render() {
        return (
            <div>
                <div>Home <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
            </div>
        )
    }
}

export default withRedux(configureStore)(Page)
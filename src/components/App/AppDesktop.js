import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Case from 'case'
import { Layout, Menu, Breadcrumb, Icon, BackTop } from 'antd'
import { SEO } from '../../config/seo'
import { menuBar } from '../../config/menuBar'
import styles from './styles'
// import stylesheet from 'antd/dist/antd.min.css'
// import css from './styles.css'

const { Header, Content, Footer } = Layout

const AppDesktop = (props) =>  {
  const { url, children, dimenstion } = props
  const { title } = SEO[url.pathname]
  const onMenuKey = ({ key, keyPath }) => {
    if(key !== url.pathname) {
      Router.push(key)
    }
  }
  // Get Height
  const breadcrumbs = url.pathname.split(new RegExp('/','g')).slice(1)
  const getHeight = dimenstion.height - (64 + 128)
  if(getHeight < 0) {
    onMenuKey({ key: url.pathname })
  }
  console.log(getHeight)
  const contentStyle = {
    background: '#fff', 
    padding: 24, 
    minHeight: getHeight
  }
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <style dangerouslySetInnerHTML={{ __html: stylesheet + css }} /> */}
      </Head>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          className='container'
          onClick={onMenuKey}
          style={styles.menuStyle}
        >
          {
            menuBar.map(item => (
              <Menu.Item key={item.path} >
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Content className='container' style={styles.contentStyle}>
        <Breadcrumb style={styles.breedcrumbStyle}>
          <Breadcrumb.Item><Icon type="home" /> <Link href='/'>Home</Link></Breadcrumb.Item>
          {
            breadcrumbs.map((item, i) => (
              (i !== breadcrumbs.length - 1) ? (
                <Breadcrumb.Item key={item}><Link href={`/${item}`}>{Case.capital(item)}</Link></Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={item}>{Case.capital(item)}</Breadcrumb.Item>
              )
            ))
          }
        </Breadcrumb>
        <div style={contentStyle}>
          { children }
        </div>
        <BackTop />
      </Content>
      <Footer className='text-center'>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default AppDesktop

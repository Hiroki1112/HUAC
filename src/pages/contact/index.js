import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'


export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <p>お問い合わせはホームページ長の政所賢治b196834＠hiroshima-u.ac.jpまでお願いします。</p>
              <p>＊お手数ですが、＠を半角に直してください。スパム対策です。</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

import React from 'react'
import logo from 'resources/icon/icon512.png'
import { shell } from 'electron'
import i18n from 'render/lib/i18n'

export default class About extends React.Component {
  componentDidMount () {
    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        shell.openExternal(link.href)
      })
    })
  }

  render () {
    return (
      <div className="about-tab">
        <h1 className="tab-title">{i18n.__('About')}</h1>
        <div className="inline">
          <img src={logo} width="200px" />
          <div className="m-l-100">
            <h2>SnippetStore</h2>
            <p>Version: 0.2.0</p>
            <p className="m-t-20">
              {i18n.__('SnippetStore is a snippet management app developers')}
            </p>
          </div>
        </div>
        <h2 className="m-t-50">Author</h2>
        <p>
          Nguyen Viet Hung (<a href="https://github.com/ZeroX-DG">@ZeroX-DG</a>)
        </p>
        <p>Email: viethungax@gmail.com</p>
      </div>
    )
  }
}

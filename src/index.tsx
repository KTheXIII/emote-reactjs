import ReactDOM from 'react-dom'

import './styles/main.css'

import { AppName } from './components/AppName'
import { Emote } from './components/Emote'
import { AppFooter } from './components/AppFooter'

function app() {
  return (
    <div className="app">
      <AppName title={'./emote'} />
      <Emote />
      <AppFooter link={'https://github.com/KTheXIII'} name={'KTheXIII'} />
    </div>
  )
}

ReactDOM.render(app(), document.getElementById('root'))

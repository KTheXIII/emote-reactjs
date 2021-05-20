import { ReactElement, useState } from 'react'
import { plusIcon } from '../assets/icons'

import '../styles/custom.css'

export function AppCustom(): ReactElement {
  const [isEditorHidden, setIsEditorHidden] = useState(true)

  return (
    <div className="app-custom">
      <div className="add-container">
        <button
          title="Add more emote to the list locally"
          className="app-button add-button noselect"
          onClick={() => {
            console.log('Hello, World!')
            setIsEditorHidden(!isEditorHidden)
          }}
        >{plusIcon}</button>
        {
          isEditorHidden ?
            ''
            :
            <div className="editor">
              <h1>Hello there</h1>
            </div>
        }
      </div>
    </div>
  )
}

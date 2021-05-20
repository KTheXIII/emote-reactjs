import { ReactElement, useState } from 'react'
import { plusIcon } from '../assets/icons'

export function AppCustom(): ReactElement {
  const [isEditorHidden, setIsEditorHidden] = useState(false)

  return (
    <div className="app-custom">
      <div className="add-container">
        <button
          title="Add more emote to the list locally"
          className="app-button add-button noselect"
          onClick={() => {
            console.log('Hello, World!')
          }}
        >{plusIcon}</button>
      </div>
    </div>
  )
}

import { plusIcon } from '../assets/icons'

export function AppAddCustom(): JSX.Element {
  return (
    <div className="app-add-custom">
      <button
        title="Add more emote to the list locally"
        className="app-button add-button noselect"
        onClick={() => {
          console.log('hello, world!')
        }}
      >{plusIcon}</button>
    </div>
  )
}

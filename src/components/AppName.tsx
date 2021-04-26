export function AppName(props: { title: string }): JSX.Element {
  return (
    <div className="app-name">
      <p>{props.title}</p>
    </div>
  )
}

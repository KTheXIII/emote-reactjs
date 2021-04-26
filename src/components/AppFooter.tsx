export function AppFooter(props: { link: string, name: string }): JSX.Element {
  return (
    <div className="app-footer">
      <a title="Github profile link"
        rel="noreferrer"
        target="_blank"
        href={props.link}
        id="github-link">{props.name}</a>
    </div>
  )
}

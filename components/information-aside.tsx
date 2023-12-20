export default function InformationAside({...props}) {
  return (
    <aside>
      <div></div>
      <strong>{props.title}</strong>
      <div>{props.children}</div>
    </aside>
  )
}

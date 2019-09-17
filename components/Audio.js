export default ({ src }) => {
  return (
    <audio autoPlay loop>
      <source src={src} type='audio/mpeg' />
    </audio>
  )
}

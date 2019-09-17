export default ({ src, width = '560', height = '315' }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen />
  )
}

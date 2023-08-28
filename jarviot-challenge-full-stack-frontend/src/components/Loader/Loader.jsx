

function LogoLoader(props) {
  if (!props.isVisible) return (null)
  return (
    <div className='fixed inset-0  bg-black bg-opacity-75 backdrop-blur-sm  grid place-content-center'>
      Loading ....
    </div>

  )
}

export default LogoLoader
const CircleWithLetter = props => {
  return <h1 style={{
    width: '20vh',
    height: '20vh',
    backgroundColor: '#888',
    borderRadius: '1000px',
    textAlign: 'center',
    paddingTop: '7vh'
  }}>
    {props.name[0]}
  </h1>
}

export default CircleWithLetter

import React from 'react'

function User(props) {
    // console.log(props);
  return (
    <div>
      <h1>User Component</h1>
      <h2>{props.data.name}</h2>
      <h2>{props.data.age}</h2>
    </div>
  )
}

export default User

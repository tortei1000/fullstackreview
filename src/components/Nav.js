import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = ({username}) => (
  <nav>
    <span>the bank</span>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
    {username && <div> Welcome, {username}</div>}
  </nav>
)


const mapStateToProps = (reduxState) => {
  const { username } = reduxState
  return { username }
}

export default connect(mapStateToProps)(Nav)
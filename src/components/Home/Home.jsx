import React from 'react'
import "./Home.css"
import Card from '../UI/Card'
import Button from '../UI/Button'

const Home = (props) => {
  return (
    <Card className="home">
        <h1>Welcome Back User</h1>
        <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  )
}

export default Home
import React, {useState} from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import {Button} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import { useHistory, } from "react-router-dom"
export default function NavbarComponent() {
    const history = useHistory()
    const [error, setError] = useState("")
    const {logout} = useAuth();
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }

  return (
    <Navbar className="flex flex-wrap justify-between" bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>
      <Nav>
        {/* <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link> */}
        <Button variant="link" onClick={handleLogout}>
    Log Out
  </Button>
      </Nav>
    </Navbar>
  )
}
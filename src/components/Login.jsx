import React from 'react'
import { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import "./style.css"

function Signup() {
    console.log("Kive aa");
    const email = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email.current.value, passwordRef.current.value);
            history.push("/dashboard");
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }
    return (
        <div className="background_image container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert>{error}</Alert>}
                        <Form onSubmit={handleSubmit} >
                            <Form.Group id="email">
                                <Form.Label className = "darker">Email</Form.Label>
                                <Form.Control type="email" ref={email} required />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label className = "darker">Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 m-2" type="submit">
                                Log In
                            </Button>
                        </Form>
                    </Card.Body>
                <div className="w-100 text-center mt-2 m-2 darker">
                Need an account? <Link to="/signup">Sign Up</Link>
                </div>
                
                <div className="w-100 text-center mt-2 darker m-2">
                    Want to Go to Home? <Link to="/">Home</Link>
                </div>
                </Card>
            </div>
        </div>
    )
}

export default Signup;
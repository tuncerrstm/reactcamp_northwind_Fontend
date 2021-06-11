import React, { useState } from 'react'
import CardSummary from './CardSummary'
import { Container, Dropdown, Menu , Image } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from "react-router"

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>

                    <Menu.Menu position='right'>
                        <CardSummary></CardSummary>
                        {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"></SignedIn>:<SignedOut signIn={handleSignIn} bisey="1"></SignedOut>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/ADea4I41I-uDKxzVZUVYsG2gGFrQg4gWqit58rOcrtjm=s83-c-mo"></Image>
                <Dropdown pointing="top left" text="Tuncer">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

import React from 'react'
import { Typography } from '@material-ui/core'

const BoilerplateInfo = () => {
    return (
        <div className="BoilerplateIno">
            <section className="HomepageIntro" style={{ textAlign: 'center', margin: '2em 0' }}>
                <Typography gutterBottom variant="h4" component="h1">
                    Boilerplate Information
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    Dependancies
                </Typography>
                <code>
                    "@fortawesome/fontawesome-svg-core": "^1.2.28", <br />
                    "@fortawesome/free-solid-svg-icons": "^5.13.0",<br />
                    "@fortawesome/react-fontawesome": "^0.1.9",<br />
                    "@material-ui/core": "^4.9.9",<br />
                    "@material-ui/icons": "^4.9.1",<br />
                    "@material-ui/lab": "^4.0.0-alpha.48",<br />
                    "@testing-library/jest-dom": "^4.2.4",<br />
                    "@testing-library/react": "^9.5.0",<br />
                    "@testing-library/user-event": "^7.2.1",<br />
                    "axios": "^0.19.2",<br />
                    "react": "^16.13.1",<br />
                    "react-dom": "^16.13.1",<br />
                    "react-router-dom": "^5.1.2",<br />
                    "react-scripts": "3.4.1",<br />
                    "react-transition-group": "^4.3.0"<br />
               </code>
            </section>
        </div>
    )
}

export default BoilerplateInfo

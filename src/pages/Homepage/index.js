import React from 'react'
import FolderStructure from './components/FolderStructure'
import { Typography } from '@material-ui/core'

const Homepage = () => {
    return (
        <div className="Homepage">
            <section className="HomepageIntro" style={{ textAlign: 'center', margin: '2em 0' }}>
                <Typography gutterBottom variant="h4" component="h1">
                    React Boilerplate for Material UI
            </Typography>
                <Typography gutterBottom variant="body1" component="p">
                    A basic folder structure and setup that I prefer for quickly setting up React projects.
            </Typography>
                <Typography style={{ marginTop: '2em' }} variant="body1" component="p">
                    <b>Usage: </b>
                    Clone or Download the repository 
                    <a href="https://github.com/steven-jackson-dev/react-material-boilerplate" target="_blank" rel="noopener noreferrer"> here </a> and run
               <code> npm install </code> in your CLI.
            </Typography>
            </section>
            <FolderStructure />
        </div>
    )
}

export default Homepage

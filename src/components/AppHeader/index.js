import React from 'react'
import useToggle from 'utils/hooks/useToggle'
import AppNavBar from 'components/AppNavBar'
import AppDrawer from 'components/AppDrawer'

const AppHeader = () => {

    const [appDrawerIsOpen, setAppDrawerIsOpen] = useToggle(false)
    const toggleDrawer = () => setAppDrawerIsOpen(!appDrawerIsOpen)

    return (
        <header className="App-header">
            <AppNavBar toggleDrawer={toggleDrawer} />
            <AppDrawer appDrawerIsOpen={appDrawerIsOpen} toggleDrawer={toggleDrawer} />
        </header>
    )
}

export default AppHeader

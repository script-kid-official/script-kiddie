import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { fetchUsersData } from 'api'
import UserItem from './components/UserItem.js'

const Users = () => {
    const [users, setUsers] = useState(false)
    useEffect(() => { getUserData() }, [])

    const getUserData = async () => {
        try {
            const userData = await fetchUsersData();
            setUsers(userData)
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <section className="Users" style={{ textAlign: 'center', margin: '2em 0' }}>
              <Typography gutterBottom variant="h4" component="h1">
                Users Page
                </Typography>
            {!users && <div>Loading</div>}
            <Grid container spacing={2}>
                {(users.length > 0) &&
                    users.map(user => { return <Grid key={user.id} item xs={12} md={4}><UserItem user={user} /></Grid> })
                }
            </Grid>
        </section >
    )
}

export default Users

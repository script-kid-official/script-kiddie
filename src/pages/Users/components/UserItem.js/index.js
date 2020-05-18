import React from 'react'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const UserItem = (props) => {

    const { user: { name, username, email, company } } = props
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        {name} ({username})
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {company.catchPhrase}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default UserItem

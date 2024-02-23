import React from 'react'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const Card = ({ id, image_url, userName, handleClick }) => {
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={image_url}
            sx={{ width: 100, height: 100 }}
          />
        </ListItemAvatar>
        <div className="ml-[5%]">
          <ListItemText
            sx={{
              color: '#545353',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
            primary={
              <Typography
                sx={{ fontWeight: 'bold', fontSize: '1em' }}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => handleClick(id)}
              >
                {userName}
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}

                <p
                  className="hover:text-blue-500 mt-4 cursor-pointer"
                  onClick={() => handleClick(id)}
                >
                  {' '}
                  know more...
                </p>
              </React.Fragment>
            }
          />
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  )
}

export default Card

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import { getAllUsers } from '../api/api'

import Card from '../component/Card'

const UserList = () => {
  const navigate = useNavigate()
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers()
        setUsersList(data)
      } catch (error) {}
    }
    fetchData()
  }, [])

  const handleClick = (id) => {
    const selectedtUser = usersList?.filter((item) => item.id === id)
    navigate(`/${selectedtUser[0]?.login}`, { state: selectedtUser[0].login })
  }

  return (
    <div className="flex justify-center shadow-xl bg-[rgb(189,187,219)]">
      <div>
        <h2 className="text-lg bg-white text-gray-600 pl-6 rounded my-4">
          Available Users
        </h2>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {usersList?.map(({ login, avatar_url, id }) => (
            <div key={id}>
              <Card
                image_url={avatar_url}
                userName={login}
                handleClick={handleClick}
                id={id}
              />
            </div>
          ))}
        </List>
      </div>
    </div>
  )
}

export default UserList

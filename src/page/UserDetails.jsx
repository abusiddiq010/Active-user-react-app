import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { getUserById } from '../api/api'

const UserDetails = () => {
  const [userDetail, setUserDetail] = useState({})
  const location = useLocation()
  const username = location?.state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(username)
        setUserDetail(data)
      } catch (error) {}
    }
    fetchUser()
  }, [username])

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="border shadow-xl rounded-lg sm:w-[60%] bg-white">
        <div>
          <p className="py-3 ml-3 text-gray-600 font-bold">Details</p>
          <hr className="text-gray-400 mx-5" />
        </div>
        <div className="p-4 grid grid-cols-6">
          <div>
            <Avatar
              className="col-span-1"
              alt="Remy Sharp"
              src={userDetail?.avatar_url}
              sx={{ width: [50, 60, 100], height: [50, 60, 100] }}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 text-xs">
            <h2 className="text-lg text-gray-600 mb-2">User details</h2>
            <p>
              <span className="font-bold text-gray-500 text-sm">Name:</span>{' '}
              {userDetail?.name}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">Email:</span>{' '}
              {userDetail?.email}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">Blog:</span>{' '}
              {userDetail?.blog}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">Company:</span>{' '}
              {userDetail?.company}
            </p>

            <p>
              <span className="font-bold text-gray-500 text-sm">Location:</span>{' '}
              {userDetail?.location}
            </p>

            <p>
              <span className="font-bold text-gray-500 text-sm">Bio:</span>{' '}
              {userDetail?.bio}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">
                Twitter Username:
              </span>{' '}
              {userDetail?.twitter_username}
            </p>
          </div>
          <div
            className=" flex flex-col gap-2 border-l-2 border-green-300 col-span-3 pl-10 text-xs"
            style={{ height: '100px' }}
          >
            <h2 className="text-lg  text-gray-600 mb-2">Other details</h2>
            <p>
              <span className="font-bold text-gray-500 text-sm">
                Public Repos:
              </span>{' '}
              {userDetail?.public_repos}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">
                Followers:
              </span>{' '}
              {userDetail?.followers}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">
                Following:
              </span>{' '}
              {userDetail?.following}
            </p>

            <p>
              <span className="font-bold text-gray-500 text-sm">
                Created At:
              </span>{' '}
              {userDetail?.created_at}
            </p>
            <p>
              <span className="font-bold text-gray-500 text-sm">
                Updated At:
              </span>{' '}
              {userDetail?.updated_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails

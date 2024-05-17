import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore'

const useFollowUser = () => {
 const [isUpdating, setIsUpdating] =useState(false)
 const [isFollowing,setIsFollowing ]= useState(false)
 const authUser= useAuthStore(state=> state.user)

 useEffect(() =>{
    if(authUser)
        {
            const isFollowing = authUser.following.includes(userId)
            setIsFollowing(isFollowing)
        }
    
 },[authUser,userId])

return{isUpdating,isFollowing,handleFollowUser}
}
export default useFollowUser;
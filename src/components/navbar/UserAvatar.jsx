import React from 'react'
import auth from '../../utils/auth'

export default function UserAvatar({user}) {
    
  return (
    <>
      <div tabIndex={0} role="button" className="">
           <div className="">
                Hello {user?.username}
            </div>
      </div>
        <ul tabIndex={0} className="bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                <li>
                    <a>
                        Settings
                    </a>
                </li>
                <li>
                    <a onClick={() => auth.logout()}>Logout</a>
                </li>
        </ul>
      </>
  )
}

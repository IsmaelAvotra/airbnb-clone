'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((value) => !value)
  }

  return (
    <div className='relative'>
      <div onClick={handleOpen} className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          Airbnb your home
        </div>
        <div className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute md:w-3/4 right-0 top-12 w-[40vw]   bg-white rounded-xl shadow-md'>
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem label='Login' onClick={() => {}} />
              <MenuItem label='Sign Up' onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu

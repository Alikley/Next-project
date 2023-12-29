import Link from 'next/link'
import React from 'react'
import {sidebarLinks} from '@/constance/index'



const LeftSidebar = () => {
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
      {sidebarLinks.map((link) =>{
        return(
          <div key={link.label} style={{color:"#fff"}}>
            lonk
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default LeftSidebar
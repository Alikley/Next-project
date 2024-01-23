import React from 'react'
import { currentUser } from '@clerk/nextjs'
import{redirect} from "next/navigation"
import { fetchUser, fetchUsers } from '@/lib/actions/user.action';
import ProfileHeader from '@/components/shared/ProfileHeader';
import { profileTabs } from '@/constance';
import Image from 'next/image';
import ThreadsTab from '@/components/shared/ThreadsTab';
import UserCard from '@/components/cards/UserCard';
type Props = {}

const page = async () => {
  const user = await currentUser();

  if(!user) return null;
  const userInfo = await fetchUser(user.id); 

  if(!userInfo?.onboarded) redirect('/onboarding')
  
  const result = await fetchUsers({
    userId:user.id,
    searchString:'',
    pageNumber:1,
    pageSize:25,
  })


  return (
    <div className='mt-14 flex flex-col gap-9'>
        {result.users.length === 0 ? (
            <p className='no-result'>No Users</p>
        ):(
            <>
                {result.users.map((person) => (
                    <UserCard 
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        username={person.username}
                        imgUrl={person.imgUrl}
                        personType='User'
                    />
                ))}
            </>
        )
        }
    </div>
  )
}

export default page
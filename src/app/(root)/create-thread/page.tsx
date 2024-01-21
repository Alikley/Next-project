import React from 'react'
import { currentUser } from '@clerk/nextjs'
import{redirect} from "next/navigation"
import { fetchUser } from '@/lib/actions/user.action';
import PostThread from '@/components/forms/PostThread';
type Props = {}


async function page({}: Props) {
    const user = await currentUser();

    if(!user) return null;
    const userInfo = await fetchUser(user.id); 


    if(!userInfo?.onboarded) redirect('/onboarding')

  return (
    <div>
        <h1 className='head-text'>Create Thread</h1>

        <PostThread userId={userInfo._id} />
    </div>
  )
}

export default page
import React from 'react'
import { currentUser } from '@clerk/nextjs'
import{redirect} from "next/navigation"
import { activity, fetchUser,  } from '@/lib/actions/user.action';
import Link from 'next/link';
import Image from 'next/image';

type Props = {}

const page = async () => {
  const user = await currentUser();

  if(!user) return null;
  const userInfo = await fetchUser(user.id); 

  if(!userInfo?.onboarded) redirect('/onboarding')


  const result = await activity(userInfo._id)
  return (
    <div>
      <h1 className='text-heading text-light-2'>Activity</h1>

      <section className='mt-10 flex flex-col gap-5'>
        {result.length > 0 ? (
          <>
            {result.map((active)=>(
              <Link key={active._id} href={`/thread/${active.parentId}`}>
                <article className='activity-card'>
                  <Image 
                    src={active.author.image}
                    alt='profile picture'
                    width={20}
                    height={20}
                    className='rounded-full object-cover'
                  
                  />
                  <p className='!text-small-regular text-light-2'>
                    <span className='mr-1 text-purple-500'>
                      {active.author.name}
                    </span>{" "}
                    replied to your thread
                  </p>
                </article>
              </Link>
            ))}
          </>
        ):<p className='text-base-regular text-light-3'>no Activity yet</p>}
      </section>
    </div>
  )
}

export default page
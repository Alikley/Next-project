import React from 'react'
import { currentUser } from '@clerk/nextjs'
import{redirect} from "next/navigation"
import { fetchUser } from '@/lib/actions/user.action';
import ProfileHeader from '@/components/shared/ProfileHeader';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { profileTabs } from '@/constance';
import Image from 'next/image';
type Props = {}

const page = async ({params}:{params:{id:string}}) => {
  const user = await currentUser();

  if(!user) return null;
  const userInfo = await fetchUser(params.id); 


  if(!userInfo?.onboarded) redirect('/onboarding')

  return (
    <div>
      <ProfileHeader 
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className='mt-9'>
          <Tabs defaultValue='threads' className='w-full'>
            <TabsList className='tab'>
                {profileTabs.map((tab) => (
                  <TabsTrigger key={tab.label} value={tab.value} className='tab'>
                    <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={24}
                    height={24}
                    className='object-contain'
                    />
                    <p className='max-sm:hidden'>{tab.label}</p>
                  </TabsTrigger>
                ))}
            </TabsList>
          </Tabs>
      </div>
    </div>
  )
}

export default page
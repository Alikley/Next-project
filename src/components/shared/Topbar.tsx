import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Topbar({}: Props) {
    const isUserLoggedIn = true;

  return (
    <nav className='topbar'>
        <Link href="/" className='flex items-center gap-4'>
            <Image src="/public/assets/logo.svg" alt='logo' width={28} height={28} />
            <p className='text-heading3-semibold text-light-1 max-xs:hidden'>Threads</p>
        </Link>

        <div className='felx items-center gap-1'>
            <div className='block md:hidden'>
                <SignedIn>
                    <SignOutButton>
                        <div className='flex cursor-pointer'>
                            <Image 
                            src="/public/assets/logout.svg" 
                            alt='logout'
                            width={24}
                            height={24}
                            />
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
            <OrganizationSwitcher
            appearance={{
                elements:{
                    organizationSwitcherTrigger:
                    'py-2 px-4'
                }
            }}
            />
        </div>
    </nav>
  )
}

export default Topbar
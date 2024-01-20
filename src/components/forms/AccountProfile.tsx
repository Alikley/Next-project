"use client"
import React from 'react'

interface Props{
    user:{
        id:string;
        object:string;
        name:string;
        bio:string;
        image:string
    }
    bthTitle:string;
}

function AccountProfile({user,bthTitle}: Props) {
  return (
    <div>AccountProfile</div>
  )
}

export default AccountProfile
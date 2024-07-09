import { NextResponse } from 'next/server'
import React from 'react'

export const GET = async(req,resp) => {
  // const body = await req.json()
  // const {student}= body
  // console.log(student)
  return(

   new  Response("<h1>Hello</h1>",{
    headers: {
      'Content-Type': 'text/html'
    }
   })
     )
}

// export default GET
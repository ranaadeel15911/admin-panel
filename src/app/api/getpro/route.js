import { NextResponse } from 'next/server'
import React from 'react'

export const GET = async(req,resp) => {
  // const body = await req.json()
  // const {student}= body
  // console.log(student)
  return(

     NextResponse.json("<h1>Hello</h1>")
     
     )
}

// export default GET
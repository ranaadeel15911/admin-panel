import { NextRequest, NextResponse } from 'next/server';

// Note: We don't need `cookies` from `next/headers` here

export const middleware = async (req) => {
  // console.log('Request:', req.nextUrl.pathname); // Access the requested path

  // req.customProperty = 'added-in-middleware';
  // const requestHeaders = new Headers(req.headers)
  // requestHeaders.set('Email','ra0511083@gmail.com')
  // const response = NextResponse.next({
  //   request: {
  //     headers: requestHeaders
  //   }
  // })

  // return response
  // Process the request and return a response or continue
  // You could potentially modify headers, redirect, etc. here
  // based on the request or custom logic
  // return NextResponse.next();
};

export const config = {
  // matcher: ['/api/addproduct'], 
};

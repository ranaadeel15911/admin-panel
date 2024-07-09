'use client'
// import { useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
//because by using useSelector and `useDispatch we world to make client side that is why we made component for useSelector and useDispatch
//to call instead of making client side 
// export const useAppDispatch = () => useDispatch
// export const useAppSelector = useSelector


import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;


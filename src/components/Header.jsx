import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-white flex justify-around py-6 shadow-md">
         <div>
            <h1 className="font-bold text-[20px]">Babxn</h1>
        </div>
    <div className="flex">
        <Link to="/" className="mx-4 font-semibold hover:text-red-600">Home</Link>
        <Link to="/about" className="mx-4 font-semibold hover:text-red-600">About</Link>
        <Link to="/project" className="mx-4 font-semibold hover:text-red-600">Project</Link>
        <Link to="/skills" className="mx-4 font-semibold hover:text-red-600">Skills</Link>
        <Link to="/contact" className="mx-4 font-semibold hover:text-red-600">contact</Link>
        </div>
    </div>
  )
}

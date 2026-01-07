import React from 'react'

const Navbar = () => {
    return (
        <div className='flex'>
            <div className="w-1/4">
                <h2>
                    UPLAND
                </h2>
            </div>
            <div className="w-2/4">
                <ul className='flex gap-5'>
                    <li>Features</li>
                    <li>Features</li>
                    <li>Features</li>
                    <li>Features</li>
                    <li>Features</li>
                </ul>
            </div>
            <div className="w-1/4">
                <h2>
                    +1 742 65 84 122
                </h2>
            </div>
        </div>
    )
}

export default Navbar
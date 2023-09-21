import React from 'react'

function DeskView() {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Contact", link: "/" },
    ];

    return (
        <div className='h-[60px] bg-black text-white px-[502px] md:flex justify-around items-center hidden font-bold '>
            {
                Links.map((item) =>
                (
                    <a className=' hover:text-blue-700' key={item.name} href={item.link}>{item.name}</a>
                ))
            }
        </div>
    )
}

export default DeskView

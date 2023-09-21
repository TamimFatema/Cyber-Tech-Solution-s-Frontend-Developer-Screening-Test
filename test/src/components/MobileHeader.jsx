import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { RiMenu3Line } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { SlArrowDown } from 'react-icons/sl'

const MobileHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isExpandMenu, setIsExpandMenu] = useState(false)
    const [isClicked1, setIsClicked1] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    const [isClicked3, setIsClicked3] = useState(false)

    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Contact", link: "/" },
    ];
    let Items = [
        { name: "Item 1", subitems: ["Item A", "Item B"], isClicked: isClicked1, setIsClick: setIsClicked1 },
        { name: "Item 2", subitems: ["Item A", "Item B"], isClicked: isClicked2, setIsClick: setIsClicked2 },
        { name: "Item 3", subitems: ["Item A", "Item B"], isClicked: isClicked3, setIsClick: setIsClicked3 }
    ]

    return (
        <>
            <div className='h-[30px] bg-black text-white flex justify-between items-center px-[12px] md:hidden'>
                <button className='flex gap-5 items-center' onClick={() => setIsExpandMenu(!isExpandMenu)}>
                    <p>Menu</p>
                    <CiMenuBurger size={16} />
                </button>
                <button className='flex gap-5 items-center' onClick={() => setIsExpanded(!isExpanded)}>
                    <p>Sidebar</p>
                    <RiMenu3Line size={16} />
                </button>
            </div>
            <div>
                {
                    isExpandMenu ?
                        <div className='absolute top-0 right-0 md:hidden z-40'>
                            <aside className="flex flex-col  bg-[#ADADAD] h-screen w-[206px] pt-[20px] pb-[250px] ps-[20px] pe-[14px] gap-y-[20px]">
                                <RxCross1 className='text-white ms-[150px]' onClick={() => setIsExpandMenu(!isExpandMenu)} />
                                <div className='mx-auto flex flex-col  gap-[40px] relative top-[83px] font-bold'>
                                    {
                                        Links.map((item) =>
                                        (
                                            <a className=' hover:text-blue-700' key={item.name} href={item.link}>{item.name}</a>
                                        ))
                                    }
                                </div>

                            </aside>
                        </div> : null
                }

            </div>
            <div>
                {
                    isExpanded ?
                        <div className='absolute top-0 md:hidden z-40'>
                            <aside className="flex flex-col  bg-[#9398bf] h-screen w-[205px] pt-[20px] pb-[250px] ps-[20px] pe-[14px] gap-y-[20px]">
                                <RxCross1 className='text-white ms-[150px]' onClick={() => setIsExpanded(!isExpanded)} />
                                <div className="font-bold">Sidebar</div>
                                {
                                    Items.map((item) => (
                                        <div key={item.name}>
                                            <div className="bg-white flex justify-between px-2 font-bold" onClick={() => item.setIsClick(!item.isClicked)}>
                                                <div>{item.name}</div>
                                                <SlArrowDown className="mt-1" />
                                            </div>
                                            {item.isClicked ? <div className="flex flex-col gap-2 items-end">
                                                <div className="w-[133px] bg-[#B8B6B6] text-center font-bold">Item A</div>
                                                <div className="w-[133px] bg-[#B8B6B6] text-center font-bold">Item B</div>
                                            </div > : null}
                                        </div>
                                    ))}

                            </aside>
                        </div> : null
                }

            </div>

        </>
    )
}

export default MobileHeader
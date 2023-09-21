import React, { useState } from "react";
import { SlArrowDown } from 'react-icons/sl'

const Sidebar = (props) => {
    const [isClicked1, setIsClicked1] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    const [isClicked3, setIsClicked3] = useState(false)

    let Items = [
        { name: "Item 1", subitems: ["Item A", "Item B"], isClicked: isClicked1, setIsClick: setIsClicked1 },
        { name: "Item 2", subitems: ["Item A", "Item B"], isClicked: isClicked2, setIsClick: setIsClicked2 },
        { name: "Item 3", subitems: ["Item A", "Item B"], isClicked: isClicked3, setIsClick: setIsClicked3 }
    ]

    return (
        <div className="md:flex">
            <aside className="md:flex md:flex-col hidden bg-[#9398bf] h-screen w-[285px] pt-[20px] pb-[250px] ps-[20px] pe-[14px] gap-[20px]">
                <div className="font-bold">Sidebar</div>
                {
                    Items.map((item) => (
                        <div key={item.name}>
                            <div className="bg-white flex justify-between px-2 font-bold" onClick={() => item.setIsClick(!item.isClicked)}>
                                <div>{item.name}</div>
                                <SlArrowDown className="mt-1" />
                            </div>
                            {item.isClicked ? <div className="flex flex-col gap-2 items-end">
                                <div className="w-[206px] bg-[#B8B6B6] text-center font-bold">Item A</div>
                                <div className="w-[206px] bg-[#B8B6B6] text-center font-bold">Item B</div>
                            </div > : null}
                        </div>
                    ))}

            </aside >
            <div className="w-full">{props.children}</div>
        </div >
    );
};

export default Sidebar;
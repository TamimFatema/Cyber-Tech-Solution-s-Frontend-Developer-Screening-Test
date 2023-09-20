import React, { FC, useMemo } from "react";

const Sidebar = (props) => {
    var sidebarItems = useMemo(
        () => [
            {
                label: "Item 1",
                itemList: ["Item A", "Item B"],
                name: "item1",
            },
            {
                label: "Item 1",
                itemList: ["Item A", "Item B"],
                name: "item1",
            },

            {
                label: "Item 1",
                itemList: ["Item A", "Item B"],
                name: "item1",
            },
        ],
        []
    );
    return (
        <div className="flex">
            <div className="flex flex-col bg-[#9398bf] h-screen w-[285px] pt-[20px] pb-[250px] ps-[20px] pe-[14px] gap-[20px]">
                <div>Sidebar</div>
                <div className="bg-white flex justify-between px-2">
                    <div>Item 1</div>
                    <div>v</div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <div className="w-[206px] bg-[#B8B6B6] text-center">Item A</div>
                    <div className="w-[206px] bg-[#B8B6B6] text-center">Item B</div>
                </div>
                <div className="bg-white flex justify-between px-2">
                    <div>Item 2</div>
                    <div>v</div>
                </div>
                <div className="bg-white flex justify-between px-2">
                    <div>Item 3</div>
                    <div>v</div>
                </div>
            </div>
            <div className="w-full">{props.children}</div>
        </div>
    );
};

export default Sidebar;
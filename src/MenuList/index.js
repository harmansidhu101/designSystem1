import React from 'react';
import { Menu } from '@headlessui/react'

const MenuList = ({children, options}) => {
    return (
        <Menu>
            <Menu.Button>{children}</Menu.Button>
            <Menu.Items>
                {
                    options.map((menuItems, index) => {
                        return (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <span className="">
                                        {menuItems}
                                    </span>
                                )}
                            </Menu.Item>
                        )
                    })
                }
                {/* <Menu.Item disabled>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item> */}
            </Menu.Items>
        </Menu>
    )
}

export default MenuList;
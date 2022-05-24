import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy.js'
import { useStateContext } from '../contexts/ContextProvide.js';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    const activeLink = 'flex items-center gap-2 pl-3 pt-2 pb-2 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-2 pl-3 pt-2 pb-2 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2'
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {activeMenu && <>
        <div className='flex justify-between items-center'><Link to='/' className='flex ml-3 mt-3 dark:text-white items-center gap-2 font-bold text-slate-900' onClick={handleCloseSideBar}><SiShopware />Store</Link>
        <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' className='text-xl p-3 mt-3 rounded-full md:hidden block hover:bg-light-gray' onClick={() => {setActiveMenu((prevActiveMenu) => !prevActiveMenu)}}>
                <MdOutlineCancel />
            </button>
        </TooltipComponent>
        </div>
        <div className='mt-10'>
            {links.map((item) => (
                <div key={item.title}>
                    <p className='m-3 mt-4 text-gray-400 uppercase'>
                    {item.title}  
                    </p>
                    {item.links.map((link) => (
                        <NavLink to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) => 
                        isActive ? activeLink : normalLink}>
                            {link.icon}
                            <span className='capitalize'>
                                {link.name}
                            </span>
                        </NavLink>
                    ))}  
                </div>
            ))}
        </div>
        </>}
    </div>
  )
}

export default Sidebar
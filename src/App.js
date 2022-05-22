import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import {fileSettings, FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';


const App = () => {

  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
          <TooltipComponent content='Settings' position='Top'>
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            Sidebar
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            Sidebar
          </div>
        )}
        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
        }>
          <div className='fixed md:static bg-main-bg dark:bg-main-bg
          navbar w-full'>
            Navbar
          </div>

        </div>
        <div>
          <Routes>
            <Route path="/" element="ECommerce"></Route>
            <Route path="/ecommerce" element="ECommerce"></Route>

            <Route path="/orders" element="Orders"></Route>
            <Route path="/employees" element="Employees"></Route>
            <Route path="/customers" element="Customers"></Route>

            <Route path="/task-list" element="Task List"></Route>
            <Route path="/editor" element="Editor"></Route>
            <Route path="/calender" element="Calender"></Route>
            <Route path="/color-picker" element="ColorPicker"></Route>

            <Route path="/line" element="Line"></Route>
            <Route path="/area" element="Area"></Route>
            <Route path="/bar" element="Bar"></Route>
            <Route path="/pie" element="Pie"></Route>
            <Route path="/financial" element="Financial"></Route>
            <Route path="/color-mapping" element="ColorMapping"></Route>
            <Route path="/pyramid" element="Pyramid"></Route>
            <Route path="/stacked" element="Stack"></Route>

            
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

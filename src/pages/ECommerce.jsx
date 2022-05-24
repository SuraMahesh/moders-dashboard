import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChatDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvide';


const ECommerce = () => {
  return (
    <div className='mt-12'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-x1 w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center'>
                <div className='flex justify-between items-center'>
                    <div>
                    <p className='font-bold text-gray-400'>
                        Earning
                    </p>
                    <p className='text-2xl'>$500</p>
                    </div>
                    
                </div>
                <div className='mt-6'>
                    <Button 
                    color='white'
                    bgColor='blue'
                    text='Download'
                    borderRadius='10px' 
                    size='md'></Button>
                </div>
            </div>
            <div className='justify-center flex-wrap
            gap-1 items-center m-3 flex'
            >
                {earningData.map((item) => (
                <div key={item.title}
                className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                    <button type='button' className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                    style={{ color: item.iconColor, background: item.iconBg}}>
                        {item.icon}
                    </button>
                    <p className='mt-3'>
                    <span className='text-lg font-semibold'>
                        {item.amount}
                    </span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                        {item.percentage}
                    </span>
                    </p>
                    <p className='text-sm text-gray-400 mt-1'>
                        {item.title}</p>
                </div>
            ))}
                
            </div>
        </div>
        <div className='flex gap-10 flex-wrap justify-center'>
                <div className='dark:bg-secondary-dark-bg bg-white dark:text-gray-200 m-3 rounded-2xl md:w-780'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>
                            Revenue Updates
                        </p>
                        <div className='gap-4 items-center flex'>
                            <p className='gap-2 items-center flex text-gray-600 hover:drop-shadow-xl'>
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>Expense</span>
                            </p>
                            <p className='gap-2 items-center flex text-green-400 hover:drop-shadow-xl'>
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 justify-center flex-wrap'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div>
                                <p>
                                    <span className='text-bold text-xl'>
                                        $5000
                                    </span>
                                    <span className=' text-white bg-green-400 rounded-full ml-3 text-xs cursor-pointer p-1.5 hover:drop-shadow-xl'>
                                        34%
                                    </span>
                                </p>
                                <p className='mt-1 text-gray-500'>Budget</p>
                                <div className='mt-8'>
                                <p>
                                    <span className='text-bold text-xl'>
                                        $33493
                                    </span>
                                   
                                </p>
                                <p className='mt-1 text-gray-500'>Expense</p>
                                </div>
                                <div className='mt-5'>
                                    <SparkLine
                                    currentColor='blue' 
                                    id='line-sparkLine'
                                    type='Line'
                                    height='80px'
                                    width='250px'
                                    data={SparklineAreaData}
                                    color='blue'/>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default ECommerce
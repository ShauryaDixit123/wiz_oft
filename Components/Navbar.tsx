import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import WizIcon from '../Icons/wizIcon';
import Button from './button';
import Quotes from '../Icons/quotesIcon';
import SettingsIcon from '../Icons/settingsIcon';
import BookingsIcon from '../Icons/bookingsIcon';
import ChevronDown from '../Icons/chevronDown';
import RequestQuote from './requestQuote';
import UserIcon from '../Icons/userIcon';
import ShipIcon from '../Icons/shipIcon';
import DropDownFinal from './DropDownFinal';
import WorkSpaceDropDown from './WorkSpaceDropDown';
import UserDropdown from './UserDropdown';

// const getUserType = ["Admin", "User"][Math.floor(Math.random() * 2)];
// export const UserContext = React.createContext(getUserType);
// export const UserProvider = UserContext.Provider;
function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-[#5C20CF] h-15 text-sm font-sans font-light w-full '>
            <div className=''>
                <div className='flex items-center justify-between h-16 '>
                    <div className='flex items-center flex-[0.4]'>
                        <div className='flex-shrink-0 '>
                            <WizIcon />
                        </div>
                        <div className='hidden md:block justify-around w-full '>
                            <div className='flex items-center w-full justify-center mr-10'>
                                {/* <Button name="Workspace" iconRight={<ChevronDown/>}></Button> */}

                                <WorkSpaceDropDown />

                                <Button
                                    name='Quotes'
                                    iconLeft={<Quotes />}
                                ></Button>
                                <Button
                                    name='Bookings'
                                    iconLeft={<BookingsIcon />}
                                ></Button>
                                <div>
                                    <DropDownFinal />
                                </div>

                                {/* <Button name="Manage" iconLeft={<SettingsIcon/>} iconRight={<ChevronDown/>}></Button> */}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center flex-[0.45] justify-around'>
                        <div className='hidden md:block w-full'>
                            <div className='flex h-full items-center justify-end'>
                                <RequestQuote />
                                <Button
                                    name='Wiz Voyage!'
                                    iconLeft={<ShipIcon />}
                                ></Button>
                                <UserDropdown />
                            </div>
                        </div>
                    </div>

                    <div className=' flex md:hidden w-full'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className='bg-[#5C20CF] inline-flex items-center justify-center p-2 rounded-md hover:text-gray-400 text-white hover:bg-[#5C20CF]'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-4 w-4'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                {(ref) => (
                    <div className='md:hidden' id='mobile-menu'>
                        <div
                            ref={ref}
                            className='px-2 pt-2 pb-3 space-y-1 sm:px-3'
                        >
                            <Button
                                name='Workspace'
                                iconRight={<ChevronDown />}
                            ></Button>
                            <Button
                                name='Quotes'
                                iconLeft={<Quotes />}
                            ></Button>
                            <Button
                                name='Bookings'
                                iconLeft={<BookingsIcon />}
                            ></Button>
                            <Button
                                name='Manage'
                                iconLeft={<SettingsIcon />}
                                iconRight={<ChevronDown />}
                            ></Button>

                            <RequestQuote />
                            <div className=' '>
                                <Button
                                    name='Wiz Voyage!'
                                    iconLeft={<ShipIcon />}
                                ></Button>
                            </div>

                            <UserDropdown />
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Nav;

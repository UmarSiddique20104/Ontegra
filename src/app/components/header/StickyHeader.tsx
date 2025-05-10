'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../../../public/logo-white.png';
import ShortLogo from '../../../../public/icon.png';
import UserIcon from '../../../../public/user-fill@2x.png';
import SearchIcon from '../../../../public/search@2x.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoArrowUp, IoCaretUpSharp } from 'react-icons/io5';
import menuData from './menuData';
import { useTriggerStore } from '@/store/Trigger-Store';
import { FaArrowDown, FaChevronRight } from 'react-icons/fa6';
import { Topbar } from './topbar';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import { IoArrowDown } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const StickyHeader = ({ color }: any) => {
    const pathUrl = usePathname();
    // Navbar toggle
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [bg, setBG] = useState(false);

    const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
    const [toggleSubMenu, setToggleSubMenu] = React.useState<boolean>(false);
    const [toggleSubMenuChildren, setToggleSubMenuChildren] = React.useState<boolean>(false);
    const [activeDropDownList, setActiveDropDownList] = React.useState<number>(-1);

    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    const [y, setY] = useState(0);
    const [nav, setNav] = useState<boolean>(true);
    const [toggleDropdown, setToggleDropdown] = useState<number>(0);
    const [showSubMenu, setShowSubMenu] = useState<number>(0);
    const [navBarScrollPoints, setNavBarScrollPoints] = useState<boolean>(false);
    const handleNavigation = (e: any) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            // console.log("scrolling up");
            setNav(true);
            setIsNavOpen(false);
            setToggleSubMenu(false);
            setToggleSubMenuChildren(false);
        } else if (y < window.scrollY) {
            // console.log("scrolling down");
            setNav(false);
            setIsNavOpen(false);
            setToggleSubMenu(false);
            setToggleSubMenuChildren(false);
        }
        setY(window.scrollY);
    };

    useEffect(() => {
        setY(window.scrollY);

        window.addEventListener('scroll', (e) => handleNavigation(e));
    }, [y]);
    //

    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleStickyNavbar);
    });

    // submenu handler
    const [openIndex, setOpenIndex] = useState(-1);
    const handleSubmenu = (index: any) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };
    const header = useTriggerStore((state: any) => state.header);
    const setHeader = useTriggerStore((state: any) => state.setHeader);
    useEffect(() => {
        window.scrollTo(0, 0);

        window.addEventListener('wheel', (e: any) => {
            setHeader(Math.sign(e.deltaY) > 0 ? true : false);
        });
    }, []);

    const getScrollPoints = () => {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition >= 40) {
            setNavBarScrollPoints(true);
        } else {
            setNavBarScrollPoints(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', getScrollPoints);
        return () => {
            window.removeEventListener('scroll', getScrollPoints);
        };
    }, []);

    useEffect(() => {
        // Function to handle click outside the navigation menu
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            // Check if the click is outside the navigation menu
            if (!target.closest('.header-container')) {
                setIsNavOpen(false);
                setToggleSubMenu(false);
                setToggleSubMenuChildren(false);
            }
        };

        // Attach event listener to the body
        document.body.addEventListener('click', handleClickOutside);

        // Cleanup function
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* desktop header */}
            <header
                className={`hidden ud-header z-40 lg:flex flex-col w-full items-center transition-all duration-500 ${nav ? 'opacity-100' : 'opacity-0'} ${
                    header ? 'shadow-nav fixed z-[9999] bg-zinc-950 py-3' : `fixed ${navBarScrollPoints ? 'bg-zinc-950' : 'bg-transparent'}`
                } ${color ? 'bg-zinc-950' : ''}`}
            >
                <Topbar />
                <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-between -mx-4 py-3">
                        <div className="max-w-full px-4 w-60 3xl:w-80 xl:mr-12">
                            <Link className="header-logo block w-full relative" href="/">
                                <Image src={Logo} className={`transition-all duration-500 w-full max-w-[180px] ${sticky ? 'opacity-0' : 'opacity-full'}`} alt="Ontegra" priority />
                                <Image
                                    src={ShortLogo}
                                    className={`transition-all duration-500 absolute left-0 top-1/2 -translate-y-1/2 ${sticky ? 'opacity-full' : 'opacity-0'}`}
                                    alt="Ontegra"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="flex items-center justify-end px-4 gap-6 xl:gap-24">
                            <div className="mainMenu ">
                                <button
                                    onClick={navbarToggleHandler}
                                    id="navbarToggler"
                                    aria-label="Mobile Menu"
                                    className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-0 0xl:hidden"
                                >
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? ' top-[7px] rotate-45' : ' '} ${
                                            pathUrl !== '/' && '!bg-white dark:!bg-white'
                                        } ${pathUrl === '/' && sticky ? 'bg-white dark:bg-white' : 'bg-white'}`}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? 'opacity-0 ' : ' '} ${
                                            pathUrl !== '/' && '!bg-white dark:!bg-white'
                                        } ${pathUrl === '/' && sticky ? 'bg-white dark:bg-white' : 'bg-white'}`}
                                    />
                                    <span
                                        className={`relative my-1.5  block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? ' top-[-8px] -rotate-45' : ' '} ${
                                            pathUrl !== '/' && '!bg-white dark:!bg-white'
                                        } ${pathUrl === '/' && sticky ? 'bg-white dark:bg-white' : 'bg-white'}`}
                                    />
                                </button>
                                <nav
                                    id="navbarCollapse"
                                    className={`navbar absolute right-5 z-30 w-[80%] transition-all ease-in rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 0xl:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                                        navbarOpen ? 'visibility top-full opacity-100' : '-right-[100%] invisible top-[120%] opacity-0'
                                    }`}
                                >
                                    <ul className="block lg:flex lg:gap-x-8 xl:gap-x-12">
                                        {menuData.map((menuItem, index) =>
                                            menuItem.path ? (
                                                <li
                                                    key={index}
                                                    className="group flex items-center gap-5 relative"
                                                    onMouseEnter={() => {
                                                        setToggleDropdown(index);
                                                    }}
                                                >
                                                    {menuItem.title === 'Log Service Request' ? (
                                                        <Link
                                                            scroll={false}
                                                            href={menuItem.path}
                                                            className={`ud-menu-scroll justify-center rounded-full bg-white group font-semibold text-black flex items-end gap-3 py-2 lg:py-2 font-montserrat  text-sm lg:inline-flex lg:px-2 `}
                                                        >
                                                            {menuItem.title}
                                                            {menuItem.submenu.length > 0 && <MdOutlineKeyboardArrowDown className="mb-1" />}
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            scroll={false}
                                                            href={menuItem.path}
                                                            className={`ud-menu-scroll group flex items-end gap-3 py-2 lg:py-3 font-montserrat font-medium text-sm lg:inline-flex lg:px-0 relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:bg-transparent hover:before:bg-primary ${
                                                                sticky ? 'text-black lg:text-white' : 'text-black lg:text-white'
                                                            } ${pathUrl === menuItem?.path && sticky && 'before:bg-primary'}`}
                                                        >
                                                            {menuItem.title}
                                                            {menuItem.submenu.length > 0 && <MdOutlineKeyboardArrowDown className="mb-1" />}
                                                        </Link>
                                                    )}

                                                    {menuItem.submenu.length > 0 && (
                                                        <div className={`pt-5 z-10 absolute top-[100%] -left-6 w-64 ${toggleDropdown == index ? 'block transition-all duration-700' : 'hidden'}`}>
                                                            <div
                                                                className="shadow-sm group-hover:block hidden bg-[#FFFFFF] "
                                                                onMouseLeave={() => {
                                                                    setToggleDropdown(index);
                                                                }}
                                                            >
                                                                <span className="absolute top-1 left-6">
                                                                    <IoCaretUpSharp size={25} color="#ffffff" />
                                                                </span>
                                                                <ul>
                                                                    {menuItem.submenu.map((item: any, index: number) => {
                                                                        return (
                                                                            <li
                                                                                key={index}
                                                                                onMouseEnter={() => setShowSubMenu(index)}
                                                                                className="relative hover:bg-[#278CB3] font-normal text-sm leading-tight group/submenu"
                                                                            >
                                                                                {item.path ? (
                                                                                    <Link className="cursor-pointer select-none group group-hover/submenu:text-white font-montserrat" href={item.path}>
                                                                                        <p className="px-7 py-4 border-b border-[#EAEAEA]">{item.title}</p>
                                                                                    </Link>
                                                                                ) : (
                                                                                    <Link
                                                                                        href="#"
                                                                                        className="relativecursor-pointer block select-none group group-hover/submenu:text-white py-4 border-b border-[#EAEAEA] font-montserrat px-7"
                                                                                    >
                                                                                        {item.title}
                                                                                        <span className="text-center absolute top-5 right-3 end-0">
                                                                                            {item?.submenu?.length ? <FaChevronRight /> : ''}
                                                                                        </span>
                                                                                    </Link>
                                                                                )}
                                                                                {index == showSubMenu && item?.submenu?.length > 0 && (
                                                                                    <div className="bg-transparent absolute left-full  top-0 w-52">
                                                                                        <div className={`bg-white`}>
                                                                                            <ul>
                                                                                                {item.submenu.map((item: any, index: number) => {
                                                                                                    return (
                                                                                                        <li
                                                                                                            key={index}
                                                                                                            className="hover:bg-[#278CB3] cursor-pointer select-none hover:text-white font-montserrat"
                                                                                                        >
                                                                                                            <p className="px-6 py-4 border-b">
                                                                                                                {item.path ? (
                                                                                                                    <Link href={item?.path}>{item.title}</Link>
                                                                                                                ) : (
                                                                                                                    <Link href="#">{item.title}</Link>
                                                                                                                )}
                                                                                                            </p>
                                                                                                        </li>
                                                                                                    );
                                                                                                })}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                                </li>
                                            ) : (
                                                <li className="submenu-item group relative" key={menuItem.id}>
                                                    {pathUrl !== '/' ? (
                                                        <button
                                                            onClick={() => handleSubmenu(index)}
                                                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                                                        >
                                                            {menuItem.title}

                                                            <span className="pl-1">
                                                                <svg
                                                                    className={`duration-300 lg:group-hover:rotate-180`}
                                                                    width="16"
                                                                    height="17"
                                                                    viewBox="0 0 16 17"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleSubmenu(index)}
                                                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                                                                sticky ? 'text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary' : 'text-white'
                                                            }`}
                                                        >
                                                            {menuItem.title}

                                                            <span className="pl-1">
                                                                <svg
                                                                    className={`duration-300 lg:group-hover:rotate-180`}
                                                                    width="16"
                                                                    height="17"
                                                                    viewBox="0 0 16 17"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    )}

                                                    <div
                                                        className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                                            openIndex === index ? '!-left-[25px]' : 'hidden'
                                                        }`}
                                                    >
                                                        {menuItem?.submenu?.map((submenuItem: any, index: number) => (
                                                            <Link
                                                                href={submenuItem.path}
                                                                key={index}
                                                                className={`block rounded px-4 py-[10px] text-sm ${
                                                                    pathUrl === submenuItem.path ? 'text-primary' : 'text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
                                                                }`}
                                                            >
                                                                {submenuItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            {/* <div className="flex items-center justify-end space-x-7 pr-16 lg:pr-0">
									<button className="flex items-center justify-center cursor-pointer border-none bg-transparent h-5 w-5">
										<Image src={SearchIcon} className="h-5 w-5" alt="SearchIcon" />
									</button>
									<button className="flex items-center justify-center cursor-pointer border-none bg-transparent h-5 w-5">
											<Image src={UserIcon} className="h-5 w-5" alt="UserIcon" />
										</button>
								</div> */}
                        </div>
                    </div>
                </div>
            </header>
            {/* mobile header */}

            <div className={`header-container hidden max-lg:block fixed top-0 z-50 w-full transition-all transform duration-300 ${nav ? 'opacity-100' : 'opacity-0'}`}>
                <div>
                    <Topbar />
                </div>
                <header className="bg-black p-5">
                    <div className="flex justify-between items-center">
                        <div className="w-[30%]">
                            <Link href="/">
                                <Image src={ShortLogo} alt="logo" />
                            </Link>
                        </div>
                        <div className="w-[10%]">
                            <button
                                onClick={() => {
                                    setIsNavOpen((prevState) => !prevState);
                                    isNavOpen && setToggleSubMenu(false);
                                    isNavOpen && setToggleSubMenuChildren(false);
                                }}
                                className="float-end"
                            >
                                {isNavOpen ? <RxCross1 color="white" size={35} /> : <HiOutlineBars3 color="white" size={35} />}
                            </button>
                        </div>
                    </div>
                    {
                        <div
                            className={`${
                                isNavOpen && 'right-0 transition-all duration-300 ease-in'
                            } z-[9999] bg-white h-screen overflow-y-scroll w-60 shadow-xl -right-[100%] top-[100%] absolute transition-all duration-300 ease-in p-5`}
                        >
                            <ul>
                                {menuData.map((menuItem, index) => {
                                    return (
                                        <li key={index} className="flex flex-wrap items-center">
                                            <Link href={menuItem.path} className="inline-flex text-sm leading-9 w-fit font-medium font-montserrat">
                                                {menuItem.title}
                                            </Link>
                                            {menuItem.submenu.length > 0 && (
                                                <IoIosArrowDown
                                                    className={`${toggleSubMenu && activeDropDownList === index && 'rotate-180'} w-4 h-4 ml-auto`}
                                                    onClick={() => {
                                                        setActiveDropDownList(index);
                                                        activeDropDownList === index && setToggleSubMenu((prevState) => !prevState);
                                                        setToggleSubMenuChildren(false);
                                                    }}
                                                />
                                            )}
                                            {activeDropDownList === index && (
                                                <ul
                                                    className={`${
                                                        toggleSubMenu && 'transition-all duration-300 ease-in py-3'
                                                    } bg-primary/10 -mx-5 px-5 transition-all duration-300 ease-in flex-[1_0_100%]`}
                                                >
                                                    {toggleSubMenu &&
                                                        menuItem.submenu.map((submenuItem, submenuIndex) => {
                                                            return (
                                                                <li
                                                                    key={submenuIndex}
                                                                    className={`${
                                                                        toggleSubMenu && ' flex flex-wrap items-center transition-all duration-300 ease-in'
                                                                    } transition-all duration-300 ease-in w-full`}
                                                                >
                                                                    <Link href={submenuItem.path} className="inline-flex text-sm leading-9 w-fit font-normal font-lato">
                                                                        {submenuItem.title}
                                                                    </Link>
                                                                    {submenuItem.submenu.length > 0 &&
                                                                        (!toggleSubMenuChildren ? (
                                                                            <IoIosArrowDown className="w-4 h-4 ml-auto" onClick={() => setToggleSubMenuChildren((prevState) => !prevState)} />
                                                                        ) : (
                                                                            <IoIosArrowUp className="w-4 h-4 ml-auto" onClick={() => setToggleSubMenuChildren((prevState) => !prevState)} />
                                                                        ))}
                                                                    <ul className={`${toggleSubMenuChildren && 'transition-all duration-300 ease-in'} ms-5 transition-all duration-300 ease-in w-full`}>
                                                                        {toggleSubMenuChildren &&
                                                                            submenuItem.submenu.map((SubmenuItemChildren, SubmenuItemChildrenIndex) => {
                                                                                return (
                                                                                    <li
                                                                                        key={SubmenuItemChildrenIndex}
                                                                                        className={`${
                                                                                            toggleSubMenuChildren && 'flex items-center transition-all duration-300 ease-in'
                                                                                        } transition-all duration-300 ease-in w-full`}
                                                                                    >
                                                                                        <Link href={SubmenuItemChildren.path} className="inline-flex text-sm leading-9 w-fit font-normal font-lato">
                                                                                            {SubmenuItemChildren.title}
                                                                                        </Link>
                                                                                    </li>
                                                                                );
                                                                            })}
                                                                    </ul>
                                                                </li>
                                                            );
                                                        })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    }
                </header>
            </div>
        </>
    );
};

export default StickyHeader;

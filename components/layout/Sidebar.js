import styles from './Sidebar.module.css';
import CustomImage from "../CustomImage";
import Link from "next/link";
import {useRouter} from "next/router";
import $ from 'jquery';

export default function Sidebar({user}) {
    const router = useRouter();
    const showCustomerMenu = (e) => {
        e.preventDefault();
        $('.customerMenu').slideToggle();
        $('.ci').toggleClass('open');
        $('.customerParent').toggleClass(styles.opened);
    };
    const showRoomMenu = (e) => {
        e.preventDefault();
        $('.roomMenu').slideToggle();
        $('.room').toggleClass('open');
        $('.roomParent').toggleClass(styles.opened);
    };
    const showSettingMenu = (e) => {
        e.preventDefault();
        $('.settingMenu').slideToggle();
        $('.setting').toggleClass('open');
        $('.settingParent').toggleClass(styles.opened);
    };
    const showProductMenu = (e) => {
        e.preventDefault();
        $('.productMenu').slideToggle();
        $('.pr').toggleClass('open');
        $('.productParent').toggleClass(styles.opened);
    };
    const showSaleMenu = (e) => {
        e.preventDefault();
        $('.saleMenu').slideToggle();
        $('.sales').toggleClass('open');
        $('.salesParent').toggleClass(styles.opened);
    };

    return (
        <div className={`sidebar ${styles.sidebar}`}>
            <div className={styles.avatarArea}>
                <div className={styles.avatar}>
                    <CustomImage src={`/avatar.jpg`} circle={true}/>
                </div>
                <p className={styles.userName}>
                    {user.name}
                </p>
            </div>
            <ul>
                <li>
                    <Link href={`/dashboard`}>
                        <a className={`
                                ${
                            router.pathname === '/dashboard'
                                ? styles.active
                                : ''
                        }
                            `}>
                            <i className="fa-solid fa-gauge-high"/>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={`#`}>
                        <a
                            onClick={showSaleMenu}
                            className={`salesParent 
                                ${
                                router.pathname === '/sale' ||
                                router.pathname === '/sale/create' ||
                                router.pathname === '/sale/view/[id]' ||
                                router.pathname === '/sale/[id]'
                                    ? styles.active
                                    : ''
                            }
                            `}>
                            <i className="fa-solid fa-shopping-cart"/>
                            Sales
                            <span className={`fa-solid fa-caret-right float-end ${styles.dropdownIcon} sale`}/>
                        </a>
                    </Link>
                    <ul className={`saleMenu ${styles.subMenu}`}>
                        <li>
                            <Link href={`/sale`}>
                                <a className={`
                                ${
                                    router.pathname === '/sale' ||
                                    router.pathname === '/sale/[id]'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Sale List
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/sale/create`}>
                                <a className={`
                                ${
                                    router.pathname === '/sale/create'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    POS
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={`/product`}>
                        <a
                            onClick={showProductMenu}
                            className={`productParent 
                                ${
                                router.pathname === '/product' ||
                                router.pathname === '/product/create' ||
                                router.pathname === '/product/[id]' ||
                                router.pathname === '/category' ||
                                router.pathname === '/category/create' ||
                                router.pathname === '/category/[id]'
                                    ? styles.active
                                    : ''
                            }
                            `}>
                            <i className="fa-solid fa-bag-shopping"/>
                            Product
                            <span className={`fa-solid fa-caret-right float-end ${styles.dropdownIcon} pr`}/>
                        </a>
                    </Link>
                    <ul className={`productMenu ${styles.subMenu}`}>
                        <li>
                            <Link href={`/product`}>
                                <a className={`
                                ${
                                    router.pathname === '/product' ||
                                    router.pathname === '/product/[id]'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Product List
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/product/create`}>
                                <a className={`
                                ${
                                    router.pathname === '/product/create'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Add Product
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/category`}>
                                <a className={`
                                ${
                                    router.pathname === '/category'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Categories
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={`/customer`}>
                        <a
                            onClick={showCustomerMenu}
                            className={`customerParent 
                                ${
                                router.pathname === '/customer' ||
                                router.pathname === '/customer/create' ||
                                router.pathname === '/customer/[id]'
                                    ? styles.active
                                    : ''
                            }
                            `}>
                            <i className="fa-solid fa-user-group"/>
                            Customer
                            <span className={`fa-solid fa-caret-right float-end ${styles.dropdownIcon} ci`}/>
                        </a>
                    </Link>
                    <ul className={`customerMenu ${styles.subMenu}`}>
                        <li>
                            <Link href={`/customer`}>
                                <a className={`
                                ${
                                    router.pathname === '/customer' ||
                                    router.pathname === '/customer/[id]'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Customer List
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/customer/create`}>
                                <a className={`
                                ${
                                    router.pathname === '/customer/create'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Add Customer
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <Link href={`/unit`}>
                        <a className={`
                                ${
                            router.pathname === '/unit' ||
                            router.pathname === '/unit/create' ||
                            router.pathname === '/unit/[id]'
                                ? styles.active
                                : ''
                        }
                            `}>
                            <i className="fa-solid fa-scale-balanced"/>
                            Unit
                        </a>
                    </Link>
                </li>
                {/*<li>*/}
                {/*    <Link href={`#`}>*/}
                {/*        <a*/}
                {/*            onClick={showPurchaseMenu}*/}
                {/*            className={`purchaseParent */}
                {/*                ${*/}
                {/*                router.pathname === '/purchase' ||*/}
                {/*                router.pathname === '/purchase/create' ||*/}
                {/*                router.pathname === '/purchase/barcode/[id]' ||*/}
                {/*                router.pathname === '/purchase/[id]'*/}
                {/*                    ? styles.active*/}
                {/*                    : ''*/}
                {/*            }*/}
                {/*            `}>*/}
                {/*            <i className="fa-solid fa-cart-plus"/>*/}
                {/*            Purchase*/}
                {/*            <span className={`fa-solid fa-caret-right float-end ${styles.dropdownIcon} sale`}/>*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*    <ul className={`purchaseMenu ${styles.subMenu}`}>*/}
                {/*        <li>*/}
                {/*            <Link href={`/purchase`}>*/}
                {/*                <a className={`*/}
                {/*                ${*/}
                {/*                    router.pathname === '/purchase' ||*/}
                {/*                    router.pathname === '/purchase/[id]'*/}
                {/*                        ? styles.active*/}
                {/*                        : ''*/}
                {/*                }*/}
                {/*            `}>*/}
                {/*                    Purchase List*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link href={`/purchase/create`}>*/}
                {/*                <a className={`*/}
                {/*                ${*/}
                {/*                    router.pathname === '/purchase/create'*/}
                {/*                        ? styles.active*/}
                {/*                        : ''*/}
                {/*                }*/}
                {/*            `}>*/}
                {/*                    Add Purchase*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                <li>
                    <Link href={`/bank`}>
                        <a
                            onClick={showRoomMenu}
                            className={`roomParent 
                                ${
                                router.pathname === '/room' ||
                                router.pathname === '/room/create' ||
                                router.pathname === '/room/[id]'
                                    ? styles.active
                                    : ''
                            }
                            `}>
                            <i className="fa-solid fa-hotel"></i>
                            Room
                            <span className={`fa-solid fa-caret-right float-end ${styles.dropdownIcon} room`}/>
                        </a>
                    </Link>
                    <ul className={`roomMenu ${styles.subMenu}`}>
                        <li>
                            <Link href={`/room`}>
                                <a className={`
                                ${
                                    router.pathname === '/room' ||
                                    router.pathname === '/room/[id]'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Room List
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/room/create`}>
                                <a className={`
                                ${
                                    router.pathname === '/room/create'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Add Room
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link href={`#`}>
                        <a
                            onClick={showSettingMenu}
                            className={`settingParent 
                                ${
                                router.pathname === '/setting/company'
                                    ? styles.active
                                    : ''
                            }
                            `}>
                            <i className="fa-solid fa-gear"/>
                            Settings
                            <span className={`fa-solid fa-caret-right float-end ${styles.dropdownIcon} setting`}/>
                        </a>
                    </Link>
                    <ul className={`settingMenu ${styles.subMenu}`}>
                        <li>
                            <Link href={`/setting/company`}>
                                <a className={`
                                ${
                                    router.pathname === '/setting/company'
                                        ? styles.active
                                        : ''
                                }
                            `}>
                                    Company Information
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
import { Menu, ShoppingBag, X } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search } from 'lucide-react';

import SearchDropdown from '../Searchdropdown';

interface NavbarProps {
  isMobile: boolean;
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  isMobile,
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const [desktopDropdownOpenApple, setDesktopDropdownOpenApple] =
    useState(false);
  const [desktopDropdownOpenSamsung, setDesktopDropdownOpenSamsung] =
    useState(false);
  const [desktopDropdownOpenOnePlus, setDesktopDropdownOpenOnePlus] =
    useState(false);
  const [desktopDropdownOpenVivo, setDesktopDropdownOpenVivo] = useState(false);
  const [desktopDropdownOpenXiaomi, setDesktopDropdownOpenXiaomi] =
    useState(false);
  const [desktopDropdownOpenAsus, setDesktopDropdownOpenAsus] = useState(false);
  const [desktopDropdownOpenRazer, setDesktopDropdownOpenRazer] =
    useState(false);
  const [desktopDropdownOpenAccessories, setDesktopDropdownOpenAccessories] =
    useState(false);
  const [desktopDropdownOpenSupport, setDesktopDropdownOpenSupport] =
    useState(false);
  const [desktopDropdownOpenStore, setDesktopDropdownOpenStore] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchButtonRef = useRef<HTMLButtonElement>(null); // ADD THIS LINE

  const navigationItems = [
    {
      name: 'Store',
      items: [
        { name: 'Shop the Latest', path: '/store/shop-latest' },
        { name: 'Find a Store', path: '/store/find-store' },
        { name: 'Order Status', path: '/store/order-status' },
      ],
    },
    {
      name: 'Apple',
      items: [
        { name: 'Mac', path: '/apple/mac' },
        { name: 'iPad', path: '/apple/ipad' },
        { name: 'iPhone', path: '/apple/iphone' },
      ],
    },
    {
      name: 'Samsung',
      items: [
        { name: 'Galaxy S25 Ultra', path: '/samsung/s25ultra' },
        { name: 'Galaxy Watch 8', path: '/samsung/watch8' },
        { name: 'Galaxy Tab S11', path: '/samsung/tabs11' },
      ],
    },
    {
      name: 'One Plus',
      items: [
        { name: 'OnePlus 15', path: '/oneplus/oneplus15' },
        { name: 'OnePlus Pad 3', path: '/oneplus/oneplus-pad-3' },
        { name: 'OnePlus Nord 5', path: '/oneplus/oneplus-nord-5' },
      ],
    },
    {
      name: 'Vivo',
      items: [
        { name: 'X300 Series', path: '/vivo/x300-series' },
        { name: 'Pad 5 Pro', path: '/vivo/pad-5-pro' },
        { name: 'Watch 5', path: '/vivo/watch-5' },
      ],
    },
    {
      name: 'Xiaomi',
      items: [
        { name: 'Xiaomi 17 Ultra', path: '/xiaomi/xiaomi-17-ultra' },
        { name: 'Xiaomi 15T Pro', path: '/xiaomi/xiaomi-15t-pro' },
        { name: 'Xiaomi Pad 7 Ultra', path: '/xiaomi/xiaomi-pad-7-ultra' },
      ],
    },
    {
      name: 'Asus',
      items: [
        { name: 'ROG Zephyrus G14/G16', path: '/asus/rog-zephyrus' },
        { name: 'Zenfone 12 Ultra', path: '/asus/zenfone-12-ultra' },
        { name: 'Rog Phone 9 Pro', path: '/asus/rog-phone-9-pro' },
      ],
    },
    {
      name: 'Razer',
      items: [
        { name: 'Razer Blade 18', path: '/razer/razerblade-18' },
        { name: 'Razer Phone 2', path: '/razer/razer-phone-2' },
        { name: 'Razer Basilisk V3', path: '/razer/razer-basilisk-v3' },
      ],
    },
    {
      name: 'Accessories',
      items: [
        { name: 'Smart Glasses', path: '/accessories/smartglasses' },
        { name: 'Head Phones', path: '/accessories/headphones' },
        { name: 'Mouse & Keyboards', path: '/accessories/mouse-keyboards' },
      ],
    },
    {
      name: 'Support',
      items: [
        { name: 'Technical Support', path: '/support/technical-support' },
        { name: 'Community', path: '/support/community' },
        { name: 'Contact Us', path: '/support/contact-us' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setDesktopDropdownOpenStore(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 832) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ minHeight: '10vh', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '44px',
          transition: 'all 0.4s ease',
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.60)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
          color: '#1d1d1f',
        }}
      >
        <div
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '44px',
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                style={{
                  fontSize: isMobile ? '1.5rem' : '1.875rem',
                  fontWeight: 'bold',
                  color: '#1d1d1f',
                  textDecoration: 'none',
                }}
              >
                TechStore
              </Link>
            </div>

            {/* Desktop Menu */}
            {!isMobile && (
              <nav
                style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
              >
                {/* Store */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenStore(true)}
                  onMouseLeave={() => setDesktopDropdownOpenStore(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                      padding: '0 14px',
                    }}
                  >
                    Store
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: '33px',
                      left: 0,
                      width: '100vw',
                      height: 'calc(100vh - 44px)',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '3rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenStore ? 1 : 0,
                      pointerEvents: desktopDropdownOpenStore ? 'auto' : 'none',
                      transform: desktopDropdownOpenStore
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                    onMouseEnter={() => setDesktopDropdownOpenStore(true)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Store')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setDesktopDropdownOpenStore(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Apple */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenApple(true)}
                  onMouseLeave={() => setDesktopDropdownOpenApple(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Apple
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenApple ? 1 : 0,
                      pointerEvents: desktopDropdownOpenApple ? 'auto' : 'none',
                      transform: desktopDropdownOpenApple
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Apple')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Samsung */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenSamsung(true)}
                  onMouseLeave={() => setDesktopDropdownOpenSamsung(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Samsung
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenSamsung ? 1 : 0,
                      pointerEvents: desktopDropdownOpenSamsung
                        ? 'auto'
                        : 'none',
                      transform: desktopDropdownOpenSamsung
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Samsung')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* One Plus */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenOnePlus(true)}
                  onMouseLeave={() => setDesktopDropdownOpenOnePlus(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    OnePlus
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenOnePlus ? 1 : 0,
                      pointerEvents: desktopDropdownOpenOnePlus
                        ? 'auto'
                        : 'none',
                      transform: desktopDropdownOpenOnePlus
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'One Plus')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Vivo */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenVivo(true)}
                  onMouseLeave={() => setDesktopDropdownOpenVivo(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Vivo
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenVivo ? 1 : 0,
                      pointerEvents: desktopDropdownOpenVivo ? 'auto' : 'none',
                      transform: desktopDropdownOpenVivo
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Vivo')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Xiaomi */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenXiaomi(true)}
                  onMouseLeave={() => setDesktopDropdownOpenXiaomi(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Xiaomi
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenXiaomi ? 1 : 0,
                      pointerEvents: desktopDropdownOpenXiaomi
                        ? 'auto'
                        : 'none',
                      transform: desktopDropdownOpenXiaomi
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Xiaomi')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Asus */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenAsus(true)}
                  onMouseLeave={() => setDesktopDropdownOpenAsus(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Asus
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenAsus ? 1 : 0,
                      pointerEvents: desktopDropdownOpenAsus ? 'auto' : 'none',
                      transform: desktopDropdownOpenAsus
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Asus')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Razer */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenRazer(true)}
                  onMouseLeave={() => setDesktopDropdownOpenRazer(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Razer
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenRazer ? 1 : 0,
                      pointerEvents: desktopDropdownOpenRazer ? 'auto' : 'none',
                      transform: desktopDropdownOpenRazer
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Razer')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Accessories */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenAccessories(true)}
                  onMouseLeave={() => setDesktopDropdownOpenAccessories(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Accessories
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenAccessories ? 1 : 0,
                      pointerEvents: desktopDropdownOpenAccessories
                        ? 'auto'
                        : 'none',
                      transform: desktopDropdownOpenAccessories
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Accessories')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenSupport(true)}
                  onMouseLeave={() => setDesktopDropdownOpenSupport(false)}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '0.875rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    Support
                  </a>
                  <div
                    style={{
                      position: 'fixed',
                      top: 33,
                      left: 0,
                      width: '100vw',
                      height: '100vh',
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5rem 2rem 2rem',
                      boxSizing: 'border-box',
                      overflowY: 'auto',
                      opacity: desktopDropdownOpenSupport ? 1 : 0,
                      pointerEvents: desktopDropdownOpenSupport
                        ? 'auto'
                        : 'none',
                      transform: desktopDropdownOpenSupport
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                      transition:
                        'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                      }}
                    >
                      {navigationItems
                        .find(item => item.name === 'Support')
                        ?.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.path}
                            style={{
                              fontSize: '2rem',
                              fontWeight: '500',
                              color: '#1d1d1f',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </nav>
            )}

            {/* Right Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => navigate('/shopping/shopping-cart')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1d1d1f',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label="Shopping Cart"
              ></button>

              <div style={{ position: 'relative' }}>
                <button
                  ref={searchButtonRef}
                  onClick={() => setIsSearchOpen(true)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#1d1d1f',
                    cursor: 'pointer',
                    padding: '0.5rem',
                  }}
                >
                  <Search size={20} />
                </button>

                {/* Dropdown appears here */}
                <SearchDropdown
                  isOpen={isSearchOpen}
                  onClose={() => setIsSearchOpen(false)}
                  buttonRef={
                    searchButtonRef as React.RefObject<HTMLButtonElement>
                  }
                />
              </div>

              {/* Shopping Bag with count badge */}
              <Link
                to="/shopping/shopping-cart"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#1d1d1f',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  position: 'relative', // ← needed for badge positioning
                }}
              >
                <ShoppingBag size={20} />

                {/* Badge - shows only when cart has items */}
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-10px',
                      backgroundColor: '#ff3b30',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      minWidth: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 4px',
                      border: '1.5px solid white',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>

              {isMobile && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#1d1d1f',
                    cursor: 'pointer',
                    padding: '0.5rem',
                  }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/*content goes here */}
    </div>
  );
}

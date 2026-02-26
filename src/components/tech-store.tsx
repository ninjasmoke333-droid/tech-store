import  { useState, useEffect } from 'react';
import {
  ChevronRight,
  Menu,
  X,
  ShoppingBag,
  Search,
  ChevronLeft,
} from 'lucide-react';
import myVideo from '../assets/gelda.mp4';
import '../index.css';
import smartWatch1 from '../assets/smart-watch-1.mp4';
import { Link } from 'react-router-dom';
import Footer from './layout/footer';

const TechStoreLanding: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setDesktopDropdownOpenStore(false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 832);
      // Close mobile menu if resizing above 832px
      if (window.innerWidth >= 832) {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation structure
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

  const handleMenuItemClick = (itemName: string) => {
    setActiveSubmenu(itemName);
  };

  const handleBackClick = () => {
    setActiveSubmenu(null);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
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
              <Link
                to="/shopping/shopping-cart" // Replace with your cart page path
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#1d1d1f',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  textDecoration: 'none', // Remove underline
                }}
              >
                <ShoppingBag size={20} />
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

      {/* Apple-Style Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
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
          pointerEvents: mobileMenuOpen && isMobile ? 'auto' : 'none',
          opacity: mobileMenuOpen && isMobile ? 1 : 0,
          transition:
            'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100vh)',
        }}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            fontSize: '2.5rem',
            color: '#1d1d1f',
            cursor: 'pointer',
          }}
        ></button>

        {/* Main Menu */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
        >
          {navigationItems.map(item => (
            <div
              key={item.name}
              onClick={() => handleMenuItemClick(item.name)}
              style={{
                padding: '0.0rem 1.5rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '550',
                  color: '#1d1d1f',
                  textDecoration: 'none',
                }}
              >
                {item.name}
              </span>
              <ChevronRight
                size={20}
                color="#86868b"
                style={{ opacity: 0, transition: 'opacity 0.2s' }}
              />
            </div>
          ))}
        </div>

        {/* Submenu */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            minHeight: '100%',
            backgroundColor: '#ffffff',
            transform: activeSubmenu ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          {activeSubmenu && (
            <>
              <div
                onClick={handleBackClick}
                style={{
                  padding: '3rem 1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <ChevronLeft size={60} color="#000000" />
              </div>
              {navigationItems
                .find(item => item.name === activeSubmenu)
                ?.items.map(subItem => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    onClick={handleLinkClick}
                    style={{
                      display: 'block',
                      padding: '0.5rem 1.5rem',
                      fontSize: '1.8rem',
                      color: '#1d1d1f',
                      textDecoration: 'none',
                      fontWeight: '550',
                    }}
                  >
                    {subItem.name}
                  </Link>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Hero Section – full-bleed video */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <source src={myVideo} type="video/mp4" />
        </video>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))',
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: isMobile ? '1rem' : '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '3rem' : '5.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.6)',
            }}
          >
            Razer 18
          </h1>

          <p
            style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              marginBottom: '0.5rem',
            }}
          >
            The most powerful blade ever.
          </p>

          <p
            style={{
              fontSize: isMobile ? '1.125rem' : '1.5rem',
              marginBottom: '2rem',
            }}
          >
            From $2,899
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link to="/razer/razerblade-18">
              <button
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Buy now
              </button>
            </Link>
            <Link
              to="/razer/razerblade-18"
              style={{
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '1.125rem',
                textDecoration: 'none', // Remove default underline
              }}
            >
              Learn more <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: isMobile ? '600px' : '700px',
          overflow: 'hidden',
          backgroundColor: '#000000',
          color: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <source src={smartWatch1} type="video/mp4" />
        </video>

        {/* Centered Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '600px',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '3rem' : '5.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-00.02em',
              textShadow: '0 4px 12px rgba(0,0,0,0.6)',
            }}
          >
            SmartWatch Elite
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              color: 'white',
              marginBottom: '0.5rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            Advanced health tracking at your fingertips.
          </p>
          <p
            style={{
              fontSize: isMobile ? '1.125rem' : '1.5rem',
              color: 'white',
              marginBottom: '2rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            From $399
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link to="/samsung/watch8">
              <button
                style={{
                  backgroundColor: 'white',
                  color: '#000000',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Buy now
              </button>
            </Link>
            <Link
              to="/samsung/watch8"
              style={{
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '1.125rem',
                textDecoration: 'none', // Remove default underline
              }}
            >
              Learn more <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section
        style={{
          position: 'relative',
          background: `url('/src/assets/photos/smart-watch-photo-1.jpg') center/cover no-repeat`,

          color: '#ffffff',
          minHeight: isMobile ? '600px' : '700px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '3rem 1rem' : '5rem 1rem',
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3.75rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            Watch Series 9
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1.125rem' : '1.5rem',
              color: '#d1d5db',
              marginBottom: '0.5rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            Advanced health tracking at your fingertips.
          </p>
          <p
            style={{
              fontSize: isMobile ? '0.875rem' : '1.125rem',
              color: '#9ca3af',
              marginBottom: '2rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            From $399
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link to="/vivo/watch-5">
              <button
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                Buy now
              </button>
            </Link>
            <Link
              to="/vivo/watch-5"
              style={{
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Learn more <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Ting Star */}

      <section
        style={{
          position: 'relative',
          background: `url('/src/assets/photos/one-plus-pad-1.webp') center/cover no-repeat`,

          color: '#ffffff',
          minHeight: isMobile ? '600px' : '700px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '3rem 1rem' : '5rem 1rem',
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3.75rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            One Plus Pad 3
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1.125rem' : '1.5rem',
              color: '#d1d5db',
              marginBottom: '0.5rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            Advanced health tracking at your fingertips.
          </p>
          <p
            style={{
              fontSize: isMobile ? '0.875rem' : '1.125rem',
              color: '#9ca3af',
              marginBottom: '2rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            From $399
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link to="/oneplus/oneplus-pad-3">
              <button
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                Buy now
              </button>
            </Link>
            <Link
              to="/oneplus/oneplus-pad-3"
              style={{
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Learn more <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Ting Star */}

      <section
        style={{
          position: 'relative',
          background: `url('/src/assets/photos/op-15-3.jpg') center/cover no-repeat`,

          color: '#ffffff',
          minHeight: isMobile ? '600px' : '700px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '3rem 1rem' : '5rem 1rem',
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3.75rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            One Plus 15
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1.125rem' : '1.5rem',
              color: '#d1d5db',
              marginBottom: '0.5rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            Advanced health tracking at your fingertips.
          </p>
          <p
            style={{
              fontSize: isMobile ? '0.875rem' : '1.125rem',
              color: '#9ca3af',
              marginBottom: '2rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            From $399
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link to="/oneplus/oneplus15">
              <button
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                Buy now
              </button>
            </Link>
            <Link
              to="/oneplus/oneplus15"
              style={{
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Learn more <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} />
    </div>
  );
};

export default TechStoreLanding;

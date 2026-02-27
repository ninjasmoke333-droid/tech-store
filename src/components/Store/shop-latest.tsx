import  { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  Menu,
  X,
  ShoppingBag,
  Search,
  ChevronLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import SearchDropdown from '../Searchdropdown';

const AppleStoreInspired = () => {
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null); // ADD THIS LINE

  const latestProducts = [
    {
      name: 'Xiaomi 17 Ultra',
      subtitle: 'Apple Intelligence',
      price: 'From $1099',

      gradient: 'linear-gradient(135deg, #1e1e1e 0%, #3a3a3a 100%)',
      image: '/src/assets/photos/xiaomi-17-ultra-4.jpg',
      link: '/xiaomi/xiaomi-17-ultra',
    },
    {
      name: 'Razer Blade 18"',
      subtitle: 'M5 Chip',
      price: 'From $1599',

      gradient: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
      image: '/src/assets/photos/blade-18-1.png',
      link: '/razer/razerblade-18',
    },
    {
      name: 'OnePlus Pad 3',
      subtitle: 'Apple Intelligence',
      price: 'From $999',

      gradient: 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)',
      image: '/src/assets/photos/one-plus-pad-3.jpg',
      link: '/oneplus/oneplus-pad-3',
    },
    {
      name: 'Ipad',
      subtitle: '',
      price: 'From $399',

      gradient: 'linear-gradient(135deg, #1e1e1e 0%, #3a3a3a 100%)',
      image: '/src/assets/photos/ipad-2026-1.jpg',
      link: '/apple/ipad', // Note: You might want to create an Apple Watch route
    },
    {
      name: 'Vivo X300',
      subtitle: 'Apple Intelligence',
      price: 'From $799',

      gradient: 'linear-gradient(135deg, #00509e 0%, #003d7a 100%)',
      image: '/src/assets/photos/vivo-x300-1.jpg',
      link: '/vivo/x300-series',
    },
    {
      name: 'Rog Zephyrus G14',
      subtitle: 'Apple Intelligence',
      price: 'From $999',

      gradient: 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)',
      image: '/src/assets/photos/rog-g14-1.jpg',
      link: '/asus/rog-zephyrus',
    },
  ];

  const categories = [
    {
      name: 'Mac',
      image: '/src/assets/photos/macbook-1.png',
      link: '/apple/mac',
    },
    {
      name: 'OnePlus 15',
      image: '/src/assets/photos/op-15-2.jpg',
      link: '/oneplus/oneplus15',
    },
    {
      name: 'Galaxy Tab S11',
      image: '/src/assets/photos/tab-s11-1.jpg',
      link: '/samsung/tabs11',
    },
    {
      name: 'Galaxy Watch 8',
      image: '/src/assets/photos/galaxy-watch-8-1.jpg',
      link: '/samsung/watch8',
    },
    {
      name: 'Smart Glasses',
      image: '/src/assets/photos/smart-glasses-1.jpg',
      link: '/accessories/smartglasses',
    },
    {
      name: 'Vivo Pad 5 Pro',
      image: '/src/assets/photos/vivo-pad-1.jpg',
      link: '/vivo/pad-5-pro',
    },
    {
      name: 'Vivo X300',
      image: '/src/assets/photos/vivo-x300-3.jpg',
      link: '/vivo/x300-series',
    },
    {
      name: 'Xiaomi 17 Ultra',
      image: '/src/assets/photos/xiaomi-17-ultra-1.jpg',
      link: '/xiaomi/xiaomi-17-ultra',
    },
    {
      name: 'Rog Zephyrus G14/G15',
      image: '/src/assets/photos/rog-g14-1.jpg',
      link: '/asus/rog-zephyrus',
    },
    {
      name: 'Rog Phone 9',
      image: '/src/assets/photos/rog-phone-9-1.jpg',
      link: '/asus/rog-phone-9-pro',
    },
    {
      name: 'Razer Blade 18',
      image: '/src/assets/photos/blade-18-1.png',
      link: '/razer/razerblade-18',
    },
    {
      name: 'Xiaomi Pad 7 Ultra',
      image: '/src/assets/photos/xiaomi-pad-7-1.jpg',
      link: '/xiaomi/xiaomi-pad-7-ultra8',
    },
  ];

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

      {/* Hero Section */}
      <section
        style={{
          position: 'relative', // Add this to make it a positioning context
          paddingTop: '88px',
          textAlign: 'center',
          backgroundColor: '#f5f5f7',
          padding: '88px 1rem 3rem',
          height: '50vh', // Make it full viewport height
          overflow: 'hidden', // Prevent scrolling issues
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute', // Changed from 'relative' to 'absolute'
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            // Remove transform and position properties
          }}
        >
          <source src='/assets/store-vid.mp4' type="video/mp4" />
        </video>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1
            style={{
              fontSize: isMobile ? '2.5rem' : '5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textShadow:
                '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Store
          </h1>
          <p
            style={{
              fontSize: isMobile ? '1.25rem' : '1.75rem',
              color: '#ffffff',
              marginBottom: '2rem',
              textShadow:
                '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)',
              fontWeight: '500',
              letterSpacing: '0.01em',
              maxWidth: '800px',
              margin: '0 auto 2rem',
            }}
          >
            Give something special this holiday.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '2rem 1rem' : '3rem 1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? '1rem' : '1.5rem',
          }}
        >
          {categories.map(cat =>
            cat.link ? (
              <Link
                key={cat.name}
                to={cat.link}
                style={{
                  textDecoration: 'none',
                  color: '#1d1d1f',
                  textAlign: 'center',
                  padding: '1.5rem 1rem',
                  backgroundColor: '#f5f5f7',
                  borderRadius: '18px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div
                  style={{
                    textDecoration: 'none',
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '1.5rem 1rem',
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '18px',
                    transition: 'transform 0.3s ease',
                    position: 'relative',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                ></div>
                <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  {cat.name}
                </div>
              </Link>
            ) : (
              <div
                key={cat.name}
                style={{
                  textDecoration: 'none',
                  color: '#1d1d1f',
                  textAlign: 'center',
                  padding: '1.5rem 1rem',
                  backgroundColor: '#f5f5f7',
                  borderRadius: '18px',
                }}
              >
                <div
                  style={{
                    textDecoration: 'none',
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '1.5rem 1rem',
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '18px',
                    position: 'relative',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                ></div>
                <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  {cat.name}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* The Latest Section */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '2rem 1rem 3rem' : '3rem 1rem 5rem',
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: '600',
            color: '#1d1d1f',
            marginBottom: '1rem',
          }}
        >
          The latest.
        </h2>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            marginBottom: '2rem',
          }}
        >
          Truly awe-inspired gifts.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem',
          }}
        >
          {latestProducts.map(product => (
            <Link
              key={product.name}
              to={product.link}
              style={{
                background: product.image
                  ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${product.image})`
                  : product.gradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '18px',
                padding: '3rem 2rem',
                textAlign: 'center',
                color: '#ffffff', // Changed to always white for better contrast on images
                position: 'relative',
                overflow: 'hidden',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.transform = 'scale(1.02)')
              }
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}></div>
                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem',
                  }}
                >
                  {product.name}
                </h3>
                {product.subtitle && (
                  <p
                    style={{
                      fontSize: '0.875rem',
                      opacity: 0.8,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {product.subtitle}
                  </p>
                )}
                <p
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    marginBottom: '1.5rem',
                  }}
                >
                  {product.price}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  style={{
                    backgroundColor: product.gradient.includes('#f5f5f7')
                      ? '#0071e3'
                      : '#ffffff',
                    color: product.gradient.includes('#f5f5f7')
                      ? '#ffffff'
                      : '#1d1d1f',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}
                  onClick={e => e.preventDefault()}
                >
                  Buy
                </button>
                <span
                  style={{
                    color: product.gradient.includes('#f5f5f7')
                      ? '#0071e3'
                      : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  Learn more <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Personalization Section */}
      <section
        style={{
          backgroundColor: '#f5f5f7',
          padding: isMobile ? '3rem 1rem' : '5rem 1rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem',
            }}
          >
            Personalization.
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#6e6e73',
              marginBottom: '2rem',
            }}
          >
            Make it one of a kind.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '3rem 2rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✍️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '0.5rem',
                }}
              >
                FREE ENGRAVING
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6e6e73',
                  marginBottom: '1.5rem',
                }}
              >
                From you, especially for them.
              </p>
              <a
                href="#"
                style={{
                  color: '#0071e3',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                Shop
              </a>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '3rem 2rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚙️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '0.5rem',
                }}
              >
                Customize Laptop.
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6e6e73',
                  marginBottom: '1.5rem',
                }}
              >
                Choose the chip, memory, storage, and even color.
              </p>
              <a
                href="#"
                style={{
                  color: '#0071e3',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                Configure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#f5f5f7',
          marginTop: '4rem',
          borderTop: '1px solid #d2d2d7',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: isMobile ? '2rem 1rem' : '3rem 1rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? 'repeat(2, 1fr)'
                : 'repeat(5, 1fr)',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div>
              <h4
                style={{
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem',
                  fontSize: '0.75rem',
                }}
              >
                Shop and Learn
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {[
                  { name: 'Asus', path: '/asus/rog-zephyrus' },
                  { name: 'Vivo', path: '/vivo/x300-series' },
                  { name: 'Samsung', path: '/samsung/s25ultra' },
                  { name: 'Xiaomi', path: '/xiaomi/xiaomi-17-ultra' },
                ].map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      style={{
                        fontSize: '0.75rem',
                        color: '#6e6e73',
                        textDecoration: 'none',
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem',
                  fontSize: '0.75rem',
                }}
              >
                TechStore
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {[
                  { name: 'Find a Store', path: '/store/find-store' },
                  {
                    name: 'Technical Support',
                    path: '/support/technical-support',
                  },
                  { name: 'Community', path: '/support/community' },
                  { name: 'Contact Us', path: '/support/contact-us' },
                ].map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      style={{
                        fontSize: '0.75rem',
                        color: '#6e6e73',
                        textDecoration: 'none',
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #d2d2d7',
              paddingTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p style={{ color: '#6e6e73', fontSize: '0.75rem' }}>
              © 2026 TechStore. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Use', 'Sales Policy'].map(item => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: '0.75rem',
                    color: '#6e6e73',
                    textDecoration: 'none',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppleStoreInspired;

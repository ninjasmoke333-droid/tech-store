import  { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X, ShoppingBag, Search, ChevronLeft, Package, Mail, Phone as PhoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchDropdown from '../Searchdropdown';

const StoreOrderStatus = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signInMethod, setSignInMethod] = useState<'order' | 'email'>('order');

  const [desktopDropdownOpenApple, setDesktopDropdownOpenApple] = useState(false);
  const [desktopDropdownOpenSamsung, setDesktopDropdownOpenSamsung] = useState(false);
  const [desktopDropdownOpenOnePlus, setDesktopDropdownOpenOnePlus] = useState(false);
  const [desktopDropdownOpenVivo, setDesktopDropdownOpenVivo] = useState(false);
  const [desktopDropdownOpenXiaomi, setDesktopDropdownOpenXiaomi] = useState(false);
  const [desktopDropdownOpenAsus, setDesktopDropdownOpenAsus] = useState(false);
  const [desktopDropdownOpenRazer, setDesktopDropdownOpenRazer] = useState(false);
  const [desktopDropdownOpenAccessories, setDesktopDropdownOpenAccessories] = useState(false);
  const [desktopDropdownOpenSupport, setDesktopDropdownOpenSupport] = useState(false);
  const [desktopDropdownOpenStore, setDesktopDropdownOpenStore] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
    const searchButtonRef = useRef<HTMLButtonElement>(null); // ADD THIS LINE

  const navigationItems = [
    {
      name: 'Store',
      items: [
        { name: 'Shop the Latest', path: '/store/shop-latest' },
        { name: 'Find a Store', path: '/store/find-store' },
        { name: 'Order Status', path: '/store/order-status' }
      ]
    },
    {
      name: 'Apple',
      items: [
        { name: 'Mac', path: '/apple/mac' },
        { name: 'iPad', path: '/apple/ipad' },
        { name: 'iPhone', path: '/apple/iphone' }
      ]
    },
    {
      name: 'Samsung',
      items: [
        { name: 'Galaxy S25 Ultra', path: '/samsung/s25ultra' },
        { name: 'Galaxy Watch 8', path: '/samsung/watch8' },
        { name: 'Galaxy Tab S11', path: '/samsung/tabs11' }
      ]
    },
    {
      name: 'One Plus',
      items: [
        { name: 'OnePlus 15', path: '/oneplus/oneplus15' },
        { name: 'OnePlus Pad 3', path: '/oneplus/oneplus-pad-3' },
        { name: 'OnePlus Nord 5', path: '/oneplus/oneplus-nord-5' }
      ]
    },
    {
      name: 'Vivo',
      items: [
        { name: 'X300 Series', path: '/vivo/x300-series' },
        { name: 'Pad 5 Pro', path: '/vivo/pad-5-pro' },
        { name: 'Watch 5', path: '/vivo/watch-5' }
      ]
    },
    {
      name: 'Xiaomi',
      items: [
        { name: 'Xiaomi 17 Ultra', path: '/xiaomi/xiaomi-17-ultra' },
        { name: 'Xiaomi 15T Pro', path: '/xiaomi/xiaomi-15t-pro' },
        { name: 'Xiaomi Pad 7 Ultra', path: '/xiaomi/xiaomi-pad-7-ultra' }
      ]
    },
    {
      name: 'Asus',
      items: [
        { name: 'ROG Zephyrus G14/G16', path: '/asus/rog-zephyrus' },
        { name: 'Zenfone 12 Ultra', path: '/asus/zenfone-12-ultra' },
        { name: 'Rog Phone 9 Pro', path: '/asus/rog-phone-9-pro' }
      ]
    },
    {
      name: 'Razer',
      items: [
        { name: 'Razer Blade 18', path: '/razer/razerblade-18' },
        { name: 'Razer Phone 2', path: '/razer/razer-phone-2' },
        { name: 'Razer Basilisk V3', path: '/razer/razer-basilisk-v3' }
      ]
    },
    {
      name: 'Accessories',
      items: [
        { name: 'Smart Glasses', path: '/accessories/smartglasses' },
        { name: 'Head Phones', path: '/accessories/headphones' },
        { name: 'Mouse & Keyboards', path: '/accessories/mouse-keyboards' }
      ]
    },
    {
      name: 'Support',
      items: [
        { name: 'Technical Support', path: '/support/technical-support' },
        { name: 'Community', path: '/support/community' },
        { name: 'Contact Us', path: '/support/contact-us' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setDesktopDropdownOpenStore(false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 832);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { signInMethod, email, orderNumber, phoneNumber });
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
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.60)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
          color: '#1d1d1f',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '44px' }}>
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
              <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {/* Store */}
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopDropdownOpenStore(true)}
                  onMouseLeave={() => setDesktopDropdownOpenStore(false)}
                >
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer', padding: '0 14px' }}>
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
                      transform: desktopDropdownOpenStore ? 'translateY(0)' : 'translateY(-100vh)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                    onMouseEnter={() => setDesktopDropdownOpenStore(true)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Store')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
                          onClick={() => { setMobileMenuOpen(false); setDesktopDropdownOpenStore(false); }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      transform: desktopDropdownOpenApple ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Apple')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      pointerEvents: desktopDropdownOpenSamsung ? 'auto' : 'none',
                      transform: desktopDropdownOpenSamsung ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Samsung')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      pointerEvents: desktopDropdownOpenOnePlus ? 'auto' : 'none',
                      transform: desktopDropdownOpenOnePlus ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'One Plus')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      transform: desktopDropdownOpenVivo ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Vivo')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      pointerEvents: desktopDropdownOpenXiaomi ? 'auto' : 'none',
                      transform: desktopDropdownOpenXiaomi ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Xiaomi')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      transform: desktopDropdownOpenAsus ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Asus')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      transform: desktopDropdownOpenRazer ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Razer')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      pointerEvents: desktopDropdownOpenAccessories ? 'auto' : 'none',
                      transform: desktopDropdownOpenAccessories ? 'translateY(0)' : 'translateY(-20px)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Accessories')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
                  <a href="#" style={{ fontSize: '0.875rem', color: '#1d1d1f', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}>
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
                      pointerEvents: desktopDropdownOpenSupport ? 'auto' : 'none',
                      transform: desktopDropdownOpenSupport ? 'translateY(0)' : 'translateY(-100vh)',
                      transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                      {navigationItems.find(item => item.name === 'Support')?.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '2rem', fontWeight: '500', color: '#1d1d1f', textDecoration: 'none' }}
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
              <button style={{ backgroundColor: 'transparent', border: 'none', color: '#1d1d1f', cursor: 'pointer', padding: '0.5rem' }}>
                <ShoppingBag size={20} />
              </button>
              {isMobile && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{ backgroundColor: 'transparent', border: 'none', color: '#1d1d1f', cursor: 'pointer', padding: '0.5rem' }}
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
          transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
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
              <span style={{ fontSize: '1.8rem', fontWeight: '550', color: '#1d1d1f', textDecoration: 'none' }}>
                {item.name}
              </span>
              <ChevronRight size={20} color="#86868b" style={{ opacity: 0, transition: 'opacity 0.2s' }} />
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
                style={{ padding: '3rem 1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
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

      {/* Main Content - Order Status Form (your original content here) */}
      <div style={{ paddingTop: '88px', minHeight: 'calc(100vh - 88px)', backgroundColor: '#f5f5f7' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: isMobile ? '2rem 1rem' : '3rem 1rem' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: '600', color: '#1d1d1f', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Order Status
            </h1>
            <p style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', color: '#6e6e73' }}>
              Track your order or view order details
            </p>
          </div>

          {/* Sign-in Method Tabs */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: isMobile ? '1.5rem' : '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #d2d2d7', marginBottom: '2rem' }}>
              <button
                onClick={() => setSignInMethod('order')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: signInMethod === 'order' ? '2px solid #0071e3' : '2px solid transparent',
                  color: signInMethod === 'order' ? '#0071e3' : '#6e6e73',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Sign in with order number
              </button>
              <button
                onClick={() => setSignInMethod('email')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: signInMethod === 'email' ? '2px solid #0071e3' : '2px solid transparent',
                  color: signInMethod === 'email' ? '#0071e3' : '#6e6e73',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Sign in with email
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {signInMethod === 'order' ? (
                <>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1d1d1f', marginBottom: '0.5rem' }}>
                      Order number
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Package size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#86868b' }} />
                      <input
                        type="text"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        placeholder="W123456789"
                        style={{
                          width: '100%',
                          padding: '1rem 1rem 1rem 3rem',
                          fontSize: '1rem',
                          border: '1px solid #d2d2d7',
                          borderRadius: '12px',
                          backgroundColor: '#ffffff',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1d1d1f', marginBottom: '0.5rem' }}>
                      Email address
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#86868b' }} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        style={{
                          width: '100%',
                          padding: '1rem 1rem 1rem 3rem',
                          fontSize: '1rem',
                          border: '1px solid #d2d2d7',
                          borderRadius: '12px',
                          backgroundColor: '#ffffff',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1d1d1f', marginBottom: '0.5rem' }}>
                      Email address
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#86868b' }} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        style={{
                          width: '100%',
                          padding: '1rem 1rem 1rem 3rem',
                          fontSize: '1rem',
                          border: '1px solid #d2d2d7',
                          borderRadius: '12px',
                          backgroundColor: '#ffffff',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1d1d1f', marginBottom: '0.5rem' }}>
                      Phone number
                    </label>
                    <div style={{ position: 'relative' }}>
                      <PhoneIcon size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#86868b' }} />
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+63 912 345 6789"
                        style={{
                          width: '100%',
                          padding: '1rem 1rem 1rem 3rem',
                          fontSize: '1rem',
                          border: '1px solid #d2d2d7',
                          borderRadius: '12px',
                          backgroundColor: '#ffffff',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Continue
              </button>
            </form>
          </div>

          {/* Help Section */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: isMobile ? '1.5rem' : '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1d1d1f', marginBottom: '1rem' }}>
              Need help with your order?
            </h2>
            <p style={{ fontSize: '1rem', color: '#6e6e73', marginBottom: '1.5rem' }}>
              If you're having trouble finding your order or need assistance, we're here to help.
            </p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem' }}>
              <Link
                to="/support/contact-us"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '0.875rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#0071e3',
                  border: '1px solid #0071e3',
                  borderRadius: '12px',
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                Contact Support
              </Link>
              <Link
                to="/store/find-store"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '0.875rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#0071e3',
                  border: '1px solid #0071e3',
                  borderRadius: '12px',
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                Visit a Store
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f7', marginTop: '4rem', borderTop: '1px solid #d2d2d7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '2rem 1rem' : '3rem 1rem' }}>
          <div style={{ borderTop: '1px solid #d2d2d7', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: '#6e6e73', fontSize: '0.75rem' }}>
              © 2026 TechStore. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Use', 'Sales Policy'].map(item => (
                <a key={item} href="#" style={{ fontSize: '0.75rem', color: '#6e6e73', textDecoration: 'none' }}>
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

export default StoreOrderStatus;
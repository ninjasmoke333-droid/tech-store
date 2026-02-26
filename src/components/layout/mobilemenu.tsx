import React, {  useEffect } from 'react';
import { ChevronRight,  ChevronLeft,} from 'lucide-react';
import { Link } from 'react-router-dom';






interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSubmenu: string | null;
  setActiveSubmenu: React.Dispatch<React.SetStateAction<string | null>>;
  isMobile: boolean;
}

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSubmenu,
  setActiveSubmenu,
  isMobile,
}: MobileMenuProps) { 
  



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
      
    };

    const handleResize = () => {
      
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

  

  return (
    <div >
      {/* Navigation */}
      

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

      
    </div>
  );
};


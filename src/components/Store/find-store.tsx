import  { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X, ShoppingBag, Search, ChevronLeft, MapPin, Clock, Phone,  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import TechStoreVid from '../../assets/store-vid.mp4';
import SearchDropdown from '../Searchdropdown';

// Fix Leaflet default marker icon issue
// Fix Leaflet default marker icon issue
interface LeafletIconDefault extends L.Icon.Default {
  _getIconUrl?: string;
}

delete (L.Icon.Default.prototype as LeafletIconDefault)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});



const FindStore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  

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

  const stores = [
    {
      id: 1,
      name: 'TechStore Ayala Center Cebu',
      address: 'Cebu Business Park, Cebu City',
      city: 'Cebu City',
      hours: 'Open until 9:00 PM',
      phone: '(032) 231-5000',
      distance: '2.5 km',
      lat: 10.3181,
      lng: 123.9066
    },
    {
      id: 2,
      name: 'TechStore SM Seaside City',
      address: 'South Road Properties, Cebu City',
      city: 'Cebu City',
      hours: 'Open until 10:00 PM',
      phone: '(032) 888-8888',
      distance: '5.2 km',
      lat: 10.2778,
      lng: 123.8810
    },
    {
      id: 3,
      name: 'TechStore IT Park',
      address: 'Apas, Lahug, Cebu City',
      city: 'Cebu City',
      hours: 'Open until 8:00 PM',
      phone: '(032) 266-8888',
      distance: '3.1 km',
      lat: 10.3272,
      lng: 123.9066
    },
    {
      id: 4,
      name: 'TechStore Mandaue Parkmall',
      address: 'A.S. Fortuna St, Mandaue City',
      city: 'Mandaue City',
      hours: 'Open until 9:00 PM',
      phone: '(032) 346-7777',
      distance: '1.8 km',
      lat: 10.3157,
      lng: 123.9227
    }
  ];

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

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* Hero Section */}
      <section
  style={{
    position: 'relative',
    textAlign: 'center',
    backgroundColor: '#f5f5f7',           // fallback
    overflow: 'hidden',
  }}
>
  <div
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
    }}
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    >
      <source src={TechStoreVid} type="video/mp4" />
    </video>
  </div>

  {/* Optional subtle overlay */}
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1 }} />

  <div
    style={{
      position: 'relative',
      zIndex: 2,
      padding: isMobile ? '88px 1rem 3rem' : '88px 1rem 4rem',  // ← same as your original
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h1
      style={{
        fontSize: isMobile ? '2.5rem' : '4rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#fff',                    // changed to white for video contrast
        letterSpacing: '-0.02em',
        textShadow: '0 2px 10px rgba(0,0,0,0.7)',
      }}
    >
      Find a TechStore store.
    </h1>

    <p
      style={{
        fontSize: isMobile ? '1.25rem' : '1.5rem',
        color: '#f0f0f0',
        marginBottom: '2rem',
        maxWidth: '700px',
        textShadow: '0 1px 6px rgba(0,0,0,0.6)',
      }}
    >
      Visit a store to shop, get support, or attend events.
    </p>

    <div style={{ maxWidth: '600px', width: '100%', position: 'relative' }}>
      <input
        type="text"
        placeholder="Search by city or location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '1rem 3rem 1rem 1.5rem',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '12px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          outline: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      />
      <Search
        size={20}
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#555',
        }}
      />
    </div>
  </div>
</section>

      {/* Store Listings with INTERACTIVE MAP */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '2rem 1rem' : '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1d1d1f', marginBottom: '1.5rem' }}>
              {filteredStores.length} stores near you
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setSelectedStore(store.id)}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: selectedStore === store.id ? '#f5f5f7' : '#ffffff',
                    border: '1px solid #d2d2d7',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedStore !== store.id) {
                      e.currentTarget.style.backgroundColor = '#fafafa';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedStore !== store.id) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1d1d1f', marginBottom: '0.25rem' }}>
                        {store.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#6e6e73' }}>
                        {store.distance}
                      </p>
                    </div>
                    <ChevronRight size={20} color="#0071e3" />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <MapPin size={16} color="#6e6e73" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.875rem', color: '#6e6e73' }}>
                      {store.address}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Clock size={16} color="#6e6e73" />
                    <p style={{ fontSize: '0.875rem', color: '#6e6e73' }}>
                      {store.hours}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={16} color="#6e6e73" />
                    <p style={{ fontSize: '0.875rem', color: '#6e6e73' }}>
                      {store.phone}
                    </p>
                  </div>

                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #d2d2d7', display: 'flex', gap: '1rem' }}>
                    <button style={{ backgroundColor: '#0071e3', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '9999px', border: 'none', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>
                      Get Directions
                    </button>
                    <button style={{ backgroundColor: 'transparent', color: '#0071e3', padding: '0.5rem 1rem', border: '1px solid #0071e3', borderRadius: '9999px', fontWeight: '500', fontSize: '0.875rem', cursor: 'pointer' }}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE MAP - REPLACED THE PLACEHOLDER */}
          <div
            style={{
              position: isMobile ? 'relative' : 'sticky',
              top: isMobile ? 'auto' : '100px',
              height: isMobile ? '400px' : '600px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <MapContainer
              center={[10.3157, 123.9227]}
              zoom={12}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredStores.map((store) => (
                <Marker key={store.id} position={[store.lat, store.lng]}>
                  <Popup>
                    <div style={{ padding: '0.5rem', minWidth: '200px' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1d1d1f' }}>
                        {store.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <MapPin size={14} style={{ color: '#0071e3', marginTop: '2px', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.8125rem', color: '#6e6e73', margin: 0 }}>
                          {store.address}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Clock size={14} style={{ color: '#0071e3' }} />
                        <p style={{ fontSize: '0.8125rem', color: '#6e6e73', margin: 0 }}>
                          {store.hours}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <Phone size={14} style={{ color: '#0071e3' }} />
                        <p style={{ fontSize: '0.8125rem', color: '#6e6e73', margin: 0 }}>
                          {store.phone}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedStore(store.id)}
                        style={{
                          marginTop: '0.5rem',
                          backgroundColor: '#0071e3',
                          color: '#ffffff',
                          padding: '0.5rem 1rem',
                          borderRadius: '6px',
                          border: 'none',
                          fontSize: '0.8125rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                          width: '100%',
                        }}
                      >
                        View Store
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              textAlign: 'center',
            }}
          >
            What to expect at TechStore.
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#6e6e73',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            Get expert support and shop for the latest tech.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Genius Support',
                description: 'Get help from our team of experts.',
                icon: '🛠️'
              },
              {
                title: 'Personal Setup',
                description: 'Set up your new device with our specialists.',
                icon: '📱'
              },
              {
                title: 'Workshops',
                description: 'Learn new skills in our free sessions.',
                icon: '🎓'
              }
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    marginBottom: '0.5rem',
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#6e6e73' }}>
                  {service.description}
                </p>
              </div>
            ))}
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

export default FindStore;
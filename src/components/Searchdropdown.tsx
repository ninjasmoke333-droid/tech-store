import  { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

interface Route {
  path: string;
  name: string;
  category: string;
  description: string;
}

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, onClose,  }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Route[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // All routes with metadata
  const allRoutes: Route[] = [
    { path: '/', name: 'Home', category: 'Main', description: 'Tech Store Landing Page' },
    
    // Store
    { path: '/store/find-store', name: 'Find Store', category: 'Store', description: 'Locate our physical stores' },
    { path: '/store/order-status', name: 'Order Status', category: 'Store', description: 'Track your order' },
    { path: '/store/shop-latest', name: 'Shop Latest', category: 'Store', description: 'Browse latest products' },
    
    // Apple
    { path: '/apple/ipad', name: 'iPad', category: 'Apple', description: 'Apple iPad products' },
    { path: '/apple/iphone', name: 'iPhone', category: 'Apple', description: 'Apple iPhone products' },
    { path: '/apple/mac', name: 'Mac', category: 'Apple', description: 'Apple Mac computers' },
    
    // Asus
    { path: '/asus/rog-phone-9-pro', name: 'ROG Phone 9 Pro', category: 'Asus', description: 'Gaming phone' },
    { path: '/asus/rog-zephyrus', name: 'ROG Zephyrus', category: 'Asus', description: 'Gaming laptop' },
    { path: '/asus/zenfone-12-ultra', name: 'Zenfone 12 Ultra', category: 'Asus', description: 'Flagship phone' },
    
    // OnePlus
    { path: '/oneplus/oneplus15', name: 'OnePlus 15', category: 'OnePlus', description: 'Flagship smartphone' },
    { path: '/oneplus/oneplus-nord-5', name: 'OnePlus Nord 5', category: 'OnePlus', description: 'Mid-range phone' },
    { path: '/oneplus/oneplus-pad-3', name: 'OnePlus Pad 3', category: 'OnePlus', description: 'Premium tablet' },
    
    // Razer
    { path: '/razer/razer-basilisk-v3', name: 'Razer Basilisk V3', category: 'Razer', description: 'Gaming mouse' },
    { path: '/razer/razerblade-18', name: 'Razer Blade 18', category: 'Razer', description: 'Gaming laptop' },
    { path: '/razer/razer-phone-2', name: 'Razer Phone 2', category: 'Razer', description: 'Gaming phone' },
    
    // Samsung
    { path: '/samsung/s25ultra', name: 'Galaxy S25 Ultra', category: 'Samsung', description: 'Premium smartphone' },
    { path: '/samsung/tabs11', name: 'Galaxy Tab S11', category: 'Samsung', description: 'Premium tablet' },
    { path: '/samsung/watch8', name: 'Galaxy Watch 8', category: 'Samsung', description: 'Smartwatch' },
    
    // Support
    { path: '/support/community', name: 'Community', category: 'Support', description: 'Join our community' },
    { path: '/support/contact-us', name: 'Contact Us', category: 'Support', description: 'Get in touch' },
    { path: '/support/technical-support', name: 'Technical Support', category: 'Support', description: 'Get technical help' },
    
    // Accessories
    { path: '/accessories/headphones', name: 'Headphones', category: 'Accessories', description: 'Audio accessories' },
    { path: '/accessories/mouse-keyboards', name: 'Mouse & Keyboards', category: 'Accessories', description: 'Input devices' },
    { path: '/accessories/smartglasses', name: 'Smart Glasses', category: 'Accessories', description: 'Wearable tech' },
    
    // Vivo
    { path: '/vivo/pad-5-pro', name: 'Pad 5 Pro', category: 'Vivo', description: 'Premium tablet' },
    { path: '/vivo/watch-5', name: 'Watch 5', category: 'Vivo', description: 'Smartwatch' },
    { path: '/vivo/x300-series', name: 'X300 Series', category: 'Vivo', description: 'Flagship phones' },
    
    // Xiaomi
    { path: '/xiaomi/xiaomi-15t-pro', name: 'Xiaomi 15T Pro', category: 'Xiaomi', description: 'Performance phone' },
    { path: '/xiaomi/xiaomi-17-ultra', name: 'Xiaomi 17 Ultra', category: 'Xiaomi', description: 'Camera flagship' },
    { path: '/xiaomi/xiaomi-pad-7-ultra', name: 'Xiaomi Pad 7 Ultra', category: 'Xiaomi', description: 'Premium tablet' },
    
    // Shopping
    { path: '/shopping/shopping-cart', name: 'Shopping Cart', category: 'Shopping', description: 'View your cart' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      const query = searchQuery.toLowerCase();
      const filtered = allRoutes.filter(route => 
        route.name.toLowerCase().includes(query) ||
        route.category.toLowerCase().includes(query) ||
        route.description.toLowerCase().includes(query) ||
        route.path.toLowerCase().includes(query)
      );

      setSearchResults(filtered);
    }, 0);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleResultClick = (path: string): void => {
    navigate(path);
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleClear = (): void => {
    setSearchQuery('');
    setSearchResults([]);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
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
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'transform 0.40s cubic-bezier(0.30, 0.10, 0.10, 0.20), opacity 0.70s ease',
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          color: '#1d1d1f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.6';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <X style={{ width: '24px', height: '24px' }} />
      </button>

      {/* Search Input */}
      <div style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        <div style={{ position: 'relative' }}>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands, or categories..."
            style={{
              width: '100%',
              padding: '1rem 3rem 1rem 1rem',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              fontSize: '1.125rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              backgroundColor: '#ffffff',
              outline: 'none',
              transition: 'border-color 0.2s',
              color: '#1d1d1f',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(0, 0, 0, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          />
          {searchQuery && (
            <button
              onClick={handleClear}
              style={{
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#6e6e73',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X style={{ width: '20px', height: '20px' }} />
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {searchResults.length > 0 ? (
          <>
            {searchResults.map((result: Route, index: number) => (
              <button
                key={index}
                onClick={() => handleResultClick(result.path)}
                style={{
                  fontSize: '2rem',
                  fontWeight: '500',
                  color: '#1d1d1f',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {result.name}
              </button>
            ))}
          </>
        ) : searchQuery ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p style={{ fontSize: '1.25rem', color: '#6e6e73', margin: 0 }}>
              No results found for "<span style={{ fontWeight: '600', color: '#1d1d1f' }}>{searchQuery}</span>"
            </p>
            <p style={{ fontSize: '1rem', color: '#86868b', marginTop: '0.5rem' }}>
              Try searching for a different product or brand
            </p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <Search style={{ width: '64px', height: '64px', color: '#d2d2d7', margin: '0 auto 1rem' }} />
            <p style={{ fontSize: '1.25rem', color: '#1d1d1f', margin: 0, fontWeight: '500' }}>
              Start searching
            </p>
            <p style={{ fontSize: '1rem', color: '#86868b', marginTop: '0.5rem' }}>
              Find products, brands, and categories
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
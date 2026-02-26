import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// You'll need to replace these with your actual Galaxy Tab S11 Ultra images
import tabS11Ultra1 from '../../assets/photos/tab-s11-ultra-1.jpg';
import tabS11Ultra2 from '../../assets/photos/tab-s11-ultra-2.jpg';

// Consideration images (replace with real shots)
import DimensityChip from '../../assets/photos/dimensity-9400-plus.jpg';
import TabDisplay from '../../assets/photos/tab-s11-display.jpg';
import SPenTablet from '../../assets/photos/tab-s11-spen.jpg';
import TabBattery from '../../assets/photos/tab-s11-battery.jpg';

import { useCart } from '../../context/CartContext';



interface Product {
  id: number;
  badge?: string;
  chip: string;
  display: string;
  memory: string;
  storage: string;
  details: string[];
  price: string;
  monthlyPrice: string;
  finishes: string[];
  image?: string;
}

export default function SamsungTabS11Ultra() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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

  const products: Product[] = [
    {
      id: 1,
      badge: 'New',
      chip: 'MediaTek Dimensity 9400+',
      display: '14.6-inch Dynamic AMOLED 2X',
      memory: '12GB',
      storage: '256GB',
      details: [
        'WQXGA+ resolution (2960 x 1848), 120Hz refresh rate',
        'High brightness with anti-reflective coating',
        'IP68 water and dust resistance',
        'Included S Pen with improved design',
        '13MP + 8MP rear cameras, 12MP ultra-wide front',
        'Samsung DeX for desktop-like experience',
        'Galaxy AI features enhanced for large screen'
      ],
      price: '$1,199.00',
      monthlyPrice: '$99.92',
      finishes: ['Gray', 'Silver'],
      image: tabS11Ultra1
    },
    {
      id: 2,
      badge: 'New',
      chip: 'MediaTek Dimensity 9400+',
      display: '14.6-inch Dynamic AMOLED 2X',
      memory: '12GB',
      storage: '512GB',
      details: [
        'WQXGA+ resolution (2960 x 1848), 120Hz refresh rate',
        'High brightness with anti-reflective coating',
        'IP68 water and dust resistance',
        'Included S Pen with improved design',
        '13MP + 8MP rear cameras, 12MP ultra-wide front',
        'Samsung DeX for desktop-like experience',
        'Galaxy AI features enhanced for large screen'
      ],
      price: '$1,319.99',
      monthlyPrice: '$110.00',
      finishes: ['Gray', 'Silver'],
      image: tabS11Ultra1
    },
    {
      id: 3,
      badge: 'New',
      chip: 'MediaTek Dimensity 9400+',
      display: '14.6-inch Dynamic AMOLED 2X',
      memory: '16GB',
      storage: '1TB',
      details: [
        'WQXGA+ resolution (2960 x 1848), 120Hz refresh rate',
        'High brightness with anti-reflective coating',
        'IP68 water and dust resistance',
        'Included S Pen with improved design',
        '13MP + 8MP rear cameras, 12MP ultra-wide front',
        'Expanded Galaxy AI multimodal capabilities',
        'Ultra-thin design at 5.1mm thickness'
      ],
      price: '$1,619.99',
      monthlyPrice: '$135.00',
      finishes: ['Gray', 'Silver'],
      image: tabS11Ultra2
    }
  ];

  const considerations = [
    {
      title: 'MediaTek Dimensity 9400+',
      description: 'Powerful 3nm chipset delivering seamless multitasking, AI performance, and efficiency in a thin design.',
      features: [
        'Octa-core processing with high clock speeds',
        'Enhanced NPU for on-device Galaxy AI',
        'Smooth gaming and productivity performance',
        'Improved power management for all-day use'
      ],
      image: DimensityChip
    },
    {
      title: '14.6-inch Dynamic AMOLED 2X display',
      description: 'Massive, vibrant screen with exceptional clarity, color accuracy, and outdoor visibility.',
      features: [
        'WQXGA+ resolution at 120Hz adaptive refresh',
        'Anti-reflective coating for reduced glare',
        'HDR support and high peak brightness',
        'Super-slim bezels for immersive viewing'
      ],
      image: TabDisplay
    },
    {
      title: 'Included S Pen',
      description: 'Natural writing, sketching, and navigation experience with low latency and no charging needed.',
      features: [
        'Improved ergonomic design for comfort',
        'Air actions and precise control',
        'Seamless integration with note-taking apps',
        'Perfect for creative work and productivity'
      ],
      image: SPenTablet
    },
    {
      title: 'Long-lasting battery & pro features',
      description: 'All-day power with fast charging, plus premium cameras and connectivity for work and entertainment.',
      features: [
        '11,600mAh battery for extended usage',
        '45W fast charging support',
        'Dual rear cameras with ultra-wide lens',
        'Wi-Fi 7, Samsung DeX, and IP68 durability'
      ],
      image: TabBattery
    }
  ];

  const ProductCard = ({ product }: { product: Product }) => {
    const [selectedFinish, setSelectedFinish] = useState<string>(product.finishes[0]);
     const { addToCart } = useCart();
    const [buttonText, setButtonText] = useState('Add to Cart');

    return (
      <div style={{
        background: '#fbfbfd',
        borderRadius: '18px',
        padding: isMobile ? '24px 16px' : '32px 24px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {product.badge && (
          <span style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: '#ff9500',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600',
            zIndex: 2
          }}>
            {product.badge}
          </span>
        )}

        {product.image && (
          <img
            src={product.image}
            alt={`${product.chip} Galaxy Tab S11 Ultra`}
            style={{
              width: '100%',
              height: isMobile ? '180px' : '220px',
              objectFit: 'contain',
              borderRadius: '12px',
              background: '#f5f5f7'
            }}
          />
        )}

        <div style={{ marginBottom: '12px' }}>
          <p style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '8px' }}>Select a finish</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {product.finishes.map((finish: string) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedFinish === finish ? '2px solid #0071e3' : '2px solid #d2d2d7',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: selectedFinish === finish ? '600' : '400'
                }}
              >
                {finish}
              </button>
            ))}
          </div>
        </div>

        <h3 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '600', marginBottom: '6px' }}>
          {product.chip}
        </h3>

        <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#1d1d1f', marginBottom: '4px' }}>
          {product.display}
        </p>

        <p style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '16px' }}>
          {product.memory} RAM • {product.storage} Storage
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
          {product.details.map((detail: string, index: number) => (
            <li
              key={index}
              style={{
                fontSize: '14px',
                color: '#6e6e73',
                marginBottom: '8px',
                paddingLeft: '16px',
                position: 'relative'
              }}
            >
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              {detail}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <p style={{ fontSize: isMobile ? '26px' : '32px', fontWeight: '600', marginBottom: '4px' }}>
            {product.price}
          </p>
          <p style={{ fontSize: '14px', color: '#6e6e73' }}>
            or {product.monthlyPrice}/mo. for 12 mo.*
          </p>
        </div>

        <button
  onClick={() => {
    const priceNumber = Number(
      product.price.replace('$', '').replace(',', '')
    );

    addToCart({
      id: `ipad-${product.id}-${selectedFinish.toLowerCase().replace(/\s+/g, '-')}`,
      productId: product.id,
      name: `iPad Pro • ${product.chip}`,
      variant: selectedFinish,
      price: priceNumber,
      image: product.image || '',
      details: {
        chip: product.chip,
        display: product.display,
        memory: product.memory,
        storage: product.storage,
      },
    });

    // Optional: nice feedback
    setButtonText('Added!');
    setTimeout(() => setButtonText('Add to Cart'), 1800);
  }}
  style={{
    width: '100%',
    marginTop: '20px',
    padding: '14px 24px',
    background: buttonText === 'Added!' ? '#34c759' : '#0071e3',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '17px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }}
>
  {buttonText}
</button>

      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      flex: '1'
    }}>
      <Navbar
        isMobile={isMobile}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
        isMobile={isMobile}
      />

      <main style={{ paddingTop: '60px', flex: '1' }}>
        {/* Hero Section */}
        <div style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: isMobile ? '10px 20px' : '10px 40px 40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: '600',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Galaxy Tab S11 Ultra with MediaTek Dimensity 9400+.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Have questions about buying a Galaxy tablet?
          </p>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#0066cc',
            fontSize: '17px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Chat with a Galaxy Specialist
          </button>
        </div>

        {/* Products Grid */}
        <div style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: isMobile ? '20px' : '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Considerations Section */}
        <div style={{
          maxWidth: '980px',
          margin: '60px auto',
          padding: isMobile ? '20px' : '40px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : '40px',
            fontWeight: '600',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            What to consider when choosing your Galaxy Tab S11 Ultra.
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#6e6e73',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Customize your setup on the next step.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            {considerations.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fbfbfd',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      background: '#f5f5f7'
                    }}
                  />
                )}

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  margin: '8px 0 0 0',
                  color: '#1d1d1f'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '16px',
                  color: '#6e6e73',
                  margin: '8px 0 16px 0',
                  lineHeight: '1.4'
                }}>
                  {item.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '15px',
                        color: '#1d1d1f',
                        marginBottom: '10px',
                        paddingLeft: '24px',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#0071e3',
                        fontSize: '20px',
                        lineHeight: '1'
                      }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}
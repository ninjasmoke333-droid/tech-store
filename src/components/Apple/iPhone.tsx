// src/components/Apple/Mac.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// Import product images
import ProMax1 from '../../assets/photos/17-pro-max-1.jpg';
import ProMax2 from '../../assets/photos/17-pro-max-2.jpg';

// Import consideration images
import A19chip from '../../assets/photos/a19-pro.jpg';
import ProMaxCam from '../../assets/photos/pro-max-cam.jpg';
import ProMaxRet from '../../assets/photos/pro-max-ret.jpg';
import ProMaxBat from '../../assets/photos/pro-max-bat.jpg'

import { useCart } from '../../context/CartContext';



interface Product {
  id: number;
  badge?: string;
  chip: string;
  display: string;
  
  camera: string;
  memory: string;
  storage: string;
  details: string[];
  price: string;
  monthlyPrice: string;
  finishes: string[];
  image?: string;
 
  
}



export default function AppleiPhone() {
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
      chip: 'A19 Pro chip',
      display: '6.9-inch Super Retina XDR',
      camera: '48MP Pro Fusion camera system',
      memory: '12GB',
      storage: '256GB',
      details: [
        'Up to 8x optical-quality zoom with 48MP Telephoto',
        'All 48MP rear cameras with advanced sensor-shift stabilization',
        '18MP Center Stage front camera with autofocus',
        'Ceramic Shield 2 front (Mohs level 5)',
        'IP68 dust and water resistant',
        'Up to 39 hours video playback'
      ],
      price: '$1,199.00',
      monthlyPrice: '$49.95',
      finishes: ['Black Titanium', 'Natural Titanium', 'White Titanium', 'Desert Titanium'],
      image: ProMax1
      // image: iPhoneBlack (add if you have assets)
    },
    {
      id: 2,
      badge: 'New',
      chip: 'A19 Pro chip',
      display: '6.9-inch Super Retina XDR',
      camera: '48MP Pro Fusion camera system',
      memory: '12GB',
      storage: '512GB',
      details: [
        'Up to 8x optical-quality zoom with 48MP Telephoto',
        'All 48MP rear cameras with advanced sensor-shift stabilization',
        '18MP Center Stage front camera with autofocus',
        'Ceramic Shield 2 front (Mohs level 5)',
        'IP68 dust and water resistant',
        'Up to 39 hours video playback'
      ],
      price: '$1,399.00',
      monthlyPrice: '$58.29',
      finishes: ['Black Titanium', 'Natural Titanium', 'White Titanium', 'Desert Titanium'],
      image: ProMax1
    },
    {
      id: 3,
      badge: 'New',
      chip: 'A19 Pro chip',
      display: '6.9-inch Super Retina XDR',
      camera: '48MP Pro Fusion camera system',
      memory: '12GB',
      storage: '1TB',
      details: [
        'Up to 8x optical-quality zoom with 48MP Telephoto',
        'All 48MP rear cameras with advanced sensor-shift stabilization',
        '18MP Center Stage front camera with autofocus',
        'Ceramic Shield 2 front (Mohs level 5)',
        'IP68 dust and water resistant',
        'Up to 39 hours video playback'
      ],
      price: '$1,599.00',
      monthlyPrice: '$66.62',
      finishes: ['Black Titanium', 'Natural Titanium', 'White Titanium', 'Desert Titanium'],
      image: ProMax2
    },
    {
      id: 4,
      chip: 'A19 Pro chip',
      display: '6.9-inch Super Retina XDR',
      camera: '48MP Pro Fusion camera system',
      memory: '12GB',
      storage: '2TB',
      details: [
        'Up to 8x optical-quality zoom with 48MP Telephoto',
        'All 48MP rear cameras with advanced sensor-shift stabilization',
        '18MP Center Stage front camera with autofocus',
        'Ceramic Shield 2 front (Mohs level 5)',
        'IP68 dust and water resistant',
        'Best-ever iPhone battery life (up to 4 hours more than previous generation)'
      ],
      price: '$1,999.00',
      monthlyPrice: '$83.29',
      finishes: ['Black Titanium', 'Natural Titanium', 'White Titanium', 'Desert Titanium'],
      image: ProMax2
    }
  ];

  const considerations = [
    {
      title: 'A19 Pro chip',
      description: 'The most powerful chip ever in an iPhone, with vapor chamber cooling for sustained performance and massive gains in Apple Intelligence tasks.',
      features: [
        '6-core CPU and enhanced GPU with Neural Accelerators',
        '16-core Neural Engine for faster on-device AI',
        'Improved thermal design for longer high-performance sessions',
        'Supports advanced Apple Intelligence features',
      ],
      image: A19chip
      // image: ... add if you have chip photos
    },
    {
      title: 'Pro camera system',
      description: 'The most advanced camera system ever on iPhone — all 48MP sensors with the longest zoom range and pro-level video capabilities.',
      features: [
        '48MP Fusion Main, Ultra Wide, and Telephoto cameras',
        'Up to 8x optical-quality zoom (longest ever on iPhone)',
        '18MP Center Stage front camera with autofocus',
        'ProRes video, 4K 120fps Dolby Vision, and more'
      ],
      image: ProMaxCam
    },
    {
      title: 'Super Retina XDR display',
      description: 'Our brightest, most advanced display yet — with better anti-reflection, higher peak brightness, and ProMotion up to 120Hz.',
      features: [
        '6.9-inch all-screen OLED',
        'Up to 3000 nits peak brightness (outdoor)',
        'Always-On display and Dynamic Island',
        'Ceramic Shield 2 protection'
      ],
      image: ProMaxRet
    },
    {
      title: 'All-time high battery life',
      description: 'Redesigned internals deliver the best battery life ever on an iPhone — hours more than previous generations.',
      features: [
        'Up to 39 hours video playback',
        'Up to 35 hours streamed video',
        'Faster charging with optional high-wattage adapters',
        'Optimized power efficiency from A19 Pro'
      ],
      image: ProMaxBat
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
            alt={`${product.chip} MacBook Pro`}
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

       
        <p style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '16px' }}>
          {product.memory} Unified Memory • {product.storage} SSD Storage
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
            Choose your new iPhone 17 Pro Max.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Have questions about buying an iPhone?
          </p>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#0066cc',
            fontSize: '17px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Chat with an iPhone Specialist
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
            What to consider when choosing your iPhone 17 Pro Max.
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
                {/* Placeholder for chip/camera images */}
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

        {/* Add more sections like Education banner, Compare, AppleCare if desired */}
      </main>



      <Footer isMobile={isMobile} />
    </div>
  );
}
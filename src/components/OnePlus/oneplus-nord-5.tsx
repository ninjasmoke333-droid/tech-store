import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// You'll need to replace these with your actual OnePlus Nord 5 images
import nord5_1 from '../../assets/photos/nord5-1.jpg';
import nord5_2 from '../../assets/photos/nord5-2.jpg';

// Consideration images (replace with real shots)
import SnapdragonChip from '../../assets/photos/snapdragon-8s-gen3.jpg';
import NordDisplay from '../../assets/photos/nord5-display.jpg';
import CameraShot from '../../assets/photos/nord5-camera.jpg';
import NordBattery from '../../assets/photos/nord5-battery.jpg';

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

export default function OnePlusOnePlusNord5() {
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
      chip: 'Snapdragon 8s Gen 3',
      display: '6.83-inch Swift AMOLED',
      memory: '8GB',
      storage: '256GB',
      details: [
        '1.5K resolution (1272x2800), 144Hz refresh rate',
        'Up to 1800 nits peak brightness, Aqua Touch 2.0',
        '50MP main + 8MP ultra-wide rear, 50MP front camera',
        'OnePlus AI features (AI Perfect Shot, AI Unblur)',
        'OxygenOS 15 based on Android 15',
        'IP65 dust/water resistance',
        'Ultra-fast 80W SUPERVOOC charging'
      ],
      price: '$449.00',
      monthlyPrice: '$37.42',
      finishes: ['Marble Sands', 'Dry Ice', 'Phantom Grey'],
      image: nord5_1
    },
    {
      id: 2,
      badge: 'New',
      chip: 'Snapdragon 8s Gen 3',
      display: '6.83-inch Swift AMOLED',
      memory: '12GB',
      storage: '256GB',
      details: [
        '1.5K resolution (1272x2800), 144Hz refresh rate',
        'Up to 1800 nits peak brightness, Aqua Touch 2.0',
        '50MP main + 8MP ultra-wide rear, 50MP front camera',
        'OnePlus AI features (AI Perfect Shot, AI Unblur)',
        'OxygenOS 15 based on Android 15',
        'IP65 dust/water resistance',
        'Ultra-fast 80W SUPERVOOC charging'
      ],
      price: '$499.00',
      monthlyPrice: '$41.58',
      finishes: ['Marble Sands', 'Dry Ice', 'Phantom Grey'],
      image: nord5_1
    },
    {
      id: 3,
      badge: 'New',
      chip: 'Snapdragon 8s Gen 3',
      display: '6.83-inch Swift AMOLED',
      memory: '12GB',
      storage: '512GB',
      details: [
        '1.5K resolution (1272x2800), 144Hz refresh rate',
        'Up to 1800 nits peak brightness, Aqua Touch 2.0',
        '50MP main + 8MP ultra-wide rear, 50MP front camera',
        'OnePlus AI features (AI Perfect Shot, AI Unblur)',
        'OxygenOS 15 based on Android 15',
        'Flagship-level gaming with 144 FPS stability',
        'Beast-mode 6800mAh battery'
      ],
      price: '$549.00',
      monthlyPrice: '$45.75',
      finishes: ['Marble Sands', 'Dry Ice', 'Phantom Grey'],
      image: nord5_2
    }
  ];

  const considerations = [
    {
      title: 'Snapdragon 8s Gen 3',
      description: 'Flagship-tier performance in the mid-range, delivering smooth gaming, multitasking, and AI processing.',
      features: [
        'Powerful octa-core CPU and Adreno 735 GPU',
        'LPDDR5X RAM for ultra-fast response',
        'Large VC cooling system for sustained performance',
        'Optimized for OnePlus AI features'
      ],
      image: SnapdragonChip
    },
    {
      title: '6.83-inch Swift AMOLED Display',
      description: 'Smooth, vibrant screen with high brightness and responsive touch even in wet conditions.',
      features: [
        '1.5K resolution with 144Hz adaptive refresh',
        'Up to 1800 nits peak brightness, HDR10+',
        'Aqua Touch 2.0 for wet/oily finger accuracy',
        'Ultra-thin bezels for immersive viewing'
      ],
      image: NordDisplay
    },
    {
      title: 'Flagship Dual 50MP Cameras',
      description: 'Legendary low-light performance front and back, powered by OnePlus AI for perfect shots.',
      features: [
        '50MP main sensor with OIS and natural color tuning',
        '50MP front camera with hardware autofocus',
        'AI Perfect Shot, AI Unblur, night mode enhancements',
        '4K video with advanced stabilization'
      ],
      image: CameraShot
    },
    {
      title: 'Beast-Mode 6800mAh Battery',
      description: 'All-day power with ultra-fast charging and bypass mode for gaming without overheating.',
      features: [
        'Up to 19.8 hours YouTube playback',
        '80W SUPERVOOC wired charging',
        'Bypass charging for cooler gaming sessions',
        '5W reverse wired charging support'
      ],
      image: NordBattery
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
            alt={`${product.chip} OnePlus Nord 5`}
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
            OnePlus Nord 5 with Snapdragon 8s Gen 3 and OnePlus AI.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Have questions about buying a OnePlus phone?
          </p>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#0066cc',
            fontSize: '17px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Chat with a OnePlus Specialist
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
            What to consider when choosing your OnePlus Nord 5.
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
// src/components/Razer/RazerPhone2.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// Replace these with your actual Razer Phone 2 image files (front/back views, etc.)
import phoneBlackMirror from '../../assets/photos/razer-phone-2-mirror-black.jpg';
import phoneBlackSatin from '../../assets/photos/razer-phone-2-satin-black.jpg';

// Optional consideration images (chip, display, camera, battery — replace with real ones)
import snapdragon845 from '../../assets/photos/snapdragon-845.jpg';
import ultraMotionDisplay from '../../assets/photos/razer-120hz-display.jpg';
import dualCamera from '../../assets/photos/razer-phone-2-camera.jpg';
import chromaLogo from '../../assets/photos/razer-chroma-logo.jpg';

import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  badge?: string;
  name: string;
  processor: string;
  display: string;
  camera: string;
  battery: string;
  details: string[];
  price: string;
  monthlyPrice: string;
  colors: string[];
  image?: string;
}

export default function RazerRazerPhone2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // safe initial value
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      const nowMobile = window.innerWidth < 832;
      setIsMobile(nowMobile);
      if (!nowMobile) {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    handleResize(); // run once after mount

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
      badge: 'Gaming Legend',
      name: 'Razer Phone 2',
      processor: 'Snapdragon 845',
      display: '5.72" 120Hz IGZO UltraMotion',
      camera: 'Dual 12MP (f/1.75 + f/2.6)',
      battery: '4000mAh with Wireless Charging',
      details: [
        'UltraMotion™ 120Hz refresh rate for buttery-smooth gaming',
        'QHD+ resolution (1440 x 2560) with 100% DCI-P3 wide color gamut',
        'Vapor chamber cooling for sustained performance',
        'Dolby Atmos stereo speakers tuned by THX',
        'Razer Chroma RGB customizable logo lighting',
        '8GB RAM + 64GB storage (expandable via microSD up to 1TB)',
        'IP67 dust and water resistant',
        'Quick Charge 4+ & 15W wireless charging support'
      ],
      price: '$799.00',
      monthlyPrice: '$66.58',
      colors: ['Mirror Black', 'Satin Black (Limited)'],
      image: phoneBlackMirror
    },
    {
      id: 2,
      badge: 'Limited Edition',
      name: 'Razer Phone 2 Satin',
      processor: 'Snapdragon 845',
      display: '5.72" 120Hz IGZO UltraMotion',
      camera: 'Dual 12MP (f/1.75 + f/2.6)',
      battery: '4000mAh with Wireless Charging',
      details: [
        'Matte Satin Black finish (exclusive limited edition)',
        'UltraMotion™ 120Hz refresh rate for buttery-smooth gaming',
        'QHD+ resolution with 100% DCI-P3 wide color gamut',
        'Vapor chamber cooling + THX-certified audio',
        'Razer Chroma RGB logo with deeper customization',
        '8GB RAM + 64GB storage (expandable)',
        'IP67 rating & fast charging support'
      ],
      price: '$849.00',
      monthlyPrice: '$70.75',
      colors: ['Mirror Black', 'Satin Black (Limited)'],
      image: phoneBlackSatin
    }
  ];

  const considerations = [
    {
      title: 'Snapdragon 845 + Vapor Chamber',
      description: 'Flagship power with advanced cooling for lag-free gaming sessions.',
      features: [
        'Octa-core 2.8GHz processor with Adreno 630 GPU',
        'Vapor chamber thermal management',
        '8GB LPDDR4X RAM for multitasking',
        'Optimized for demanding mobile games'
      ],
      image: snapdragon845
    },
    {
      title: '120Hz UltraMotion Display',
      description: 'The smoothest mobile screen ever — perfect for fast-paced action.',
      features: [
        '5.72-inch IGZO LCD @ 1440x2560',
        'Variable 120Hz refresh rate (down to 40Hz)',
        '100% DCI-P3 color gamut & HDR10',
        'Corning Gorilla Glass 5 protection'
      ],
      image: ultraMotionDisplay
    },
    {
      title: 'Dual Camera System',
      description: 'Pro-grade dual rear cameras with advanced portrait and low-light capabilities.',
      features: [
        '12MP f/1.75 wide + 12MP f/2.6 telephoto',
        'Phase detection autofocus & OIS',
        '4K video recording @ 60fps',
        'Beauty & Portrait modes'
      ],
      image: dualCamera
    },
    {
      title: 'Chroma RGB & THX Audio',
      description: 'Iconic lighting and cinematic sound for total immersion.',
      features: [
        'Customizable Chroma RGB logo (16.8M colors)',
        'Dolby Atmos stereo speakers tuned by THX',
        'Reactive lighting effects',
        '4000mAh battery with fast & wireless charging'
      ],
      image: chromaLogo
    }
  ];

  const ProductCard = ({ product }: { product: Product }) => {
    const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
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
            background: '#00ff00', // Razer green
            color: 'black',
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
            alt={product.name}
            style={{
              width: '100%',
              height: isMobile ? '220px' : '260px',
              objectFit: 'contain',
              borderRadius: '12px',
              background: '#0a0a0a'
            }}
          />
        )}

        <div style={{ marginBottom: '12px' }}>
          <p style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '8px' }}>Select color</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {product.colors.map((color: string) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedColor === color ? '2px solid #00ff00' : '2px solid #d2d2d7',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: selectedColor === color ? '600' : '400'
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <h3 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '600', marginBottom: '6px' }}>
          {product.name}
        </h3>

        <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#1d1d1f', marginBottom: '4px' }}>
          {product.processor} • {product.display}
        </p>

        <p style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '16px' }}>
          {product.camera} • {product.battery}
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
      id: `ipad-${product.id}-${selectedColor.toLowerCase().replace(/\s+/g, '-')}`,
      productId: product.id,
      name: `iPad Pro • ${product.name}`,
      variant: selectedColor,
      price: priceNumber,
      image: product.image || '',
      details: {
       
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
      backgroundColor: '#0a0a0a', // dark gaming theme
      color: '#ffffff',
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
          padding: isMobile ? '10px 20px' : '40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: '600',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Razer Phone 2 – The ultimate gaming smartphone.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#cccccc',
            marginBottom: '24px'
          }}>
            120Hz display. Chroma lighting. Pure gaming performance.
          </p>
          <button style={{
            background: '#00ff00',
            border: 'none',
            color: 'black',
            padding: '12px 32px',
            borderRadius: '12px',
            fontSize: '17px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Shop Now
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
            textAlign: 'center',
            color: '#ffffff'
          }}>
            Why choose the Razer Phone 2?
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#cccccc',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Built for mobile gaming. Engineered for victory.
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
                  background: '#111111',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: '0 8px 32px rgba(0,255,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  border: '1px solid #00ff0044'
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      background: '#000000'
                    }}
                  />
                )}

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  margin: '8px 0 0 0',
                  color: '#00ff00'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '16px',
                  color: '#cccccc',
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
                        color: '#e0e0e0',
                        marginBottom: '10px',
                        paddingLeft: '24px',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#00ff00',
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
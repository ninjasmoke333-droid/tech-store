// src/components/Razer/RazerBlade18.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// Replace these with your actual Razer Blade 18 image files
import blade18Black from '../../assets/photos/razer-blade-18-black.jpg';
import blade18Mercury from '../../assets/photos/razer-blade-18-mercury.jpg';

// Optional consideration images (replace with real shots if available)
import miniLedDisplay from '../../assets/photos/razer-blade-18-miniled.jpg';
import vaporChamber from '../../assets/photos/razer-vapor-chamber.jpg';
import chromaPerKey from '../../assets/photos/razer-chroma-per-key.jpg';
import rtx5090 from '../../assets/photos/nvidia-rtx-5090-laptop.jpg';

import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  badge?: string;
  name: string;
  processor: string;
  gpu: string;
  display: string;
  ram: string;
  storage: string;
  details: string[];
  price: string;
  monthlyPrice: string;
  colors: string[];
  image?: string;
}

export default function RazerRazerblade1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

    handleResize(); // initial check

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
      name: 'Razer Blade 18',
      processor: 'Intel Core i9-14900HX',
      gpu: 'NVIDIA GeForce RTX 5090 Laptop GPU',
      display: '18" Dual UHD+ 120Hz / FHD+ 300Hz Mini-LED',
      ram: '32GB DDR5-5600',
      storage: '2TB SSD (Gen4)',
      details: [
        'World’s first 18" dual-mode Mini-LED display (UHD+ 120Hz or FHD+ 300Hz)',
        'Vapor chamber cooling with dual fans & liquid metal thermal interface',
        'Per-key RGB Chroma lighting with Razer Synapse',
        'Thunderbolt 5, HDMI 2.1, SD Express 7.0 card reader',
        'CNC aluminum unibody chassis (under 1" thin)',
        'Dolby Vision & Dolby Atmos support',
        'Up to 330W total system power'
      ],
      price: '$3,999.99',
      monthlyPrice: '$333.33',
      colors: ['Black', 'Mercury'],
      image: blade18Black
    },
    {
      id: 2,
      badge: 'High-End',
      name: 'Razer Blade 18 - Max Spec',
      processor: 'Intel Core i9-14900HX',
      gpu: 'NVIDIA GeForce RTX 5090 Laptop GPU',
      display: '18" Dual UHD+ 120Hz / FHD+ 300Hz Mini-LED',
      ram: '64GB DDR5-5600',
      storage: '4TB SSD (Gen4)',
      details: [
        'Top-tier configuration for 8K editing & AAA gaming',
        'Dual-mode Mini-LED display with G-SYNC & VRR',
        'Advanced vapor chamber + 3D vapor chamber heat pipes',
        'Full per-key RGB Chroma with dynamic effects',
        'Thunderbolt 5 (120Gbps), 2.5G Ethernet, Wi-Fi 7',
        'Premium CNC aluminum unibody (premium finish options)',
        '330W power delivery for maximum performance'
      ],
      price: '$5,199.99',
      monthlyPrice: '$433.33',
      colors: ['Black', 'Mercury'],
      image: blade18Mercury
    }
  ];

  const considerations = [
    {
      title: 'Dual-Mode Mini-LED Display',
      description: 'The world’s first 18-inch laptop display with switchable modes — ultra-sharp 4K or ultra-smooth 300Hz.',
      features: [
        'UHD+ 120Hz or FHD+ 300Hz (user selectable)',
        'Mini-LED backlighting with 1000+ dimming zones',
        '100% DCI-P3, Dolby Vision, G-SYNC',
        'Anti-reflective coating & 1000 nits peak brightness'
      ],
      image: miniLedDisplay
    },
    {
      title: 'Vapor Chamber Cooling',
      description: 'Massive vapor chamber and liquid metal for extreme sustained performance without throttling.',
      features: [
        'Large shared vapor chamber + 3D heat pipes',
        'Dual high-CFM fans with variable speed',
        'Liquid metal on CPU & GPU',
        'Supports full 330W system power'
      ],
      image: vaporChamber
    },
    {
      title: 'Per-Key Chroma RGB',
      description: 'Fully customizable keyboard lighting with millions of colors and dynamic effects.',
      features: [
        'Per-key RGB with Razer Chroma effects',
        'Reactive & immersive game integration',
        'Synapse 4 support with cloud profiles',
        'Macro recording & secondary layers'
      ],
      image: chromaPerKey
    },
    {
      title: 'NVIDIA RTX 5090 Laptop GPU',
      description: 'The most powerful mobile GPU ever — ray tracing, DLSS 4, and AI acceleration for next-gen gaming.',
      features: [
        'Up to 175W TGP with Dynamic Boost',
        '8th Gen Tensor Cores & 5th Gen RT Cores',
        'Advanced Optimus & MUX Switch',
        'Supports 8K output & VR'
      ],
      image: rtx5090
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
            background: '#00ff00',
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
          {product.processor} • {product.gpu}
        </p>

        <p style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '16px' }}>
          {product.display} • {product.ram} • {product.storage}
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
      backgroundColor: '#0a0a0a',
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
            Razer Blade 18 – The most powerful 18-inch gaming laptop ever.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#cccccc',
            marginBottom: '24px'
          }}>
            Dual-mode Mini-LED. RTX 5090. Zero compromises.
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
            Why choose the Razer Blade 18?
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#cccccc',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Desktop power in a portable form factor.
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
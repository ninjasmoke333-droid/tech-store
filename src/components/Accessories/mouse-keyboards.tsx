// src/components/MouseKeyboard/MouseKeyboard.tsx  (or wherever you want to place it)
import  { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// Replace these paths with your actual product images





// Optional consideration images (replace with real ones if you have them)





import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  badge?: string;
  name: string;
  type: string;           // Gaming Mouse / Productivity Mouse / Gaming Keyboard / Mech Keyboard
  sensor: string;
  switches: string;
  
  details: string[];
  price: string;
  monthlyPrice: string;
  colors: string[];
  image?: string;
}

export default function AccessoriesMouseKeyboards() {
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
      badge: 'Esports Pro',
      name: 'Razer Viper V3 Pro',
      type: 'Ultra-Light Gaming Mouse',
      sensor: 'Focus Pro 35K Optical',
      switches: 'Gen-3 Optical',
      details: [
        '54g ultra-lightweight design',
        '35,000 DPI max resolution',
        '8000 Hz polling rate (HyperPolling)',
        'Razer Hyperspeed Wireless + Bluetooth',
        'Asymmetric shape for claw/fingertip grip',
        'Zero debounce delay optical switches',
        '100% PTFE feet & Speedflex cable'
      ],
      price: '$159.99',
      monthlyPrice: '$13.33',
      colors: ['Black', 'White'],
      image: '/assets/photos/razer-viper-v3-pro.jpg'
    },
    {
      id: 2,
      badge: 'Premium RGB',
      name: 'Corsair K100 RGB Optical',
      type: 'Full-Size Mechanical Keyboard',
      sensor: 'N/A',
      switches: 'CORSAIR OPX Optical-Mechanical',
      details: [
        'Ultra-fast 1mm actuation optical switches',
        'Per-key RGB with 44-zone light edge',
        'Dedicated macro keys & media controls',
        'Aluminum frame with magnetic wrist rest',
        '1000 Hz polling rate',
        'iCUE software for full customization',
        'USB passthrough & 8,000 Hz polling option'
      ],
      price: '$229.99',
      monthlyPrice: '$19.17',
      colors: ['Black', 'White'],
      image: '/assets/photos/corsair-k100-rgb.jpg'
    },
    {
      id: 3,
      badge: 'Productivity King',
      name: 'Logitech MX Master 4S',
      type: 'Wireless Productivity Mouse',
      sensor: 'Logitech Darkfield 8K',
      switches: 'Quiet Clicks',
      details: [
        '8,000 DPI precision tracking on any surface',
        'MagSpeed electromagnetic scroll wheel',
        'Flow cross-computer control',
        'Up to 70 days battery life',
        'Quiet clicks & customizable buttons',
        'USB-C fast charging',
        'Bluetooth & Logi Bolt USB receiver'
      ],
      price: '$119.99',
      monthlyPrice: '$10.00',
      colors: ['Graphite', 'Pale Gray'],
      image: '/assets/photos/logitech-mx-master-4s.jpg'
    },
    {
      id: 4,
      badge: 'Custom King',
      name: 'Keychron Q1 Pro',
      type: '75% Hot-Swappable Mechanical Keyboard',
      sensor: 'N/A',
      switches: 'Gateron G Pro (customizable)',
      details: [
        'Full aluminum CNC case & double gasket mount',
        'Hot-swappable PCB (3/5-pin)',
        'RGB backlighting with QMK/VIA support',
        'Wireless 2.4GHz + Bluetooth 5.1',
        '1000 Hz polling rate',
        'Acoustic foam & silicone dampening',
        'Mac/Windows layout options'
      ],
      price: '$199.00',
      monthlyPrice: '$16.58',
      colors: ['Carbon Black', 'Shell White', 'Navy Blue'],
      image: '/assets/photos/keychron-q1-pro.jpg'
    }
  ];

  const considerations = [
    {
      title: 'High-Precision Sensors',
      description: 'From 35K DPI esports tracking to glass-surface accuracy — choose based on your play style or work needs.',
      features: [
        'Ultra-high DPI for fast movements',
        'Zero lift-off distance',
        'Surface calibration & smart tracking',
        'Low latency wireless'
      ],
      image: '/assets/photos/high-dpi-gaming-sensor.jpg'
    },
    {
      title: 'Optical & Mechanical Switches',
      description: 'Ultra-fast actuation with millions of clicks — optical for speed, mechanical for feel.',
      features: [
        'Gen-3 optical (zero debounce)',
        'Hot-swappable for easy customization',
        'Linear, tactile, or clicky options',
        '90–100 million click lifespan'
      ],
      image: '/assets/photos/optical-mechanical-switches.jpg'
    },
    {
      title: 'Ergonomics & Comfort',
      description: 'Designed for long sessions — lightweight, contoured shapes, and premium materials.',
      features: [
        'Ambidextrous or right-hand shapes',
        'Thumb rest & soft-touch grip',
        'Memory foam wrist rests',
        'Adjustable weight & balance'
      ],
      image: '/assets/photos/ergonomic-productivity-mouse.jpg'
    },
    {
      title: 'Customization & RGB',
      description: 'Full control with software, macros, and stunning per-key lighting.',
      features: [
        'Per-key RGB with reactive effects',
        'Onboard memory & cloud profiles',
        'Macro recording & remapping',
        'Synapse / iCUE / VIA support'
      ],
      image: '/assets/photos/customizable-mechanical-keyboard.jpg'
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
          {product.type} • {product.sensor || product.switches}
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
            Mice & Keyboards – Precision. Speed. Control.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#cccccc',
            marginBottom: '24px'
          }}>
            From esports weapons to productivity powerhouses.
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
            Explore Collection
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
            What to consider when choosing mouse & keyboard
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#cccccc',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Match your setup to your style of play or work.
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
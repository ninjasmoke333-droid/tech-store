// src/components/Apple/iPadPro.tsx
import  { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// You'll need to replace these with your actual iPad Pro images
import iPadPro1 from '../../assets/photos/ipad-pro-1.jpg';
import iPadPro2 from '../../assets/photos/ipad-pro-2.jpg';

// Consideration images
import M5chip from '../../assets/photos/ipad-m5.jpg';
import iPadDisplay from '../../assets/photos/m5-display.jpg';
import iPadPencil from '../../assets/photos/ipad-pencil.jpg';
import iPadBattery from '../../assets/photos/ipad-batt.jpg';

import { useCart } from '../../context/CartContext';     // ← adjust path if needed

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

export default function AppleiPadPro() {
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
      chip: 'M5 chip with 9-core CPU',
      display: '13-inch Ultra Retina XDR',
      memory: '12GB',
      storage: '256GB',
      details: [
        'Ultra Retina XDR Tandem OLED display',
        '1000 nits full-screen brightness, 1600 nits HDR',
        'ProMotion technology up to 120Hz',
        'Face ID, 12MP front and rear cameras',
        'Wi-Fi 7 and Bluetooth 6',
        'Up to 10 hours battery life'
      ],
      price: '$1,299.00',
      monthlyPrice: '$108.25',
      finishes: ['Silver', 'Space Black'],
      image: iPadPro1
    },
    {
      id: 2,
      badge: 'New',
      chip: 'M5 chip with 9-core CPU',
      display: '13-inch Ultra Retina XDR',
      memory: '12GB',
      storage: '512GB',
      details: [
        'Ultra Retina XDR Tandem OLED display',
        '1000 nits full-screen brightness, 1600 nits HDR',
        'ProMotion technology up to 120Hz',
        'Face ID, 12MP front and rear cameras',
        'Wi-Fi 7 and Bluetooth 6',
        'Up to 10 hours battery life'
      ],
      price: '$1,499.00',
      monthlyPrice: '$124.92',
      finishes: ['Silver', 'Space Black'],
      image: iPadPro1
    },
    {
      id: 3,
      badge: 'New',
      chip: 'M5 chip with 10-core CPU',
      display: '13-inch Ultra Retina XDR',
      memory: '16GB',
      storage: '1TB',
      details: [
        'Ultra Retina XDR Tandem OLED display',
        '1000 nits full-screen brightness, 1600 nits HDR',
        'ProMotion technology up to 120Hz',
        'Optional nano-texture glass available',
        'Face ID, 12MP front and rear cameras',
        'Wi-Fi 7 and Bluetooth 6'
      ],
      price: '$1,899.00',
      monthlyPrice: '$158.25',
      finishes: ['Silver', 'Space Black'],
      image: iPadPro2
    },
    {
      id: 4,
      chip: 'M5 chip with 10-core CPU',
      display: '13-inch Ultra Retina XDR',
      memory: '16GB',
      storage: '2TB',
      details: [
        'Ultra Retina XDR Tandem OLED display',
        '1000 nits full-screen brightness, 1600 nits HDR',
        'ProMotion technology up to 120Hz',
        'Optional nano-texture glass available',
        'Face ID, 12MP front and rear cameras',
        'Best-ever iPad Pro performance'
      ],
      price: '$2,299.00',
      monthlyPrice: '$191.58',
      finishes: ['Silver', 'Space Black'],
      image: iPadPro2
    }
  ];

  const considerations = [
    {
      title: 'M5 chip',
      description: 'The most powerful chip ever in an iPad, with Neural Accelerators on every core for up to 3.5x faster AI performance.',
      features: [
        '9-core or 10-core CPU with enhanced efficiency',
        '10-core GPU with hardware-accelerated ray tracing',
        '16-core Neural Engine for advanced on-device AI',
        '153GB/s unified memory bandwidth for seamless multitasking'
      ],
      image: M5chip
    },
    {
      title: 'Ultra Retina XDR display',
     description: "The world's most advanced display featuring Tandem OLED technology for extreme brightness and precise contrast.",
      features: [
        '13-inch or 11-inch all-screen OLED',
        '1000 nits full-screen, 1600 nits peak HDR brightness',
        '2,000,000:1 contrast ratio for deeper blacks',
        'ProMotion up to 120Hz and nano-texture glass option'
      ],
      image: iPadDisplay
    },
    {
      title: 'Apple Pencil Pro support',
      description: 'Transform your creative workflow with precision tools and intuitive controls for drawing, note-taking, and design.',
      features: [
        'Squeeze and barrel roll gestures for precise control',
        'Haptic feedback for immersive creativity',
        'Hover for preview before you mark',
        'Works seamlessly with iPadOS 26 features'
      ],
      image: iPadPencil
    },
    {
      title: 'All-day battery and connectivity',
      description: 'Powerful performance meets incredible efficiency with all-day battery life and next-gen wireless technology.',
      features: [
        'Up to 10 hours of web browsing or video',
        'Fast charging: 50% in about 30 minutes',
        'Wi-Fi 7 and Bluetooth 6 for faster connections',
        'Thread support for smart home integration'
      ],
      image: iPadBattery
    }
  ];

  const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();
const [buttonText, setButtonText] = useState('Add to Cart');
    const [selectedFinish, setSelectedFinish] = useState<string>(product.finishes[0]);

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
            alt={`${product.chip} iPad Pro`}
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
          {product.memory} Unified Memory • {product.storage} Storage
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
            iPad Pro with the new M5 chip.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Have questions about buying an iPad?
          </p>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#0066cc',
            fontSize: '17px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Chat with an iPad Specialist
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
            What to consider when choosing your iPad Pro.
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
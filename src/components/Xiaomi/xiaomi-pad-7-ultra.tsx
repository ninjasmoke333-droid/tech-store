import  { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// You'll need to replace these with your actual Xiaomi Pad 7 Ultra images
import pad7ultra_1 from '../../assets/photos/xiaomi-pad7ultra-1.jpg';
import pad7ultra_2 from '../../assets/photos/xiaomi-pad7ultra-2.jpg';

// Consideration images (replace with real shots)
import SnapdragonElite from '../../assets/photos/snapdragon-8-elite.jpg';
import Pad7Display from '../../assets/photos/pad7ultra-display.jpg';
import XiaomiStylus from '../../assets/photos/pad7ultra-stylus.jpg';
import Pad7Battery from '../../assets/photos/pad7ultra-battery.jpg';

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

export default function XiaomiXiaomiPad7Ultra() {
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
      chip: 'Snapdragon 8 Elite',
      display: '13.2-inch LTPO OLED 3.2K',
      memory: '12GB',
      storage: '256GB',
      details: [
        '3200 × 2136 resolution, 144Hz adaptive refresh',
        'Up to 1200 nits peak brightness, Dolby Vision & HDR10+',
        '8-speaker Dolby Atmos quad woofer + tweeter system',
        'Ultra-slim 5.8mm aluminum unibody',
        'HyperOS 2.0 based on Android 15/16',
        '120W HyperCharge wired + 50W wireless',
        'Xiaomi Smart Pen 2 support'
      ],
      price: '$899.00',
      monthlyPrice: '$74.92',
      finishes: ['Black', 'White', 'Green'],
      image: pad7ultra_1
    },
    {
      id: 2,
      badge: 'New',
      chip: 'Snapdragon 8 Elite',
      display: '13.2-inch LTPO OLED 3.2K',
      memory: '16GB',
      storage: '512GB',
      details: [
        '3200 × 2136 resolution, 144Hz adaptive refresh',
        'Up to 1200 nits peak brightness, Dolby Vision & HDR10+',
        '8-speaker Dolby Atmos quad woofer + tweeter system',
        'Ultra-slim 5.8mm aluminum unibody',
        'HyperOS 2.0 based on Android 15/16',
        '120W HyperCharge wired + 50W wireless',
        'Enhanced AI multitasking & productivity'
      ],
      price: '$999.00',
      monthlyPrice: '$83.25',
      finishes: ['Black', 'White', 'Green'],
      image: pad7ultra_1
    },
    {
      id: 3,
      badge: 'New',
      chip: 'Snapdragon 8 Elite',
      display: '13.2-inch LTPO OLED 3.2K',
      memory: '16GB',
      storage: '1TB',
      details: [
        '3200 × 2136 resolution, 144Hz adaptive refresh',
        'Up to 1200 nits peak brightness, Dolby Vision & HDR10+',
        '8-speaker Dolby Atmos quad woofer + tweeter system',
        'Flagship VC cooling for sustained performance',
        'HyperOS 2.0 based on Android 15/16',
        '12000mAh battery for extended usage',
        'Pro-level stylus & desktop multitasking'
      ],
      price: '$1,099.00',
      monthlyPrice: '$91.58',
      finishes: ['Black', 'White', 'Green'],
      image: pad7ultra_2
    }
  ];

  const considerations = [
    {
      title: 'Snapdragon 8 Elite',
      description: 'Flagship 3nm chipset delivering unmatched speed, graphics, and AI performance in a tablet.',
      features: [
        'Oryon CPU cores with highest clock speeds',
        'Adreno GPU for console-level gaming',
        'Advanced NPU for on-device AI features',
        'Large vapor chamber cooling for sustained use'
      ],
      image: SnapdragonElite
    },
    {
      title: '13.2-inch LTPO OLED 3.2K Display',
      description: 'Ultra-sharp, smooth, and vibrant screen perfect for media, gaming, and productivity.',
      features: [
        '3200 × 2136 resolution with 144Hz LTPO',
        'Peak brightness up to 1200 nits',
        'Dolby Vision & HDR10+ support',
        'Ultra-thin bezels with 3:2 productivity ratio'
      ],
      image: Pad7Display
    },
    {
      title: 'Xiaomi Smart Pen 2 & Multitasking',
      description: 'Precision stylus input and powerful desktop-like multitasking features.',
      features: [
        'Xiaomi Smart Pen 2 support (low latency)',
        'Split-screen, floating windows & desktop mode',
        'HyperOS 2.0 with AI productivity tools',
        'Optimized for drawing, note-taking & editing'
      ],
      image: XiaomiStylus
    },
    {
      title: '12000mAh Battery & Hyper-Fast Charging',
      description: 'Exceptional all-day power with industry-leading fast charging.',
      features: [
        '12000mAh capacity for extended sessions',
        '120W HyperCharge wired (full charge ~35 min)',
        '50W wireless charging support',
        'Efficient power management with Snapdragon 8 Elite'
      ],
      image: Pad7Battery
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
            alt={`${product.chip} Xiaomi Pad 7 Ultra`}
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
            Xiaomi Pad 7 Ultra with Snapdragon 8 Elite and 12000mAh battery.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Have questions about buying a Xiaomi tablet?
          </p>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#0066cc',
            fontSize: '17px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Chat with a Xiaomi Specialist
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
            What to consider when choosing your Xiaomi Pad 7 Ultra.
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
import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// You'll need to replace these with your actual vivo X300 images
import vivoX300_1 from '../../assets/photos/vivo-x300-1.jpg';
import vivoX300_2 from '../../assets/photos/vivo-x300-2.jpg';

// Consideration images (replace with real shots)
import Dimensity9400 from '../../assets/photos/dimensity-9400.jpg';
import VivoXDisplay from '../../assets/photos/vivo-x300-3.jpg';
import ZeissCamera from '../../assets/photos/vivo-x300-camera.jpg';
import VivoXBattery from '../../assets/photos/vivo-x300-battery.jpg';
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

export default function VivoX300Series() {
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
      chip: 'Dimensity 9400',
      display: '6.78-inch LTPO AMOLED 1.5K',
      memory: '12GB',
      storage: '256GB',
      details: [
        '2800 × 1260 resolution, 120Hz adaptive refresh',
        'Up to 4500 nits peak brightness, HDR10+',
        'Zeiss co-engineered triple 50MP cameras (main OIS + ultra-wide + 3x periscope)',
        'OriginOS 5 based on Android 15 with advanced AI tools',
        'IP68 + IP69 dust/water resistance',
        'Ultrasonic in-display fingerprint sensor',
        '90W wired + 50W wireless charging'
      ],
      price: '$699.00',
      monthlyPrice: '$58.25',
      finishes: ['Starry Black', 'Nebula Purple', 'Glacier White'],
      image: vivoX300_1
    },
    {
      id: 2,
      badge: 'New',
      chip: 'Dimensity 9400',
      display: '6.78-inch LTPO AMOLED 1.5K',
      memory: '16GB',
      storage: '512GB',
      details: [
        '2800 × 1260 resolution, 120Hz adaptive refresh',
        'Up to 4500 nits peak brightness, HDR10+',
        'Zeiss co-engineered triple 50MP cameras (main OIS + ultra-wide + 3x periscope)',
        'OriginOS 5 based on Android 15 with advanced AI tools',
        'IP68 + IP69 dust/water resistance',
        'Ultrasonic in-display fingerprint sensor',
        '90W wired + 50W wireless charging'
      ],
      price: '$799.00',
      monthlyPrice: '$66.58',
      finishes: ['Starry Black', 'Nebula Purple', 'Glacier White'],
      image: vivoX300_1
    },
    {
      id: 3,
      badge: 'New',
      chip: 'Dimensity 9400',
      display: '6.78-inch LTPO AMOLED 1.5K',
      memory: '16GB',
      storage: '1TB',
      details: [
        '2800 × 1260 resolution, 120Hz adaptive refresh',
        'Up to 4500 nits peak brightness, HDR10+',
        'Zeiss co-engineered triple 50MP cameras (main OIS + ultra-wide + 3x periscope)',
        'OriginOS 5 based on Android 15 with advanced AI tools',
        'Large VC cooling system for sustained performance',
        '6500mAh silicon-carbon battery',
        'Ultra-fast charging & reverse wireless support'
      ],
      price: '$899.00',
      monthlyPrice: '$74.92',
      finishes: ['Starry Black', 'Nebula Purple', 'Glacier White'],
      image: vivoX300_2
    }
  ];

  const considerations = [
    {
      title: 'Dimensity 9400 Chipset',
      description: 'Flagship 3nm processor delivering top-tier performance, efficiency, and on-device AI.',
      features: [
        'Powerful octa-core CPU with high clock speeds',
        'Advanced Immortalis-G925 GPU for gaming',
        'High-performance NPU for AI features',
        'Large vapor chamber cooling for long sessions'
      ],
      image: Dimensity9400
    },
    {
      title: '6.78-inch LTPO AMOLED 1.5K Display',
      description: 'Smooth, ultra-bright screen with excellent color accuracy and outdoor visibility.',
      features: [
        '2800 × 1260 resolution, 120Hz LTPO refresh',
        'Peak brightness up to 4500 nits',
        'HDR10+ and eye-protection modes',
        'Ultra-thin bezels with curved edges'
      ],
      image: VivoXDisplay
    },
    {
      title: 'Zeiss Triple 50MP Camera System',
      description: 'Professional photography with Zeiss optics, natural colors, and strong low-light performance.',
      features: [
        '50MP main (Sony IMX921) with OIS',
        '50MP ultra-wide + 50MP 3x periscope zoom',
        'Zeiss T* coating & color tuning',
        '8K video, AI scene enhancement, night mode'
      ],
      image: ZeissCamera
    },
    {
      title: '6500mAh Battery & Ultra-Fast Charging',
      description: 'Massive capacity with lightning-fast wired and wireless charging.',
      features: [
        '6500mAh silicon-carbon battery',
        '90W wired charging (0–100% in ~30 min)',
        '50W wireless charging support',
        'Reverse wireless charging capability'
      ],
      image: VivoXBattery
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
            alt={`${product.chip} vivo X300`}
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
            vivo X300 with Dimensity 9400 and Zeiss triple cameras.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Have questions about buying a vivo flagship?
          </p>
          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#0066cc',
            fontSize: '17px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Chat with a vivo Specialist
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
            What to consider when choosing your vivo X300.
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
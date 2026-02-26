import  { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';







export default function SupportCommunity() {
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

      <main style={{
        paddingTop: '60px',
        flex: '1',
        padding: isMobile ? '20px' : '40px 20px',
        maxWidth: '980px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Hero / Intro Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: '600',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            TechStore Repair & Support
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            maxWidth: '700px',
            margin: '0 auto 24px'
          }}>
            We’re here to help. Get your device repaired quickly with genuine parts and trusted technicians.
          </p>
          <p style={{
            fontSize: '17px',
            color: '#6e6e73',
            marginBottom: '32px'
          }}>
            All repairs come with our 90-day warranty on parts & labor.
          </p>
        </div>

        {/* Main Service Options */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {/* Option 1: Mail-in Repair */}
          <div style={{
            background: '#fbfbfd',
            borderRadius: '18px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Send your device to us
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#6e6e73',
              marginBottom: '24px'
            }}>
              Ship your device directly to our repair center — no appointment needed. We handle most brands and issues.
            </p>
            <button style={{
              width: '100%',
              padding: '12px 24px',
              background: '#0071e3',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Start Mail-in Repair
            </button>
          </div>

          {/* Option 2: In-Store / Walk-in */}
          <div style={{
            background: '#fbfbfd',
            borderRadius: '18px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Visit our Service Center
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#6e6e73',
              marginBottom: '24px'
            }}>
              Walk in or book a slot at our authorized service locations for same-day help on many issues.
            </p>
            <button style={{
              width: '100%',
              padding: '12px 24px',
              background: '#0071e3',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Find a Location
            </button>
          </div>

          {/* Option 3: Chat or Call Support */}
          <div style={{
            background: '#fbfbfd',
            borderRadius: '18px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Chat or Call Us
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#6e6e73',
              marginBottom: '24px'
            }}>
              Get instant help with diagnostics, troubleshooting, or to start a repair request right now.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{
                padding: '12px 24px',
                background: '#0071e3',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Start Chat
              </button>
              <button style={{
                padding: '12px 24px',
                background: 'transparent',
                border: '2px solid #0071e3',
                color: '#0071e3',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Call Support
              </button>
            </div>
          </div>
        </div>

        {/* Track Repair Status */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Track Your Repair
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#6e6e73',
            marginBottom: '24px'
          }}>
            Enter your Repair ID or Case Number to check status.
          </p>
          <div style={{
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="text"
              placeholder="Repair ID or Case Number"
              style={{
                width: '100%',
                padding: '14px',
                border: '1px solid #d2d2d7',
                borderRadius: '12px',
                fontSize: '17px',
                marginBottom: '16px'
              }}
            />
            <button style={{
              width: '100%',
              padding: '14px 24px',
              background: '#0071e3',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Check Status
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            More Ways to Get Help
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '17px',
            color: '#0071e3',
            lineHeight: '2'
          }}>
            <li><a href="#" style={{ color: '#0071e3', textDecoration: 'underline' }}>Check Warranty & Coverage</a></li>
            <li><a href="#" style={{ color: '#0071e3', textDecoration: 'underline' }}>Self-Service Repair Guides</a></li>
            <li><a href="#" style={{ color: '#0071e3', textDecoration: 'underline' }}>Find Authorized Service Providers</a></li>
            <li><a href="#" style={{ color: '#0071e3', textDecoration: 'underline' }}>Download Repair Manuals</a></li>
          </ul>
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';







export default function SupportTechnicalSupport() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Simple form state (you can connect this to real backend later)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send to backend/API
    alert('Thank you! Your message has been sent.');
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
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

      <main style={{
        paddingTop: '60px',
        flex: '1',
        padding: isMobile ? '20px' : '60px 20px',
        maxWidth: '980px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Hero / Intro */}
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
            Community Page
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#6e6e73',
            maxWidth: '700px',
            margin: '0 auto 24px'
          }}>
            We’re here to help with any questions, orders, or support needs.
          </p>
          <p style={{
            fontSize: '17px',
            color: '#6e6e73'
          }}>
            Response time: usually within 24 hours (Mon–Fri)
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {/* Chat */}
          <div style={{
            background: '#fbfbfd',
            borderRadius: '18px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
              Live Chat
            </h2>
            <p style={{ fontSize: '17px', color: '#6e6e73', marginBottom: '24px' }}>
              Talk to us instantly — available 9 AM to 9 PM daily.
            </p>
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
              Start Chat
            </button>
          </div>

          {/* Email */}
          <div style={{
            background: '#fbfbfd',
            borderRadius: '18px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
              Email Us
            </h2>
            <p style={{ fontSize: '17px', color: '#6e6e73', marginBottom: '24px' }}>
              Send your inquiry — we usually reply within 24 hours.
            </p>
            <a
              href="mailto:support@techstore.com"
              style={{
                display: 'block',
                width: '100%',
                padding: '14px 24px',
                background: '#0071e3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                textAlign: 'center'
              }}
            >
              support@techstore.com
            </a>
          </div>

          {/* Phone */}
          <div style={{
            background: '#fbfbfd',
            borderRadius: '18px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
              Call Us
            </h2>
            <p style={{ fontSize: '17px', color: '#6e6e73', marginBottom: '8px' }}>
              Available Mon–Sat, 9 AM – 7 PM
            </p>
            <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
              +63 917 123 4567
            </p>
            <button style={{
              width: '100%',
              padding: '14px 24px',
              background: 'transparent',
              border: '2px solid #0071e3',
              color: '#0071e3',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Call Now
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          background: '#fbfbfd',
          borderRadius: '18px',
          padding: isMobile ? '32px 24px' : '48px 40px',
          marginBottom: '80px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '24px',
              marginBottom: '24px'
            }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1px solid #d2d2d7',
                    borderRadius: '12px',
                    fontSize: '17px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1px solid #d2d2d7',
                    borderRadius: '12px',
                    fontSize: '17px'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500' }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '1px solid #d2d2d7',
                  borderRadius: '12px',
                  fontSize: '17px'
                }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '1px solid #d2d2d7',
                  borderRadius: '12px',
                  fontSize: '17px',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 24px',
                background: '#0071e3',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Other Ways to Reach Us
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '17px',
            lineHeight: '2.2',
            color: '#0071e3'
          }}>
            <li><strong>Head Office:</strong> 123 Tech Street, Makati City, Philippines</li>
            <li><strong>Business Hours:</strong> Monday–Saturday, 9:00 AM – 7:00 PM</li>
            <li><strong>Social Media:</strong> <a href="#" style={{ color: '#0071e3', textDecoration: 'underline' }}>@techstoreph</a> on Facebook, Instagram & X</li>
            <li><strong>Wholesale/Business Inquiries:</strong> <a href="mailto:business@techstore.com" style={{ color: '#0071e3', textDecoration: 'underline' }}>business@techstore.com</a></li>
          </ul>
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}
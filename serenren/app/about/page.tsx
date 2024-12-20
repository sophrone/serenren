import React from 'react';

const AboutPage = () => {
  return (
    <div style={{
      padding: 'var(--spacer-4)',
      maxWidth: '800px',
      margin: 'auto',
      backgroundColor: 'var(--bg-2)',
      borderRadius: 'var(--space-scale)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      animation: 'slideIn 1s ease-out' 
    }}>
      <style>
        {`
          @media (max-width: 768px) {
            div {
              padding: var(--spacer-2); 
            }

            h1 {
              font-size: var(--large); 
            }

            h2 {
              font-size: var(--medium); 
            }

            p {
              font-size: var(--small); 
            }

            ul {
              margin-left: 0; 
            }

            li {
              margin-bottom: var(--space-scale); 
            }
          }

          @keyframes slideIn {
            from {
              transform: translateY(100%); 
              opacity: 0; 
            }
            to {
              transform: translateY(0); 
              opacity: 1; 
            }
          }
        `}
      </style>

      <h1 style={{
        textAlign: 'center',
        fontSize: 'var(--x-large)',
        color: 'var(--black)',
        marginBottom: 'var(--spacer-0)',
      }}>About Us</h1>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-1)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Welcome to Serenren, where we specialize in providing high-quality, custom-tailored clothing
        designed to fit your unique style and preferences.
      </p>
      <h2 style={{
        fontSize: 'var(--larger)',
        color: 'var(--green)',
        marginTop: 'var(--spacer-2)',
      }}>Our Mission</h2>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-2)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Our mission is to empower individuals through fashion by offering personalized clothing solutions that
        enhance confidence and self-expression. We believe that everyone deserves to wear clothes that fit
        perfectly and reflect their personality.
      </p>
      <h2 style={{
        fontSize: 'var(--larger)',
        color: 'var(--green)',
        marginTop: 'var(--spacer-2)',
      }}>Our Story</h2>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-2)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Founded in [Year], Serenren began as a small tailoring shop and has since grown into a
        renowned brand. Our skilled team of tailors and designers work diligently to create pieces that are
        not only stylish but also comfortable and functional.
      </p>
      <h2 style={{
        fontSize: 'var(--larger)',
        color: 'var(--green)',
        marginTop: 'var(--spacer-2)',
      }}>Why Choose Us?</h2>
      <ul style={{
        marginLeft: 'var(--spacer-2)',
        color: 'var(--black)',
        marginBottom: 'var(--spacer-2)',
      }}>
        <li style={{ marginBottom: 'var(--space-scale)' }}>Custom Designs: Tailored to your specifications.</li>
        <li style={{ marginBottom: 'var(--space-scale)' }}>Quality Materials: Only the best fabrics are used.</li>
        <li style={{ marginBottom: 'var(--space-scale)' }}>Exceptional Service: We prioritize customer satisfaction.</li>
      </ul>
    </div>
  );
};

export default AboutPage;

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
      animation: 'slideInFromLeft 1s ease-out' 
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

          @keyframes slideInFromLeft {
            from {
              transform: translateX(-100%); 
              opacity: 0; 
            }
            to {
              transform: translateX(0); 
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
        Welcome to Serenren, where we specialize in providing the modern woman with versatile and elegant clothing that exude a unique style.
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
        Our mission is to excellently deliver ready to wear clothing as its finest and most unique form and style.
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
        Borne out of a desire to produce clothes that are versatile and functional, Serenren was founded in the year 2019. Since then we have grown into a renowned brand that thrives in the fashion industry.
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
        <li style={{ marginBottom: 'var(--space-scale)' }}>Unique Designs.</li>
        <li style={{ marginBottom: 'var(--space-scale)' }}>Quality Materials: Only the best of the best materials are used in production.</li>
        <li style={{ marginBottom: 'var(--space-scale)' }}>Exceptional Service</li>
      </ul>
    </div>
  );
};

export default AboutPage;

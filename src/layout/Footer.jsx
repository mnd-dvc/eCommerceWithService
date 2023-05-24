import React from 'react'

  const Footer = () => {
    const styles = {
      backgroundColor: '#f2f2f2',
      color: '#666',
      padding: '10px 0',
      textAlign: 'center',
      fontSize: '14px',
      marginTop: "25%",
      // position: 'fixed', 
      // left: '0', 
      // bottom: '0',
      width: '100%'
    };
  
    return (
      <footer style={styles}>
        <p>&copy; 2023 Company Name. All Rights Reserved.</p>
      </footer>
    );
  };
  
  export default Footer;

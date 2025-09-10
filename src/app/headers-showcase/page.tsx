import React from 'react';
import Header1 from '../Components/Header/Header1';
import Header2 from '../Components/Header/Header2';
import Header3 from '../Components/Header/Header3';
import Header4 from '../Components/Header/Header4';

const HeadersShowcase = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Page Title */}
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        backgroundColor: '#343a40',
        color: 'white'
      }}>
        <h1 style={{ margin: '0', fontSize: '2.5rem' }}>AT Tech Global - Headers Showcase</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '1.2rem' }}>Compare all 4 header designs with your logo and navigation</p>
      </div>

      {/* Header 1 */}
      <div style={{ 
        marginBottom: '80px',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#007bff',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: '0', fontSize: '1.8rem' }}>Header 1 - Standard Design</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <Header1 />
          <div style={{ 
            padding: '60px 20px', 
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            borderTop: '1px solid #dee2e6'
          }}>
            <h3 style={{ color: '#007bff' }}>Header 1 Preview</h3>
            <p>Clean and professional design with centered navigation</p>
          </div>
        </div>
      </div>

      {/* Header 2 */}
      <div style={{ 
        marginBottom: '80px',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#28a745',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: '0', fontSize: '1.8rem' }}>Header 2 - Alternative Layout</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <Header2 />
          <div style={{ 
            padding: '60px 20px', 
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            borderTop: '1px solid #dee2e6'
          }}>
            <h3 style={{ color: '#28a745' }}>Header 2 Preview</h3>
            <p>Modern design with different spacing and layout</p>
          </div>
        </div>
      </div>

      {/* Header 3 */}
      <div style={{ 
        marginBottom: '80px',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#17a2b8',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: '0', fontSize: '1.8rem' }}>Header 3 - Top Bar Design</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <Header3 />
          <div style={{ 
            padding: '60px 20px', 
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            borderTop: '1px solid #dee2e6'
          }}>
            <h3 style={{ color: '#17a2b8' }}>Header 3 Preview</h3>
            <p>Includes top contact bar with email and phone</p>
          </div>
        </div>
      </div>

      {/* Header 4 */}
      <div style={{ 
        marginBottom: '80px',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#dc3545',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: '0', fontSize: '1.8rem' }}>Header 4 - Premium Design</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <Header4 />
          <div style={{ 
            padding: '60px 20px', 
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            borderTop: '1px solid #dee2e6'
          }}>
            <h3 style={{ color: '#dc3545' }}>Header 4 Preview</h3>
            <p>Premium styling with enhanced visual appeal</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ 
        padding: '60px 40px', 
        backgroundColor: '#343a40',
        color: 'white',
        textAlign: 'center',
        margin: '40px',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Choose Your Header Design</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ padding: '20px', backgroundColor: '#007bff', borderRadius: '8px' }}>
            <h4>Header 1</h4>
            <p>Standard & Clean</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#28a745', borderRadius: '8px' }}>
            <h4>Header 2</h4>
            <p>Modern Layout</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#17a2b8', borderRadius: '8px' }}>
            <h4>Header 3</h4>
            <p>With Contact Bar</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#dc3545', borderRadius: '8px' }}>
            <h4>Header 4</h4>
            <p>Premium Style</p>
          </div>
        </div>
        <p style={{ marginTop: '30px', fontSize: '1.1rem' }}>
          All headers feature your AT Tech Global logo and complete navigation menu with services dropdown.
        </p>
      </div>
    </div>
  );
};

export default HeadersShowcase;

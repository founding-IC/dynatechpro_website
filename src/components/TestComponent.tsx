import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: '#6B46C1', 
      color: 'white', 
      padding: '2rem', 
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }}>
      🎨 TAILWIND TEST - This should be PURPLE with WHITE text
      <div className="bg-red-500 text-white p-4 mt-4">
        This should be RED if Tailwind is working
      </div>
      <div style={{
        background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '12px'
      }}>
        This is the exact DynaTechPro gradient!
      </div>
    </div>
  );
};

export default TestComponent;
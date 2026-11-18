import React, { useState } from 'react';
import './FindYourPiece.css';

const FindYourPiece = () => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    style: '',
    type: '',
    metal: '',
    occasion: ''
  });

  const handleSelect = (key, value) => {
    setPreferences({ ...preferences, [key]: value });
    if (step < 5) setStep(step + 1);
  };

  return (
    <section className="section find-piece-section">
      <div className="container">
        <div className="find-piece-container">
          <h2 className="section-title">Find the Piece That Feels Like You</h2>
          
          {step === 1 && (
            <div className="wizard-step animate-fade-in">
              <h3>What is your style?</h3>
              <div className="options-grid">
                {['Minimal', 'Classic', 'Bold', 'Romantic'].map(opt => (
                  <button key={opt} className="option-btn" onClick={() => handleSelect('style', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}
          
          {step === 2 && (
             <div className="wizard-step animate-fade-in">
              <h3>What type of jewelry?</h3>
              <div className="options-grid">
                {['Ring', 'Necklace', 'Earrings', 'Bracelet'].map(opt => (
                  <button key={opt} className="option-btn" onClick={() => handleSelect('type', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
             <div className="wizard-step animate-fade-in">
              <h3>Preferred metal?</h3>
              <div className="options-grid">
                {['Gold', 'Silver', 'Rose Gold'].map(opt => (
                  <button key={opt} className="option-btn" onClick={() => handleSelect('metal', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
             <div className="wizard-step animate-fade-in">
              <h3>For what occasion?</h3>
              <div className="options-grid">
                {['Everyday', 'Work', 'Date Night', 'Special Occasion'].map(opt => (
                  <button key={opt} className="option-btn" onClick={() => handleSelect('occasion', opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
             <div className="wizard-step animate-fade-in result-step">
              <h3>Your Perfect Match</h3>
              <p>Based on your style ({preferences.style}) and preference for {preferences.metal} {preferences.type.toLowerCase()}s for {preferences.occasion.toLowerCase()}, we recommend:</p>
              
              <div className="recommendation">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80&w=400" alt="Recommended" className="recommended-img" />
                <h4>The Signature {preferences.type}</h4>
                <button className="btn btn-primary" style={{marginTop: '20px'}}>View Details</button>
              </div>
              <button className="reset-btn" onClick={() => { setStep(1); setPreferences({}); }}>Start Over</button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default FindYourPiece;

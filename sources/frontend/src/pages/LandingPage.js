import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const handleRequestLetter = () => {
    if (isAuthenticated) {
      if (user?.role === 'student') {
        navigate('/request-letter');
      } else {
        navigate('/dashboard');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="landing-page">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">AskMyProf</span>
            </h1>
            <p className="hero-subtitle">
              Your Digital Bridge to Academic Success
            </p>
            <p className="hero-description">
              Simplify the letter of recommendation process. Connect with professors,
              track your requests in real-time, and accelerate your academic and
              professional journey with our streamlined platform.
            </p>
            <div className="hero-buttons">
              <button onClick={handleRequestLetter} className="btn btn-request">
                Request a Letter
              </button>
              {!isAuthenticated && (
                <button onClick={() => navigate('/signup')} className="btn btn-secondary-hero">
                  Get Started Free
                </button>
              )}
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">Fast</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">Easy</span>
                <span className="stat-label">To Use</span>
              </div>
              <div className="stat">
                <span className="stat-number">Secure</span>
                <span className="stat-label">Platform</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background circle */}
                <circle cx="200" cy="200" r="180" fill="#FFF8E1" opacity="0.5"/>

                {/* Professor (Left) */}
                <g transform="translate(100, 150)">
                  {/* Head */}
                  <circle cx="40" cy="30" r="28" fill="#5D4E37"/>
                  <circle cx="40" cy="30" r="25" fill="#8B7355"/>
                  {/* Face details */}
                  <circle cx="35" cy="28" r="3" fill="#333"/>
                  <circle cx="45" cy="28" r="3" fill="#333"/>
                  <path d="M 35 38 Q 40 40 45 38" stroke="#333" strokeWidth="2" fill="none"/>
                  {/* Glasses */}
                  <circle cx="35" cy="28" r="6" stroke="#333" strokeWidth="2" fill="none"/>
                  <circle cx="45" cy="28" r="6" stroke="#333" strokeWidth="2" fill="none"/>
                  <line x1="41" y1="28" x2="39" y2="28" stroke="#333" strokeWidth="2"/>
                  {/* Body */}
                  <rect x="15" y="60" width="50" height="70" rx="5" fill="#4A5568"/>
                  {/* Collar */}
                  <path d="M 35 60 L 30 75 L 40 68 L 50 75 L 45 60" fill="#FFFFFF"/>
                  {/* Tie */}
                  <rect x="37" y="68" width="6" height="30" fill="#DC143C"/>
                  {/* Arms */}
                  <rect x="5" y="70" width="12" height="40" rx="6" fill="#4A5568"/>
                  <rect x="63" y="70" width="12" height="40" rx="6" fill="#4A5568"/>
                  {/* Hands */}
                  <circle cx="11" cy="108" r="7" fill="#8B7355"/>
                  <circle cx="69" cy="108" r="7" fill="#8B7355"/>
                  {/* Document in hand */}
                  <rect x="60" y="95" width="20" height="25" rx="2" fill="#FFFFFF" stroke="#DC143C" strokeWidth="2"/>
                  <line x1="63" y1="100" x2="77" y2="100" stroke="#DC143C" strokeWidth="1"/>
                  <line x1="63" y1="105" x2="77" y2="105" stroke="#DC143C" strokeWidth="1"/>
                  <line x1="63" y1="110" x2="77" y2="110" stroke="#DC143C" strokeWidth="1"/>
                </g>

                {/* Student (Right) */}
                <g transform="translate(240, 150)">
                  {/* Head */}
                  <circle cx="40" cy="30" r="28" fill="#3D2817"/>
                  <circle cx="40" cy="30" r="25" fill="#C68642"/>
                  {/* Face details */}
                  <circle cx="35" cy="28" r="3" fill="#333"/>
                  <circle cx="45" cy="28" r="3" fill="#333"/>
                  <path d="M 32 35 Q 40 38 48 35" stroke="#333" strokeWidth="2" fill="none"/>
                  {/* Mortarboard (graduation cap) */}
                  <rect x="10" y="8" width="60" height="4" fill="#333"/>
                  <polygon points="40,4 35,8 45,8" fill="#FFD700"/>
                  <rect x="35" y="8" width="10" height="15" fill="#333"/>
                  {/* Tassel */}
                  <line x1="45" y1="8" x2="52" y2="18" stroke="#FFD700" strokeWidth="2"/>
                  <circle cx="52" cy="20" r="3" fill="#FFD700"/>
                  {/* Body */}
                  <rect x="15" y="60" width="50" height="70" rx="5" fill="#DC143C"/>
                  {/* Collar */}
                  <path d="M 25 60 L 20 70 L 30 67 L 40 67 L 50 70 L 55 60" fill="#FFF" opacity="0.9"/>
                  {/* Arms */}
                  <rect x="5" y="70" width="12" height="40" rx="6" fill="#DC143C"/>
                  <rect x="63" y="70" width="12" height="40" rx="6" fill="#DC143C"/>
                  {/* Hands */}
                  <circle cx="11" cy="108" r="7" fill="#C68642"/>
                  <circle cx="69" cy="108" r="7" fill="#C68642"/>
                  {/* Diploma */}
                  <rect x="4" y="100" width="18" height="6" rx="3" fill="#FFF8DC" stroke="#FFD700" strokeWidth="2"/>
                  <circle cx="7" cy="103" r="1" fill="#DC143C"/>
                </g>

                {/* Decorative elements */}
                <circle cx="80" cy="100" r="8" fill="#FFD700" opacity="0.3"/>
                <circle cx="320" cy="120" r="12" fill="#DC143C" opacity="0.2"/>
                <circle cx="100" cy="300" r="10" fill="#FFD700" opacity="0.25"/>
                <circle cx="300" cy="280" r="8" fill="#DC143C" opacity="0.25"/>

                {/* Connection line */}
                <path d="M 175 200 Q 200 180 225 200" stroke="#FFD700" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
              </svg>
              <p className="image-caption">Connecting Students with Professors</p>
            </div>
          </div>
        </div>

        {/* New Benefits Section */}
        <div className="benefits-section">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📝</div>
              <h3>Simple Process</h3>
              <p>No more chasing professors via email. Send your request with just a few clicks.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Instant Updates</h3>
              <p>Get real-time notifications when your professor reviews your request.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Track Everything</h3>
              <p>Keep all your letter requests organized in one convenient dashboard.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your information is encrypted and protected with industry-standard security.</p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three simple steps to get your letter of recommendation</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'var(--primary-yellow)' }}>1</div>
              <h3>Create Account</h3>
              <p>Sign up as a student or professor. It takes less than a minute to get started.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'var(--primary-red)' }}>2</div>
              <h3>Choose Professor</h3>
              <p>Select from your registered professors and add a personalized message to your request.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'var(--primary-yellow)' }}>3</div>
              <h3>Get Response</h3>
              <p>Receive instant notification when your professor approves or provides feedback on your request.</p>
            </div>
          </div>
        </div>

        {/* New Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="section-title">What Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                AskMyProf made requesting letters so much easier. I got responses in days instead of weeks!
              </p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Graduate Student</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                As a professor, this platform helps me manage all letter requests efficiently in one place.
              </p>
              <div className="testimonial-author">
                <strong>Dr. James Chen</strong>
                <span>Computer Science Professor</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                Clean interface, simple process. Exactly what students and professors need!
              </p>
              <div className="testimonial-author">
                <strong>Emma Rodriguez</strong>
                <span>Undergraduate Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Join hundreds of students and professors already using AskMyProf
          </p>
          <div className="cta-buttons">
            <button onClick={() => navigate('/signup')} className="btn btn-cta-primary">
              Sign Up Now
            </button>
            <button onClick={() => navigate('/login')} className="btn btn-cta-secondary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

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
            <img
              src="/profstudent.png"
              alt="Professor and Student"
              className="hero-illustration"
            />
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

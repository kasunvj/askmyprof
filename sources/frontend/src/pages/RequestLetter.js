import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config';
import './RequestLetter.css';

const RequestLetter = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { getAuthHeader, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== 'student') {
      navigate('/dashboard');
      return;
    }

    const fetchTeachers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/letter-requests/teachers`, {
          headers: getAuthHeader()
        });
        setTeachers(response.data);
      } catch (error) {
        setError('Failed to load teachers. Please try again.');
      }
    };

    fetchTeachers();
  }, [getAuthHeader, navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!selectedTeacher) {
      setError('Please select a professor');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${API_BASE_URL}/letter-requests`,
        {
          teacherId: selectedTeacher,
          message
        },
        {
          headers: getAuthHeader()
        }
      );

      setSuccess('Letter request sent successfully!');
      setSelectedTeacher('');
      setMessage('');

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send request. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="request-letter-page">
      <div className="container">
        <div className="request-card">
          <h2 className="page-title">Request a Letter of Recommendation</h2>
          <p className="page-subtitle">Select a professor and send your request</p>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <form onSubmit={handleSubmit} className="request-form">
            <div className="form-group">
              <label htmlFor="teacher">Select Professor/Lecturer</label>
              <select
                id="teacher"
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                required
              >
                <option value="">-- Choose a professor --</option>
                {teachers.map((teacher) => (
                  <option key={teacher._id} value={teacher._id}>
                    {teacher.displayName} (@{teacher.username})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Add a personal message to your professor..."
                rows="5"
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="btn btn-cancel"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestLetter;

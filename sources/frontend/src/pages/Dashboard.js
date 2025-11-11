import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config';
import './Dashboard.css';

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { getAuthHeader, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/letter-requests/my-requests`, {
        headers: getAuthHeader()
      });
      setRequests(response.data);
    } catch (error) {
      setError('Failed to load requests');
    } finally {
      setLoading(false);
    }
  };

  const updateRequestStatus = async (requestId, status) => {
    try {
      await axios.patch(
        `${API_BASE_URL}/letter-requests/${requestId}/status`,
        { status },
        { headers: getAuthHeader() }
      );
      fetchRequests();
    } catch (error) {
      setError('Failed to update request status');
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'badge-success';
      case 'rejected':
        return 'badge-danger';
      default:
        return 'badge-warning';
    }
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h2 className="dashboard-title">My Dashboard</h2>
            <p className="dashboard-subtitle">
              {user?.role === 'student'
                ? 'View and manage your letter requests'
                : 'Review and respond to student requests'}
            </p>
          </div>
          {user?.role === 'student' && (
            <button
              onClick={() => navigate('/request-letter')}
              className="btn btn-primary"
            >
              + New Request
            </button>
          )}
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading requests...</div>
        ) : requests.length === 0 ? (
          <div className="empty-state">
            <p>No requests found</p>
            {user?.role === 'student' && (
              <button
                onClick={() => navigate('/request-letter')}
                className="btn btn-primary"
              >
                Create Your First Request
              </button>
            )}
          </div>
        ) : (
          <div className="requests-grid">
            {requests.map((request) => (
              <div key={request._id} className="request-card">
                <div className="request-header">
                  <div className="request-info">
                    {user?.role === 'teacher' ? (
                      <>
                        <h3 className="request-name">{request.student?.displayName || 'Unknown Student'}</h3>
                        <p className="request-meta">
                          @{request.student?.username || 'N/A'} • {request.student?.email || 'N/A'}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="request-name">{request.teacher?.displayName || 'Unknown Teacher'}</h3>
                        <p className="request-meta">@{request.teacher?.username || 'N/A'}</p>
                      </>
                    )}
                  </div>
                  <span className={`status-badge ${getStatusBadgeClass(request.status)}`}>
                    {request.status}
                  </span>
                </div>

                {request.message && (
                  <div className="request-message">
                    <strong>Message:</strong>
                    <p>{request.message}</p>
                  </div>
                )}

                <div className="request-footer">
                  <span className="request-date">
                    {new Date(request.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>

                  {user?.role === 'teacher' && request.status === 'pending' && (
                    <div className="request-actions">
                      <button
                        onClick={() => updateRequestStatus(request._id, 'approved')}
                        className="btn-action btn-approve"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateRequestStatus(request._id, 'rejected')}
                        className="btn-action btn-reject"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

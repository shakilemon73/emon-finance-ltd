const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.emonfinanceltd.com';

export const APIError = class extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
    this.name = 'APIError';
  }
};

const validateForm = (data, requiredFields, type) => {
  const errors = [];
  
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
    }
  });

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (data.website && !/^https?:\/\/.+/i.test(data.website)) {
    errors.push('Valid website URL is required');
  }

  if (errors.length > 0) {
    throw new APIError(errors.join('\n'), 400);
  }
};

export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw new APIError(responseData.message || 'API request failed', response.status);
    }

    return responseData;
  } catch (error) {
    throw error instanceof APIError ? error : new APIError('Network error occurred', 500);
  }
};

export const submitAdvertiserForm = async (data) => {
  validateForm(data, ['name', 'email', 'company', 'offerType'], 'advertiser');
  return apiRequest('/advertisers', 'POST', data);
};

export const submitPublisherForm = async (data) => {
  validateForm(data, ['name', 'email', 'website'], 'publisher');
  return apiRequest('/publishers', 'POST', data);
};

export const submitContactForm = async (data) => {
  validateForm(data, ['name', 'email', 'message'], 'contact');
  return apiRequest('/contact', 'POST', data);
};
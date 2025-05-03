const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.emonfinanceltd.com';

export async function submitAdvertiserForm(data) {
  try {
    // Basic validation
    const errors = validateAdvertiserForm(data);
    if (errors.length > 0) {
      throw new Error(errors.join('\n'));
    }

    const response = await fetch(`${API_BASE_URL}/advertisers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'An error occurred while submitting the form');
  }
}

export async function submitPublisherForm(data) {
  try {
    // Basic validation
    const errors = validatePublisherForm(data);
    if (errors.length > 0) {
      throw new Error(errors.join('\n'));
    }

    const response = await fetch(`${API_BASE_URL}/publishers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'An error occurred while submitting the form');
  }
}

export async function submitContactForm(data) {
  try {
    // Basic validation
    const errors = validateContactForm(data);
    if (errors.length > 0) {
      throw new Error(errors.join('\n'));
    }

    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'An error occurred while submitting the form');
  }
}

function validateAdvertiserForm(data) {
  const errors = [];
  
  if (!data.name) errors.push('Name is required');
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }
  if (!data.company) errors.push('Company name is required');
  if (!data.offerType) errors.push('Offer type is required');
  
  return errors;
}

function validatePublisherForm(data) {
  const errors = [];
  
  if (!data.name) errors.push('Name is required');
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }
  if (!data.website || !/^https?:\/\/.+/i.test(data.website)) {
    errors.push('Valid website URL is required');
  }
  
  return errors;
}

function validateContactForm(data) {
  const errors = [];
  
  if (!data.name) errors.push('Name is required');
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }
  if (!data.message) errors.push('Message is required');
  
  return errors;
}
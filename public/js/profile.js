const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#user-name').value.trim();
  const email = document.querySelector('#user-email').value.trim();

  if (name && email) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create user');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete user');
    }
  }
};

// document
//   .querySelector('.new-user-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.user-list')
//   .addEventListener('click', delButtonHandler);

const newFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#userFirstName-update').value.trim();
  const last_name = document.querySelector('#userLastName-update').value.trim();
  const email = document.querySelector('#user-email').value.trim();
  const primaryPhone = document.querySelector('#user-PrimaryPhone').value.trim();
  const cellPhone = document.querySelector('#user-CellPhone').value.trim();
  const workPhone = document.querySelector('#user-WorkPhone').value.trim();

  if (first_name || last_name || email || primaryPhone || cellPhone || workPhone) {
    const response = await fetch(`/api/userRoutes`, {
      method: 'PUT',
      body: JSON.stringify({ first_name, last_name, email, primaryPhone, cellPhone, workPhone }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update user information. Please try again.');
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

document
  .querySelector('.update-user-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.user-list')
//   .addEventListener('click', delButtonHandler);

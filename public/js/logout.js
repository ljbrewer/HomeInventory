const logout = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(1);  

  if (response.ok) {
    document.location.replace('/login');
    console.log(2);
  } else {
    alert(response.statusText);
    console.log(3);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

const addHomeFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-add-home').value.trim();
  const purchasedOn = document.querySelector('#purchasedOn-add-home').value.trim();
  const address1 = document.querySelector('#address1-add-home').value.trim();
  const address2 = document.querySelector('#address2-add-home').value.trim();
  const city = document.querySelector('#city-add-home').value.trim();
  const state = document.querySelector('#state-add-home').value.trim();
  const country = document.querySelector('#country-add-home').value.trim();
  const postalcode = document.querySelector('#postalcode-add-home').value.trim();
  const policyNumber = document.querySelector('#policyNumber-add-home').value.trim();

  if (title && purchasedOn && address1 && city && state && country && postalcode) {
    const response = await fetch('/api/homes', {
      method: 'POST',
      body: JSON.stringify({ title, purchasedOn, address1, address2, city, state, country, postalcode, policyNumber }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      document.location.replace('/myHomes');

    } else {

      alert(response.statusText);
    }
  } else {
    alert("Title , Purchased On Date , Address, City, State, Country, Postalcode")
  }
};

const deleteHome = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('home-id')) {
    const id = event.target.getAttribute('home-id');

    const response = await fetch(`/api/homes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/myhomes');
    } else {
      alert('Failed to delete home. Please try again.');
    }
  }
}


document
  .querySelector('.add-home-form')
  .addEventListener('submit', addHomeFormHandler);

document
  .querySelector('.deleteBtn')
  .addEventListener('click', deleteHome);
const addHomeFormHandler = async (event) => {
  event.preventDefault();

  const item = document.querySelector('#item-add-asset').value.trim();
  const purchasedOn = document.querySelector('#purchasedOn-add-asset').value.trim();
  const description = document.querySelector('#description-add-asset').value.trim();
  const state_id = document.querySelector('#state_id-add-asset').value.trim();
  const price = document.querySelector('#price-add-asset').value.trim();
  const currentValue = document.querySelector('#currentValue-add-asset').value.trim();
  const model = document.querySelector('#model-add-asset').value.trim();
  const serialno = document.querySelector('#serialno-add-asset').value.trim();
  const comments = document.querySelector('#comments-add-asset').value.trim();
  
  if (item && description) {
    const response = await fetch('/api/assets', {
      method: 'POST',
      body: JSON.stringify({ item, purchasedOn, description, state_id, price, currentValue, model, serialno, comments }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      document.location.replace('/assets');
    } else {
      alert(response.statusText);
    }
  } else {
    // xx fields are required
  }
};


document
  .querySelector('.add-asset-form')
  .addEventListener('submit', addHomeFormHandler);

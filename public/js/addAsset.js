const addAssetFormHandler = async (event) => {
  event.preventDefault();

  const item = document.querySelector('#item-add-asset').value.trim();
  const description = document.querySelector('#description-add-asset').value.trim();
  const purchasedOn = document.querySelector('#purchasedOn-add-asset').value.trim();
  const location_id = document.querySelector('#location-add-asset').value.trim();
  const state_id = document.querySelector('#state-add-asset').value.trim();
  const price = document.querySelector('#price-add-asset').value.trim();
  const currentValue = document.querySelector('#currentValue-add-asset').value.trim();
  const model = document.querySelector('#model-add-asset').value.trim();
  const serialno = document.querySelector('#serialno-add-asset').value.trim();
  const category_id = document.querySelector('#category-add-asset').value.trim();
  const home_id = document.querySelector('#home-add-asset').value.trim();
  const comments = document.querySelector('#comment-add-asset').value.trim();
  
  if (item && description) {
    const response = await fetch('/api/assets', {
      method: 'POST',
      body: JSON.stringify({ item, description,purchasedOn, location_id, state_id, price, currentValue, model, serialno, category_id,comments }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      document.location.replace('/assets');
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Item, Description are required")
  }
};


document
  .querySelector('.add-asset-form')
  .addEventListener('submit', addAssetFormHandler);

const addAssetFormHandler = async (event) => {
  event.preventDefault();

  const item = document.querySelector('#item-add-asset').value.trim();
  const description = document.querySelector('#description-add-asset').value.trim();
  const purchasedOn = document.querySelector('#purchasedOn-add-asset').value.trim();
  const location_id = document.querySelector('#Location-add-asset').value.trim();
  const state_id = document.querySelector('#state-add-asset').value.trim();
  const price = document.querySelector('#price-add-asset').value.trim();
  const currentValue = document.querySelector('#currentvalue-add-asset').value.trim();
  const model = document.querySelector('#model-add-asset').value.trim();
  const serialno = document.querySelector('#serialno-add-asset').value.trim();
  const category_id = document.querySelector('#category-add-asset').value.trim();
  const comments = document.querySelector('#comment-add-asset').value.trim();

  if (item && description) {
    const response = await fetch('/api/asset', {
      method: 'POST',
      body: JSON.stringify({ item, purchasedOn, description, state_id, price, currentValue, model, serialno, comments, location_id, category_id }),
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


const deleteAsset = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('asset-id')) {
    const id = event.target.getAttribute('asset-id');

    const response = await fetch(`/api/asset/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/assets');
    } else {
      alert('Failed to delete asset. Please try again.');
    }
  }
}

document
  .querySelector('.add-asset-form')
  .addEventListener('submit', addAssetFormHandler);

document
  .querySelector('.deleteBtn')
  .addEventListener('click', deleteAsset);

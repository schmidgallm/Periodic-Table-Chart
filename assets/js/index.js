// Fetch periodic table of elements in json format
fetch('https://neelpatel05.pythonanywhere.com', {
	method: 'GET'
})
	.then((response) => {
		// The API call was successful!
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject(response);
		}
	})
	.then((data) => {
		// This is the JSON from our response
		console.log(data);
		createElementDiv(data);
	})
	.catch((err) => {
		// There was an error
		console.warn('Something went wrong.', err);
	});

// Create Element Div and insert into DOM
createElementDiv = (elem) => {
	const wrapper = document.querySelector('#wrapper');

	elem.forEach((el) => {
		const div = document.createElement('div');
		div.className = `element ${el.groupBlock}`;
		div.id = 'e-' + el.atomicNumber;
		div.innerHTML = `<p>${el.atomicNumber}</p> <p>${el.symbol}</p>`;
		div.addEventListener('click', () => initModal(el));
		wrapper.appendChild(div);
	});
};

const modal = document.querySelector('.modal');

const initModal = (el) => {
	modal.innerHTML = `
  <div class="preview">
    <p>${el.atomicNumber}</p>
    <h1>${el.symbol}</h1>
    <p>${el.name}</p>
    <p>${el.atomicMass}</p>
  </div>
  <div class="content">
    <p>Name: <span>${el.name}</span></p>
    <p>Symbol: <span>${el.symbol}</span></p>
    <p>Atomic Mass: <span>${el.atomicMass}</span></p>
    <p>Atomic Number: <span>${el.atomicNumber}</span></p>
    <p>Atomic Radius: <span>${el.atomicRadius}</span></p>
    <p>Boiling Poiont: <span>${el.boilingPoint}</span></p>
    <p>Bonding Type: <span>${el.bondingType}</span></p>
    <p>Density: <span>${el.density}</span></p>
    <p>Electron Affinity: <span>${el.electronAffinity}</span></p>
    <p>Electron Negativity: <span>${el.electronegativity}</span></p>
    <p>Group Block: <span>${el.groupBlock}</span></p>
    <p>Ion Radius: <span>${el.ionRadius}</span></p>
    <p>Ionization Energy: <span>${el.ionizationEnergy}</span></p>
    <p>Melting Point: <span>${el.meltingPoint}</span></p>
    <p>Oxidation States: <span>${el.oxidationStates}</span></p>
    <p>Standard State: <span>${el.standardState}</span></p>
    <p>VanDelWaals Radius: <span>${el.vanDelWaalsRadius}</span></p>
    <p>Year Discovered: <span>${el.yearDiscovered}</span></p>
  </div>
  `;
};

// Toggle Modal
document.addEventListener('click', () => {
	if (modal.classList.contains('hide')) {
		modal.classList.remove('hide');
	} else {
		modal.classList.add('hide');
	}
});

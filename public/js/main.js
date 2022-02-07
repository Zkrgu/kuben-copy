const cookieBtnEl = document.getElementById('cookieBtn');
const navOptsEl = document.getElementById('nav-opts');
const navDropdownEl = document.getElementById('nav-dropdown');

let selectedOpt = '';

const navOpts = {
	'Om skolen': {
		'Om oss': [
			'Vår profil og rektors hilsen',
			'Ledelse og ansatte'
		]
	},
	'Fagtilbud': {
		'Studiespesialisering': [
			'Om studiespesialisering',
			'Teknologilinja og miljølinja - forskning og innovasjon'
		],
		'Yrkesfag': [
			'Bygg- og anleggsteknikk'
		]
	},
	'For elever og foresatte': {
		'Helse og velferd': [
			'Skolehelsetjenesten'
		]
	},
	'Satsningsområder': {
		'Faglige satsninger': [
			'Kuben i verden - et forskningssamarbeid'
		]
	}
}

cookieBtnEl.addEventListener('click', e=>{
	e.target.parentElement.parentElement.style.display = "none";
});

navOptsEl.addEventListener('click', e=>{
	clickedOpt = e.target.innerText;
	if(clickedOpt == selectedOpt){
		navDropdownEl.innerHTML = '';
		return selectedOpt = '';
	}
	navDropdownEl.innerHTML = ''
	const opts = navOpts[clickedOpt];
	const ents = Object.entries(opts);
	ents.forEach(e=>{
		const div = document.createElement('div');
		const h4 = document.createElement('h4');
		h4.innerHTML = e[0];
		div.appendChild(h4);
		const ul = document.createElement('ul');
		e[1].forEach(f=>{
			const li = document.createElement('li');
			li.innerHTML = f;
			ul.appendChild(li);
		})
		div.appendChild(ul);
		navDropdownEl.appendChild(div);
	});
	selectedOpt = clickedOpt;
})

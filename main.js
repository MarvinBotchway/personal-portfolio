function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


var menu = document.getElementById("menu");

// open/close the menu when the user clicks on the button
function toggleMenu() {
	if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
	} else {
		menu.classList.add('hidden');
	}
}

// close the menu when the user clicks outside of it 
window.onclick = function (event) {
	var dropdownWrapper = document.getElementById('dropdown-wrapper');
	if (!dropdownWrapper.contains(event.target) && !menu.classList.contains('hidden')) {
		menu.classList.add('hidden');
		}
	}
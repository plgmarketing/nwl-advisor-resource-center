// JavaScript Document 
document.addEventListener('click', e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]")
	if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
	
	let currentDropdown
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown]')
		currentDropdown.classList.toggle('active')
	}
	
	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove("active")
	})
}) 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

const showItem = (index) => {
  carouselSlide.style.transform = `translateX(${-index * 100}%)`;
};
 
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
const intervalId = setInterval(nextSlide, 5000);

// Go to homepage
function goToHomepage() {
    // You can change the URL to your homepage URL
    window.location.href = 'https://www.nationalwesternlife.com/';
}

// Check if the cookie exists
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

// Set the cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Close the popup and set the cookie
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    setCookie('popupDisplayed', 'true', 1); // Set cookie to expire in 1 day
}

// Display the popup if the cookie doesn't exist
window.onload = function() {
    if (!getCookie('popupDisplayed')) {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
};


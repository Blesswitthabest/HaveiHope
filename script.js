// mobile menu
const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {
  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
}

// contact form demo
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactMessage.textContent = "Thank you! Your message has been received.";
    contactForm.reset();
  });
}

// member login demo
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginMessage.textContent = "Login feature placeholder for final project demo.";
    loginForm.reset();
  });
}

// donation option demo
const donationButtons = document.querySelectorAll(".donation-button");
const donationMessage = document.getElementById("donationMessage");

donationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    donationMessage.textContent = "Donation option selected. This would connect to a real donation system later.";
  });
});

// simple active calendar
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

const events = {
  "2026-05-11": "Scholarship Dinner",
  "2026-06-01": "Volunteer Garden Day",
  "2026-06-15": "Hope Harvest Workshop",
  "2026-07-08": "Hope Word Reading Day",
  "2026-07-22": "Farm Stewardship Day"
};

function buildCalendar() {
  if (!calendar || !monthYear) {
    return;
  }

  calendar.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += `<div class="calendar-day empty"></div>`;
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const eventText = events[dateKey] || "";

    calendar.innerHTML += `
      <div class="calendar-day">
        <strong>${day}</strong>
        <p>${eventText}</p>
      </div>
    `;
  }
}

if (prevMonth && nextMonth) {
  prevMonth.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    buildCalendar();
  });

  nextMonth.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    buildCalendar();
  });
}

buildCalendar();
AOS.init({
  duration: 800,
  once: true
});

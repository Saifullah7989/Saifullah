function validatePhone(input) {
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(input.value)) {
    alert("Invalid phone number. Must be 10 digits.");
    input.focus();
  }
}

function showFee(type) {
  const fees = { music: "$10", "clean-up": "Free", tech: "$5" };
  document.getElementById("feeDisplay").textContent = "Fee: " + (fees[type] || "N/A");
  localStorage.setItem("preferredEvent", type);
}

function showConfirmation() {
  document.getElementById("outputMsg").textContent = "Registration Successful!";
}

function submitForm() {
  const form = document.getElementById("eventForm");
  form.reset();
}

function enlarge(img) {
  img.style.width = "300px";
}

function countChars() {
  const len = document.getElementById("feedback").value.length;
  document.getElementById("charCount").textContent = "Characters: " + len;
}

function videoReady() {
  document.getElementById("videoStatus").textContent = "Video ready to play.";
}

function warnUser() {
  return "Are you sure you want to leave? Your form data will be lost.";
}

function findLocation() {
  if (!navigator.geolocation) {
    document.getElementById("location").textContent = "Geolocation is not supported.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      document.getElementById("location").textContent = `Your location: ${latitude}, ${longitude}`;
    },
    (err) => {
      document.getElementById("location").textContent = "Error getting location: " + err.message;
    },
    { enableHighAccuracy: true, timeout: 5000 }
  );
}

function clearPreferences() {
  localStorage.clear();
  sessionStorage.clear();
  alert("Preferences cleared.");
}

window.onload = function () {
  const saved = localStorage.getItem("preferredEvent");
  if (saved) {
    document.getElementById("eventType").value = saved;
    showFee(saved);
  }
};

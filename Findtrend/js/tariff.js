document
  .getElementById("tariff-switch")
  .addEventListener("change", function () {
    const personalPrice = document.getElementById("price-personal");
    const regularPrice = document.getElementById("price-regular");
    const premiumPrice = document.getElementById("price-premium");
    const priceMonthTxt = document.getElementById("monthly-label")

    if (this.checked) {
      // Когда выбрано "Yearly"
      personalPrice.textContent = "$16";
      regularPrice.textContent = "$52";
      premiumPrice.textContent = "$70";
      priceMonthTxt.style.opacity = "0.5"
    } else {
      // Когда выбрано "Monthly"
      personalPrice.textContent = "$8";
      regularPrice.textContent = "$20";
      premiumPrice.textContent = "$48";
      priceMonthTxt.style.opacity = "1"
    }
  });
document
  .getElementById("tariff-switch")
  .addEventListener("change", function () {
    const priceMonthPersonal = document.getElementById("price-month-personal");
    const priceMonthRegular = document.getElementById("price-month-regular");
    const priceMonthPremium = document.getElementById("price-month-premium");

    if (this.checked) {
      priceMonthPersonal.textContent = "/yearly";
      priceMonthRegular.textContent = "/yearly";
      priceMonthPremium.textContent = "/yearly";
    } else {
      priceMonthPersonal.textContent = "/monthly";
      priceMonthRegular.textContent = "/monthly";
      priceMonthPremium.textContent = "/monthly";
    }
  });

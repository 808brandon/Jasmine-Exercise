window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) { 
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
        
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  function setupIntialValues() {
    const values = {amount : 40000, years : 5, rate : 1.99}
    const amount = document.getElementById("loan-amount")
    amount.value = values.amount
    const years = document.getElementById("loan-years")
    years.value = values.years
    const rate = document.getElementById("loan-rate")
    rate.value = values.rate
    update()
  }
  
  function update() {
    const currentUIValues = getCurrentUIValues()
    updateMonthly(calculateMonthlyPayment(currentUIValues))
  }
  
  function calculateMonthlyPayment(values) {
    const monthlyRate = (values.rate / 12) / 100
    const n = Math.floor(values.years * 12)
    const monthlyRateFormula = (monthlyRate * (1 + monthlyRate) ** n) / ((1 + monthlyRate) ** n - 1) * values.amount
    return monthlyRateFormula.toFixed(2)
  
  }
  
  function updateMonthly(monthly) {
    const monthlyUI = document.getElementById('monthly-payment')
    monthlyUI.innerText = `$${monthly}`
  }
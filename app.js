var data = require('./data')

var BMIArray = [];
var BMICategory = [];
function BMI() {

  for (let i = 0; i < data.length; i++) {
    heightMeter = data[i]["HeightCm"] / 100;
    bmi = (data[i]["WeightKg"] / heightMeter).toFixed(2)
    BMIArray.push(parseFloat(bmi))

  }

  for (let i = 0; i < BMIArray.length; i++) {
    if (BMIArray[i] <= 18.4) {
      BMICategory.push({ BMI: BMIArray[i], BMICategory: "Underweight", HealthRisk: "Malnutrition risk" })
    } else if (BMIArray[i] >= 18.5 && BMIArray[i] <= 24.9) {
      BMICategory.push({ BMICategory: "Normalweight", HealthRisk: "Low risk" })
    }
    else if (BMIArray[i] >= 25 && BMIArray[i] <= 29.9) {
      BMICategory.push({ BMI: BMIArray[i], BMICategory: "Overweight", HealthRisk: "Enhanced risk" })
    }
    else if (BMIArray[i] >= 30 && BMIArray[i] <= 34.9) {
      BMICategory.push({ BMI: BMIArray[i], BMICategory: "Moderately obese", HealthRisk: "Medium risk" })
    }
    else if (BMIArray[i] >= 35 && BMIArray[i] <= 39.9) {
      BMICategory.push({ BMI: BMIArray[i], BMICategory: "Severel obese", HealthRisk: "High risk" })
    }
    else {
      BMICategory.push({ BMI: BMIArray[i], BMICategory: "Very severely obese", HealthRisk: "Very high risk" })
    }
  }

  console.log(JSON.stringify(BMICategory))
}
BMI()
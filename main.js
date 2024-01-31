const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const submitBtn = document.querySelector('.submit')
const error = document.querySelector('.error')
const bmi = document.querySelector('.bmi')
const bmiStatus = document.querySelector('.status')
const clearBtn = document.querySelector('.clear')

submitBtn.addEventListener('click', function(){

    if(weight.value ==='' || height.value ===''){
        error.style.display = 'block'
        error.textContent = 'Please fill-in the field'
        setTimeout(function(){
            error.style.display = 'none'
        },5000)
    } else if(!Number(weight.value) || !Number(height.value)){
        error.style.display = 'block'
        error.textContent = 'Please both field should be numbers'
        setTimeout(function(){
            error.style.display = 'none'
        },5000)

    } else{
        const weightInKg = Number(weight.value)
        const heightInMeters = Number(height.value) / 100
        const heightInMetersSqared = heightInMeters * heightInMeters
        const bmiValue = weightInKg / heightInMetersSqared
        bmi.innerHTML = `${bmiValue.toFixed(2)} kg/m <sup>2<sup>`
        if(bmiValue < 18.5){
            bmiStatus.textContent = 'underweight' 
        } else if(bmiValue > 18.5 && bmiValue < 24.9){
            bmiStatus.textContent = 'Healthy Weight'
        }else if(bmiValue > 25.0 && bmiValue < 29.9){
            bmiStatus.textContent = 'Over-weight'
        }else bmiStatus.textContent = 'Obese'
        
    }

})

clearBtn.addEventListener('click', function(){
    weight.value = ''
    height.value = ''
    bmi.innerHTML = ''
    bmiStatus.textContent = ''
})


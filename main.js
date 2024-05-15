// get all input field


const inputs = document.querySelectorAll("input[type='text']");
const  checkbox = document.querySelectorAll("input[type='checkbox']");

inputs.forEach(input => input.addEventListener('keyup', (e) => {
  let element = e.target;
  element.value = e.target.value;
}))


let counter = 0;

checkbox.forEach((check , index) => check.addEventListener('change' , (e) => {
  const element =  e.target;
  if(element.checked){
    console.log(inputs[index])
    if(inputs[index].value !== ""){
      counter++;
      inputs[index].classList.add('active'); 
    }
  }
  
  if(!element.checked){
    if(counter > 0){
      counter -= 1;
      inputs[index].classList.remove('active'); 
    }
  }

  document.querySelector('.line').style.width = counter * 33.3 + "%";    

}))


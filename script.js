const inputText = document.getElementById("input-tag");
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const workingArea = document.getElementById("working-area");

// const obj = {
//   [`p-${x}`]: `padding: ${x}px`,
//   [`m-${x}`]: `margin: ${x}px`,
//   [`w-${x}`]: `width: ${x}px`,
//   [`h-${x}`]: `height: ${x}px`,
//   [`color-${x}`]: `color: ${x}`,
//   [`bg-color-${x}`]: `background-color: ${x}`,
//   [`fw-${x}`]: `padding: ${x}px`,
//   [`fs-${x}`]: `padding: ${x}px`,
// }

btn1.addEventListener("click", () => {

  workingArea.removeAttribute("style");

  const inputValue = inputText.value;
  const arr = inputValue.split(" ");
  
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element==="") {
    alert("Invalid empty space.");
    return;
    }
    else if(element.slice(0, 5)!=="chai-") {
      alert(`Doesn't starts with "chai-"`);
      return;
    }

    if(
        element.slice(5, 7)==="p-" ||
        element.slice(5, 7)==="m-" || 
        element.slice(5, 7)==="w-" ||
        element.slice(5, 7)==="h-" ||
        element.slice(5, 8)==="fw-" ||
        element.slice(5, 8)==="fs-" ||
        element.slice(5, 8)==="br-"
      ) {
      if(element.slice(5, 7)==="p-" && element.slice(7)!=="" && !Number.isNaN(Number(element.slice(7)))) {
        workingArea.style.padding = `${parseInt(element.slice(7), 10)}px`;
      }
      else if(element.slice(5, 7)==="m-" && element.slice(7)!=="" && !Number.isNaN(Number(element.slice(7)))) {
        workingArea.style.margin = `${parseInt(element.slice(7), 10)}px`;
      }
      else if(element.slice(5, 7)==="w-" && element.slice(7)!=="" && !Number.isNaN(Number(element.slice(7)))) {
        workingArea.style.width = `${parseInt(element.slice(7), 10)}px`;
      }
      else if(element.slice(5, 7)==="h-" && element.slice(7)!=="" && !Number.isNaN(Number(element.slice(7)))) {
        workingArea.style.height = `${parseInt(element.slice(7), 10)}px`;
      }
      else if(element.slice(5, 8)==="fw-" && element.slice(8)!=="" && !Number.isNaN(Number(element.slice(8)))) {
        workingArea.style.fontWeight = `${parseInt(element.slice(8), 10)}`;
      }
      else if(element.slice(5, 8)==="fs-" && element.slice(8)!=="" && !Number.isNaN(Number(element.slice(8)))) {
        workingArea.style.fontSize = `${parseInt(element.slice(8), 10)}px`;
      }
      else if(element.slice(5, 8)==="br-" && element.slice(8)!=="" && !Number.isNaN(Number(element.slice(8)))) {
        workingArea.style.borderRadius = `${parseInt(element.slice(8), 10)}px`;
      }
      else {
          alert("Invalid property value.");
          return;
      }
    }
    else if(element.slice(5,7)==="c-" || element.slice(5,8)==="bg-" || element.slice(5,8)==="ta-") {
      if(element.slice(5,7)==="c-" && CSS.supports(`color: ${element.slice(7)}`)) {
        workingArea.style.color = element.slice(7);
      }
      else if(element.slice(5,8)==="bg-" && CSS.supports(`background-color: ${element.slice(8)}`)) {
        workingArea.style.backgroundColor = element.slice(8);
      }
      else if(element.slice(5,8)==="ta-" && CSS.supports(`text-align: ${element.slice(8)}`)) {
        workingArea.style.textAlign = element.slice(8);
      }
      else {
        alert("Invalid property value.");
        return;
      }
    }
    else {
      alert("Something went wrong.");
      return;
    }
  };
  
})

btn2.addEventListener("click", () => {
  inputText.value = "";
  workingArea.removeAttribute("style");
})

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

  const inputValue = inputText.value;

  workingArea.removeAttribute("style");

  if(inputValue==="") {
    alert("Input space cannot be empty.");
    return;
  }
  else if(inputValue.slice(0, 5)!=="chai-") {
    alert("Something went wrong.");
    return;
  }
  else if(
      inputValue.slice(5, 7)==="p-" ||
      inputValue.slice(5, 7)==="m-" || 
      inputValue.slice(5, 7)==="w-" ||
      inputValue.slice(5, 7)==="h-" ||
      inputValue.slice(5, 8)==="fw-" ||
      inputValue.slice(5, 8)==="fs-" ||
      inputValue.slice(5, 8)==="br-"
    ) {
    if(inputValue.slice(5, 7)==="p-" && typeof parseInt(inputValue.slice(7), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(7), 10))) {
      workingArea.style.padding = `${parseInt(inputValue.slice(7), 10)}px`;
    }
    else if(inputValue.slice(5, 7)==="m-" && typeof parseInt(inputValue.slice(7), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(7), 10))) {
      workingArea.style.margin = `${parseInt(inputValue.slice(7), 10)}px`;
    }
    else if(inputValue.slice(5, 7)==="w-" && typeof parseInt(inputValue.slice(7), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(7), 10))) {
      workingArea.style.width = `${parseInt(inputValue.slice(7), 10)}px`;
    }
    else if(inputValue.slice(5, 7)==="h-" && typeof parseInt(inputValue.slice(7), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(7), 10))) {
      workingArea.style.height = `${parseInt(inputValue.slice(7), 10)}px`;
    }
    else if(inputValue.slice(5, 8)==="fw-" && typeof parseInt(inputValue.slice(8), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(8), 10))) {
      workingArea.style.fontWeight = `${parseInt(inputValue.slice(8), 10)}`;
    }
    else if(inputValue.slice(5, 8)==="fs-" && typeof parseInt(inputValue.slice(8), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(8), 10))) {
      workingArea.style.fontSize = `${parseInt(inputValue.slice(8), 10)}px`;
    }
    else if(inputValue.slice(5, 8)==="br-" && typeof parseInt(inputValue.slice(8), 10) === "number" && !Number.isNaN(parseInt(inputValue.slice(8), 10))) {
      workingArea.style.borderRadius = `${parseInt(inputValue.slice(8), 10)}px`;
    }
    else {
        alert("Something went wrong.");
        return;
    }
  }
  else if(inputValue.slice(5,7)==="c-" || inputValue.slice(5,8)==="bg-" || inputValue.slice(5,8)==="ta-") {
    if(inputValue.slice(5,7)==="c-" && CSS.supports(`color: ${inputValue.slice(7)}`)) {
      workingArea.style.color = inputValue.slice(7);
    }
    else if(inputValue.slice(5,8)==="bg-" && CSS.supports(`background-color: ${inputValue.slice(8)}`)) {
      workingArea.style.backgroundColor = inputValue.slice(8);
    }
    else if(inputValue.slice(5,8)==="ta-" && CSS.supports(`text-align: ${inputValue.slice(8)}`)) {
      workingArea.style.textAlign = inputValue.slice(8);
    }
    else {
      alert("Something went wrong.");
      return;
    }
  }
  else {
    alert("Something went wrong.");
    return;
  }
})

btn2.addEventListener("click", () => {
  inputText.value = "";
  workingArea.removeAttribute("style");
})

function appendValue(val) {
  const display = document.getElementById("display");
  if (display.value === "0" && val !== ".") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "0";
}

function calculate() {
  try {
    const display = document.getElementById("display");
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  const display = document.getElementById("display");
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function toggleSign() {
  const display = document.getElementById("display");
  if (display.value !== "0") {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
    }
  }
}

// component adalah function yang menerima satu object sebagai parameter

function Component({ close, open, name }) {
  console.log(close);
  console.log(name);
  console.log(open);
}

Component({ open: "10:00", close: "22:00", name: "Print" });

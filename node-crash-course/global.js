console.log(global);

setTimeout(() => {
  console.log("I'm still waiting");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("I'm him");
}, 1000);
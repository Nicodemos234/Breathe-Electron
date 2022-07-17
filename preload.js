window.addEventListener('DOMContentLoaded', () => {
  const startExercise = () => {
    const counterDom = document.querySelector('#counter');
    const stepDom = document.querySelector('#step');
    let breatheIn = 3;
    let hold = 3;
    let breatheOut = 3;
    const interval = setInterval(() => {
      if(breatheIn >= 0) {
        breatheIn--;
        counterDom.innerHTML = breatheIn + 1;
        stepDom.innerHTML = 'Breathe in';
      } else if(hold >= 0){
        hold--;
        counterDom.innerHTML = hold + 1;
        stepDom.innerHTML = 'hold';
      } else {
        breatheOut--;
        counterDom.innerHTML = breatheOut + 1;
        stepDom.innerHTML = 'Breathe out'; 
        if(breatheOut === 0) {
          breatheIn = 3;
          hold = 3;
          breatheOut = 3;
        }
      }
    }, 1000)

  }
  document.querySelector('#start').addEventListener('click', startExercise)
})
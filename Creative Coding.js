// creating a loop for moving around all elements:


function drifting () {
    const makeRandColor = () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
  
        return `rgb(${r},${g},${b})`
     }
        var everything = document.querySelectorAll('*'), i;
          for (i = 0; i < everything.length; ++i) {
            everything[i].style.position = "absolute";
            everything[i].style.top = Math.random() * 100 + 'px';
            everything[i].style.left = Math.random() * 100 + 'px';
            everything[i].style.transition = "1s ease-in-out";
            document.body.style.backgroundColor = makeRandColor();

    
          }
        }
    setInterval(drifting, 2000)




    const makeRandColor = () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
  
        return `rgb(${r},${g},${b})`
     }
     
    setInterval(() => {
        document.body.style.backgroundColor = makeRandColor();
    },1000)
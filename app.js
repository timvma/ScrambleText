let texts = document.querySelectorAll('[data-scramble-text]')
function shuffleArray(x) {
    let array = x
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

texts.forEach(text => {
    let original = text.textContent.split("")
    let random = text.textContent.split("") 
    text.textContent=''
    let origin = document.createElement('span')
    let container = document.createElement('span')
 
    let jumble = shuffleArray(random)
    
    let few = 0

  

    text.appendChild(origin)
    text.appendChild(container)

    let looper =  setInterval(() => {
        origin.textContent += original[few]

        jumble.pop()
        shuffleArray(jumble)
        container.textContent = jumble.join("")
        few++;

        if(few > original.length-1){
          
            clearInterval(looper)

        }
        

    }, 50 );
    

    


   

    









 


   
        
    

        

    
      





    

})
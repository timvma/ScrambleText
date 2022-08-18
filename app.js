let txt = document.querySelectorAll('[data-scramble-text]')

function sA(x) {let array = x; for (let i = array.length - 1; i > 0; i--) {let j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]];}return array;}

txt.forEach(t => {    
    let original = t.textContent.split("")
    let random = t.textContent.split("") 
    t.textContent=''
    let origin = document.createElement('span')
    let container = document.createElement('span')
    let jumble = sA(random)
    let c = 0
    t.removeAttribute('style')

    t.appendChild(origin)
    t.appendChild(container)


    window.onload = (event) => {
        let looper =  setInterval(() => {
            origin.textContent += original[c]
    
            jumble.pop()
            sA(jumble)
            container.textContent = jumble.join("")
            c++;
    
            if(c > original.length-1){
                clearInterval(looper)
            }
        }, 50 );
        

    };




    

})
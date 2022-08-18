let txt = document.querySelectorAll('[data-scramble-text]')

function sA(x) {let array = x; for (let i = array.length - 1; i > 0; i--) {let j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]];}return array;}

txt.forEach(t => {    
    const original = t.textContent.split("")
    const random = t.textContent.split("") 

    t.textContent=''
    
    const origin = document.createElement('span')
    const container = document.createElement('span')
    const jumble = sA(random)

    let c = 0

    t.removeAttribute('style')
    t.appendChild(origin)
    t.appendChild(container)


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

})
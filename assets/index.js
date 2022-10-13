document.body.addEventListener("keyup" , (event)=>{
    soundPlay(event.code.toLowerCase())
})

function soundPlay(sound){
    let music = document.querySelector(`#s_${sound}`)
    let tecla = document.querySelector(`div[data-key="${sound}"]`)

    if(music){
        music.currentTime = 0;
        music.play()
    }
    if(tecla){
        tecla.classList.add('active')
        setTimeout(()=>{
            tecla.classList.remove('active')
        },70)
    }

}

let button =  document.querySelector(".composer button")
button.addEventListener('click' , ()=>{
    let song = document.querySelector("#input").value 
    if(song !== ''){
        let songArray = song.split('') 
        Composition(songArray)
    }
}) 

function Composition(ss){
    let wait = 0;
    for(let soundA of ss){
       setTimeout(()=>{
        soundPlay(`key${soundA}`)
       }, wait)
       wait += 250
    }
}






























/*document.body.addEventListener("keyup" , (event)=>{
    soundPlay(event.code.toLowerCase())
})

function soundPlay(sound){
    let music = document.querySelector(`#s_${sound}`)
    let tecla = document.querySelector (`div[data-key="${sound}"] `)

    if(music){
        music.currentTime =0;
        music.play()
    }
    if(tecla){
        tecla.classList.add("active")
        setTimeout(()=>{
            tecla.classList.remove("active")

        }, 70)
    }

}

let button = document.querySelector('.composer button')
button.addEventListener('click' , ()=>{
    let song = document.querySelector('#input').value 
    if(song !== ''){
      let  songArray = song.split('')
       Composition(songArray)
    }
})

function Composition (ss){
    let wait = 0;
    for(let soundA of ss ){
       setTimeout(()=>{
        soundPlay(`key${soundA}`)
       } , wait)

       wait += 250
    }
}*/
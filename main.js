
const hidden = document.querySelectorAll('.hidden');


window.addEventListener('scroll', checkEffects);

function checkEffects(){
    const trigger = window.innerHeight 

    hidden.forEach(sect => {
        const top = sect.getBoundingClientRect().top
        const point = 150;

        if(top < trigger - point){

            sect.classList.add('show')
        }
        else{
            sect.classList.remove('show')
        }
    })
}
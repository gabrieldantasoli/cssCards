//card1 interations starts

var colors = document.querySelectorAll('.colors div')
colors.forEach(item => item.addEventListener('click',function (e){
    colors.forEach(item => item.classList.remove('active')) ;
    document.querySelector(`#${e.target.id}`).classList.add('active')
})) ;

var numbers = document.querySelectorAll('.numbers div')
numbers.forEach(item => item.addEventListener('click',function (e){
    numbers.forEach(item => item.classList.remove('active')) ;
    document.querySelector(`#${e.target.id}`).classList.add('active')
})) ;

//card1 interations ends

// PRE LOADER 

window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});


// CLOSE BUTTON 

let c = document.getElementById('close');
c.addEventListener('click', function(){
    let a = document.getElementById('navBar');
    a.style.right = "-100vw";
});

// OPEN BUTTON 

let o = document.getElementById('open');
o.addEventListener('click', function(){
    let a = document.getElementById('navBar');
    a.style.right = "0";
});

// CLOSE ON CLICK 

let d = document.querySelectorAll('.close');
console.log(d);

for(let i of d)
{
    i.addEventListener('click', function(){
        let a = document.getElementById('navBar');
        a.style.right = "-100vw";
    });
}
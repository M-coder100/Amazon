
const category1 = document.getElementById('_cata_1'); 
const category2 = document.getElementById('_cata_2'); 
const category3 = document.getElementById('_cata_3'); 
const category4 = document.getElementById('_cata_4'); 
const category5 = document.getElementById('_cata_5'); 
const category6 = document.getElementById('_cata_6'); 
const category7 = document.getElementById('_cata_7'); 
const category8 = document.getElementById('_cata_8'); 
const category9 = document.getElementById('_cata_9'); 
const category10 = document.getElementById('_cata_10'); 
// const category11 = document.getElementById('_cata_11'); 

document.getElementById('category1').addEventListener('click', () => {
    category1.style.display = 'initial';
    start(500);
});
document.getElementById('category2').addEventListener('click', () => {
    category2.style.display = 'initial'; 
    start(500);
});
document.getElementById('category3').addEventListener('click', () => {
    category3.style.display = 'initial'; 
    start(500);
});
document.getElementById('category4').addEventListener('click', () => {
    category4.style.display = 'initial'; 
    start(500);
});
document.getElementById('category5').addEventListener('click', () => {
    category5.style.display = 'initial';
    start(500);
});
document.getElementById('category6').addEventListener('click', () => {
    category6.style.display = 'initial'; 
    start(500);
});
document.getElementById('category7').addEventListener('click', () => {
    category7.style.display = 'initial'; 
    start(500);
});
document.getElementById('category8').addEventListener('click', () => {
    category8.style.display = 'initial'; 
    start(500);
});
document.getElementById('category9').addEventListener('click', () => {
    category9.style.display = 'initial';
    start(500);
});
document.getElementById('category10').addEventListener('click', () => {
    category10.style.display = 'initial'; 
    start(500);
});
// document.getElementById('category11').addEventListener('click', () => {
//     category11.style.display = 'initial'; 
//     start(500);
// });

document.getElementById('BackButton1').addEventListener('click', () => {
    category1.style.display = 'none';
})
document.getElementById('BackButton2').addEventListener('click', () => {
    category2.style.display = 'none';
})
document.getElementById('BackButton3').addEventListener('click', () => {
    category3.style.display = 'none';
})
document.getElementById('BackButton4').addEventListener('click', () => {
    category4.style.display = 'none';
})
document.getElementById('BackButton5').addEventListener('click', () => {
    category5.style.display = 'none';
})
document.getElementById('BackButton6').addEventListener('click', () => {
    category6.style.display = 'none';
})
document.getElementById('BackButton7').addEventListener('click', () => {
    category7.style.display = 'none';
})
document.getElementById('BackButton8').addEventListener('click', () => {
    category8.style.display = 'none';
})
document.getElementById('BackButton9').addEventListener('click', () => {
    category9.style.display = 'none';
})
document.getElementById('BackButton10').addEventListener('click', () => {
    category10.style.display = 'none';
})
// document.getElementById('BackButton11').addEventListener('click', () => {
//     category3.style.display = 'none';
// })




// || \\ || // || \\ || // || \\ || // || \\ || // ||
// || \\ || // || \\ || // || \\ || // || \\ || // ||
// || \\ || // || \\ || // || \\ || // || \\ || // ||
// || \\ || // || \\ || // || \\ || // || \\ || // ||
// || \\ || // || \\ || // || \\ || // || \\ || // ||
// || \\ || // || \\ || // || \\ || // || \\ || // ||
// \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\
// // // // // // // // // // // // // // // // // //
function start(time) {
    const background = document.querySelector('.blur');
    const loader = document.querySelector('.loader');
    background.style.display = "initial";
    loader.style.display = "initial";
    setTimeout(() => {
        background.style.display = "none";
        loader.style.display = "none";
    }, time);
}
start(2000);
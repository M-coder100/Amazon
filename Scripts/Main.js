
const category1 = document.getElementById('_cata_1'); 
const category2 = document.getElementById('_cata_2'); 
const category3 = document.getElementById('_cata_3'); 
const category4 = document.getElementById('_cata_4'); 

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
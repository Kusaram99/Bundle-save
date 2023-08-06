const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const radioButtonsNodes = document.querySelectorAll('.radioBtn');
const sizeColorsDivsNodes = document.querySelectorAll('.size-color-boxes-container');
const boxesChildNode = document.querySelectorAll('.box');

// this function will get frist box data and call boxUpdaterFunction
box1.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[0]; // return html node
    const sizeBoxController = sizeColorsDivsNodes[0]; // return html node
    // Passing 3 nodes as argument to boxUpdaterFunction
    boxUpdaterFunction(radiobtn, sizeBoxController, box1);

});
// this function will get second box data and call boxUpdaterFunction
box2.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[1]; // return html node
    const sizeBoxController = sizeColorsDivsNodes[1]; // return html node
    // Passing 3 nodes as argument to boxUpdaterFunction
    boxUpdaterFunction(radiobtn, sizeBoxController, box2);
});
// this function will get third box data and call boxUpdaterFunction
box3.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[2]; // return html node
    const sizeBoxController = sizeColorsDivsNodes[2]; // return html node
    // Passing 3 nodes as argument to boxUpdaterFunction
    boxUpdaterFunction(radiobtn, sizeBoxController, box3);
});


// this function will update current box's style
const boxUpdaterFunction = (radiobtn, sizeBoxController, box) => {

    // remove active classes
    for (let i = 0; i < boxesChildNode.length; i++) {
        // it will remove radio button outline
        radioButtonsNodes[i].classList.remove('active-outline');
        // it will remove radio button's inner div's background
        radioButtonsNodes[i].children[0].classList.remove('active-bg');
        // It will remove active box class from all boxes
        boxesChildNode[i].classList.remove('active-box-style')
        // it will put display none, which is display block
        boxesChildNode[i].children[1].style.display = 'none'; 
    }

    // add active aclass
    radiobtn.classList.add('active-outline');
    radiobtn.children[0].classList.add('active-bg');
    box.classList.add('active-box-style');
    // console.log("radio btn: ", radiobtn.children[0])
    sizeBoxController.style.display = "block";

}

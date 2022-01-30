function toggle() {
    let textElementOfButton = document.getElementsByTagName('span')[0];
    //console.log(textElementOfButton);
    let newElement = document.getElementById('extra');
    if(textElementOfButton.textContent === 'More'){
        textElementOfButton.textContent = 'Less';
        
        newElement.style.display = 'block';
    }else{
        textElementOfButton.textContent = 'More';
        newElement.style.display = 'none';

    }
    
}
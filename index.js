

function toggleBulb() {
    const bulb = document.getElementById('bulb');
    const button = document.getElementById('butt');
    button.addEventListener('click', function saim() {
        if (bulb.src.includes('bulb_off.png')) {
        bulb.src = './Images/blub_on.png';
        button.textContent = 'OFF';
    } else {
        bulb.src = './Images/bulb_off.png';
        button.textContent = 'ON';
    }
    })
  
}

const toggleLightModeButton = document.querySelector<HTMLButtonElement>('.toggle-btn');
toggleLightModeButton?.addEventListener('click', toggleLightMode);
console.log(toggleLightModeButton);

export function toggleLightMode (){
    if (!toggleLightModeButton) return;

    document.body.classList.toggle('body--dark-mode')

    if (document.body.classList.contains('body--dark-mode')){
        toggleLightModeButton.innerHTML='Välj mörkt läge'
        console.log('mörkt läge');
    } 
    
    else {
        toggleLightModeButton.innerHTML ='Välj ljust läge'
    console.log('ljust läge')
    }
    
}

export default toggleLightMode
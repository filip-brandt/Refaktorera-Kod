import './style.scss';
import {createHtml} from './src/js/createHtml.ts';
import {toggleLightMode} from './src/js/toggleDarkmode.ts';

function init (){



toggleLightMode();
    createHtml ();

}

init ();





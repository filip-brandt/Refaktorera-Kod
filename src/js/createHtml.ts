import {getPodcasts} from './api.ts'

interface IPodcast {
    name: string;
    description: string;
    programurl: string;
    socialimage: string;
}

interface IPodcastResponse {
    programs: IPodcast[];
}

const podCastContainer = document.querySelector('.section__podlist-pods');

export async function createHtml (){
    if (!podCastContainer) return;

    const podCasts: IPodcastResponse = await getPodcasts ();
    podCasts.programs.forEach((_, i) => {
    const innerArticle = createInnerArticle();

createImg();

    const textDiv = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
        const innerArticle = document.createElement('article');
        innerArticle.setAttribute('class', 'section__article-inner');
        podCastContainer?.appendChild(innerArticle);
        return innerArticle;
    }

    function createTextDiv() {
        const textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'section__article-text');
        innerArticle.appendChild(textDiv);
        return textDiv;
    }

    function createLink (){
        const linkPlacement = document.createElement('a');
        const linkText = document.createTextNode('Lyssna här');
        linkPlacement.setAttribute('href', podCasts.programs[i].programurl);
        linkPlacement.appendChild(linkText);
        textDiv.appendChild(linkPlacement)
    }
    function createImg() {
        const imgPlacement = document.createElement('IMG');
        imgPlacement.setAttribute('src', podCasts.programs[i].socialimage);
        imgPlacement.setAttribute('alt', `programbild för ${podCasts.programs[i].name}`);
        imgPlacement.setAttribute('width', '100');
        imgPlacement.setAttribute('height', '100')
        innerArticle.appendChild(imgPlacement);
    }

    function createP() {
    const descPlacement = document.createElement('p');
    const desc = document.createTextNode(podCasts.programs[i].description);
    descPlacement.appendChild(desc);
    textDiv.appendChild(descPlacement);
}

function createHeader() {
    const headerPlacement = document.createElement('h2');
    const programName = document.createTextNode(podCasts.programs[i].name);
    headerPlacement.appendChild(programName);
    textDiv.appendChild(headerPlacement);
}
    
})
}

export default createHtml
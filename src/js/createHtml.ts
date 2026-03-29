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

const podcastContainer = document.querySelector('.section__podlist-pods');

function createPodcastArticle(): HTMLElement {
    const podcastArticle = document.createElement('article');
    podcastArticle.setAttribute('class', 'section__article-inner');
    return podcastArticle;
}

function createPodcastTextContainer(): HTMLDivElement {
    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'section__article-text');
    return textContainer;
}

function createPodcastImage(podcast: IPodcast): HTMLImageElement {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', podcast.socialimage);
    imageElement.setAttribute('alt', `programbild för ${podcast.name}`);
    imageElement.setAttribute('width', '100');
    imageElement.setAttribute('height', '100');
    return imageElement;
}

function createPodcastTitle(podcast: IPodcast): HTMLHeadingElement {
    const titleElement = document.createElement('h2');
    titleElement.textContent = podcast.name;
    return titleElement;
}

function createPodcastDescription(podcast: IPodcast): HTMLParagraphElement {
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = podcast.description;
    return descriptionElement;
}

function createPodcastLink(podcast: IPodcast): HTMLAnchorElement {
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', podcast.programurl);
    linkElement.textContent = 'Lyssna här';
    return linkElement;
}

function createPodcastCard(podcast: IPodcast): HTMLElement {
    const podcastArticle = createPodcastArticle();
    const textContainer = createPodcastTextContainer();

    podcastArticle.appendChild(createPodcastImage(podcast));
    textContainer.appendChild(createPodcastTitle(podcast));
    textContainer.appendChild(createPodcastDescription(podcast));
    textContainer.appendChild(createPodcastLink(podcast));
    podcastArticle.appendChild(textContainer);

    return podcastArticle;
}

export async function createHtml (){
    if (!podcastContainer) return;

    const podcastResponse: IPodcastResponse = await getPodcasts();
    podcastResponse.programs.forEach((podcast) => {
        const podcastCard = createPodcastCard(podcast);
        podcastContainer.appendChild(podcastCard);
    });
}

export default createHtml
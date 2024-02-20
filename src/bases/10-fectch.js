const apikey = 't1GlyWSjGE0F3eHEPzERWESN0YbxztPi';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        img.width = 200;        
        img.height = 200;        

        document.body.append(img);
    })
    .catch(console.warn);





const getImagenPromesa = () => {
    return new Promise((resolve,reject) => {
        resolve('https://asasasa.com')
    })
} 

getImagenPromesa().then(console.log);
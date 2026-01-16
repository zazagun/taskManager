const getData = (url) =>{
    return new Promise ((resolve, reject) =>{
        fetch(url)
         .then(toJSON => toJSON.json())
         .then(jsonData => resolve(jsonData))
         .catch(error => console.log(error.name))
    })
}

export {getData}
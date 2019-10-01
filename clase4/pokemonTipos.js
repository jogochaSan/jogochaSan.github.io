let peticionAutor = (autor) => {

    let URL = 'http://openlibrary.org/search.json?author=' + autor;

    request.get(URL, (error, response, body) => {
        response.statusCode == 200 ?
            console.log(
                JSON.parse(body)
                .docs
                .map(doc => doc.title_suggest)
            ) :
            console.log(error);
    })
}

//peticionAutor('lovecraft');
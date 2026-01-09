function loadJson(){
    fetch('../DataBase/User.json')
    .then(response => console.log(response))
        .catch(error => console.log(error));
}

loadJson();
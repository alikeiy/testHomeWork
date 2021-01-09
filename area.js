$.ajax({
    headers: {
        'X-Auth-Token': '5d051cd6db9846b9944c6fed4b59f7e5'
    },
    url: 'https://api.football-data.org/v2/competitions/SA/scorers',
    dataType: 'json',
    type: 'GET',
}).done(function (response) {
    console.log(response);
});
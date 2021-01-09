$.ajax({
    headers: {
        'X-Auth-Token': '5d051cd6db9846b9944c6fed4b59f7e5'
    },
    url: 'http://api.football-data.org/v2/competitions/',
    dataType: 'json',
    type: 'GET',
}).done(function (response) {
    let competitions = response.competitions
    let nama = "";
    competitions.forEach((list, i) => {
        nama += "<tr><td>" + list.id +
            "</td><td>" + list.name +
            "</td> <td>" + list.plan +
            "</td></tr>";
        
    competitions.length = 10;
    });
    $('#table1').append(nama);
    // do something with the response, e.g. isolate the id of a linked resource   
    console.log(competitions);
});

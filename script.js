init()

function init() {

    var url = "https://corona.lmao.ninja/v2/states/Maryland?yesterday"

    var data = ''

    $.get(url, function (data) {
        console.log(data)

        data = ` 
            <td>${data.cases.toLocaleString()}</td>
            <td>${data.tests.toLocaleString()}</td>
            <td>${data.deaths.toLocaleString()}</td>
            <td>${data.population.toLocaleString()}</td>
            
            
            `

        $("#data").html(data)

    })
}



function refreshData() {
    clearData()
    init()
}

function clearData() {
    $("#data").empty()
    init()
}

// <td id="percentage">${(((data.deaths) / (data.population)) * 100).toLocaleString()}</td>
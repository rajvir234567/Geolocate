var coords = {}

$(document).ready(function () {
    getCoords();
})

function getCoords() {
    var parameters = new URLSearchParams(window.location.search)
    
    if(parameters.has("source") && parameters.has("destination")) {
        var source = parameters.get("source")
        var destination = parameters.get("destination")
        
        coords.s_lat = source.split(";")[0]
        coords.s_lng = source.split(";")[1]

        coords.d_lat = destination.split(";")[0]
        coords.d_lng = destination.split(";")[1]
    } else {
        alert("please select coordinates")
        window.history.back()
    }
}
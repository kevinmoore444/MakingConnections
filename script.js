var deletefortodd = document.querySelector("#deleteuponresponsetodd")
var deleteforphil = document.querySelector("#deleteuponresponsephil")
var connectionrequestavailable = document.querySelector("#connectionrequestcount")
var updatename = document.querySelector("#updatename")


var connectionrequests = 2

function respondtotodd(){
    deletefortodd.remove()
    connectionrequests--
    connectionrequestavailable.innerText = connectionrequests
}

function respondtophil(){
    deleteforphil.remove()
    connectionrequests--
    connectionrequestavailable.innerText = connectionrequests
}

function editprofile(){
    updatename.innerText = "Jane Doe"
}
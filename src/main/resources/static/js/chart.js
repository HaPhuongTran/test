
var indexof;
var arr1 = [];
var lable_data = [];
var ctx;
var response = null;
var VNET = "VNET";
var stompClient = null;
var client = null;
load_first();


var color = ["#000000","#2F4F4F", "#990033", "#528B8B", "#EEE8AA", "#8B4513", "#8B795E", "#E0EEE0", "#CDC1C5", "#E6E6FA", 
            "#8470FF", "#473C8B", "#27408B", "#0000EE", "#191970", "#B0E0E6", "#00B2EE", "#00688B", "#6CA6CD", "#E0FFFF"]

//***************************************************************************//
function load_first(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8000/list/listdate";
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function (responseText) {
        response = JSON.parse(this.response);
        arr1 = Object.values(response);
    };
    xhr.send();
    document.getElementById("namestock").value
}
connect();

//***************************************************************************//

ctx = document.getElementById('myChart').getContext('2d');
lable_data = arr1;
var data1 = {
    labels: lable_data,
    datasets:[]
};

var chart = new Chart(ctx, {
    type: 'line',
    data: data1,
    options: {}
});

var datanamestock =[];
var count =0;

display_stock(VNET);
//***************************************************************************//

function connect() {
    var socket = new SockJS('/my-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function () {
        stompClient.subscribe('/topic/listdata',function(){
            client.onmessage =  function(event){
                display_stock(event.data);
            }
        });
    });
}

function sent_data(name__Stock){
    stompClient.send("/app/listdata", {}, JSON.stringify({'name': name__Stock}));
}

//***************************************************************************//

//***************************************************************************//
function add_tag(add_value){
    //value_namestock = document.getElementById("namestock").value;
    var div_add = document.createElement("div");
    var sub_div_add = document.createElement("div");
    var h3_add = document.createElement ("h3");
    var p_add = document.createElement ("p");
    var button_add = document.createElement("button");

    h3_add.style.color = "#FFFFFF";
    for(var i = 0; i<=datanamestock.length; i++){
        if(add_value.localeCompare(datanamestock[i])==0)
        sub_div_add.style.backgroundColor = color[i];
    }
    

    div_add.classList.add("name_stock");
    div_add.id = add_value;
    sub_div_add.classList.add("sub_div");
    button_add.id = add_value +"_add";
    button_add.classList.add("button_add");
    

    var textnode = document.createTextNode(add_value);
    var text_button = document.createTextNode("X");
    var text_add = document.createTextNode("Microsoft Corporation (MSFT) Prices, Dividends, Splits and Trading Volume");
    
    div_add.appendChild(sub_div_add);
    div_add.appendChild(p_add);
    sub_div_add.appendChild(button_add);
    sub_div_add.appendChild(h3_add);
    button_add.appendChild(text_button);
    p_add.appendChild(text_add);
    h3_add.appendChild(textnode);

    document.getElementById("name_of_stock").appendChild(div_add);

}
//***************************************************************************//

//***************************************************************************//

function button_close(button_value){
    var b_close = document.getElementById(button_value +"_add");
    var get_id_stock = document.getElementById(button_value);
    b_close.addEventListener("click", function(){
        get_id_stock.remove();
        for(var i = 0; i<datanamestock.length; i++){
            if(button_value.localeCompare(datanamestock[i]) ==0){
                datanamestock.splice(i,1);
            }
        }
        for( var index =0; index< data1.datasets.length; index++){
            if(data1.datasets[index].label == button_value){
                data1.datasets.splice(index,1);
                chart.update();
            }
        }
    });
}

//***************************************************************************//
//***************************************************************************//

function reqListener (value_namestock) {
    for(var i = 0; i<=datanamestock.length; i++){
        if(value_namestock.localeCompare(datanamestock[i]) !=0){
            var color_value = color[i];
            count =1;
        }
        else {count =0;var color_value = color[i]; break;}
    }
    if(count == 1){
        arr = Object.values(response);
        var newDataset = {
            label: value_namestock,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: color_value,
            data: arr
        }
        data1.datasets.push(newDataset);
        chart.update();
        datanamestock.push(value_namestock);

        add_tag(value_namestock);
        button_close(value_namestock);
        
    }
    else {
        for(indexof =0; indexof<data1.datasets.length; indexof++){
            if((data1.datasets[indexof].label).localeCompare(value_namestock) ==0){
                data1.datasets.splice(indexof,1); break;
            }
        }
        arr = Object.values(response);
        var newDataset = {
            label: value_namestock,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: color_value,
            data: arr
        }
        data1.datasets.push(newDataset);
        chart.update();
    }
}

//***************************************************************************//
//***************************************************************************//
function click_display_stock(){
   
    //display_stock(document.getElementById("namestock").value);
    sent_data(document.getElementById("namestock").value);
}
function display_stock(value_stock){
    //value_stock = document.getElementById("namestock").value;
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/list/" + value_stock;
    xhr.open("GET", url, false);
    xhr.addEventListener("load", function() {
            reqListener(value_stock);
        });
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function (responseText) {
        response = JSON.parse(this.response);
        var arr = [];
    };
    xhr.send();
}
//***************************************************************************//
//***************************************************************************//

function add_stock(){
    value_stock = document.getElementById("namestock").value;
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/add/stock";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    display_stock();
    };
    var data = JSON.stringify({"nameOfStock": document.getElementById("namestock").value, "data": document.getElementById("data").value});
    xhr.send(data);
}



// var name_stock_array = ["no_name", "VNET","AGTK", "AKAM", "BIDU", "BCOR", "WIFI", "BRNW", "CARB", "JRJC", "CCIH", "CHICF", "CCOI", "CXDO", "CRWG", "EATR", "EDXC",
//                         "ENV", "FB", "FLPC", "FZRO", "GEGI", "GDDY", "IAC", "IIJI", "IPAS","JCOM", "LOGL", "LLNW", "MOMO", "NTES", "EGOV", "OTOW", "OPESY",
//                         "PTOP", "SIFY", "SINA", "SMCE", "SOHU", "FCCN", "SNST", "TCTZF", "TCEHY", "TMMI", "TRON", "TCX", "TWTR", "WEB", "XNET", "YAHOY", "YNDX"];

//data.datasets[i].label

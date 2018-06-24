
var arr1 = [];
var arr2 = [];
var indexof;
var response = null;
var VNET = "VNET";

var xhr = new XMLHttpRequest();
    var url = "http://localhost:8000/list/listdate";
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function (responseText) {
        response = JSON.parse(this.response);
        arr1 = Object.values(response);
    };
    xhr.send();


var ctx = document.getElementById('myChart').getContext('2d');
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

var datanamestock =[""];
var count =0;



var xhr1 = new XMLHttpRequest();
var url1 = "http://127.0.0.1:8000/list/" + VNET;
xhr1.open("GET", url1, false);
xhr1.addEventListener("load", reqListener_first);
xhr1.setRequestHeader("Content-Type", "application/json");
xhr1.onreadystatechange = function (responseText) {
//alert(JSON.stringify(responseText));
    response = JSON.parse(this.response);
    arr2 = [];
};
xhr1.send();

function add_tag(){
    value_namestock = document.getElementById("namestock").value;
    var div_add = document.createElement("div");
    var sub_div_add = document.createElement("div");
    var h3_add = document.createElement ("h3");
    var p_add = document.createElement ("p");
    var button_add = document.createElement("button");

    h3_add.style.color = "#FFFFFF";
    sub_div_add.style.backgroundColor = "#990033";
    

    div_add.classList.add("name_stock");
    div_add.id = value_namestock;
    sub_div_add.classList.add("sub_div");
    button_add.id = value_namestock +"_add";
    button_add.classList.add("button_add");
    

    var textnode = document.createTextNode(value_namestock);
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


function reqListener () {
    value_namestock = document.getElementById("namestock").value;
    for(var i = 0; i<datanamestock.length; i++){
        if(value_namestock.localeCompare(datanamestock[i]) !=0){
            count =1;
        }
        else {count =0; indexof =i; break;}
    }
    if(count == 1){
        arr = Object.values(response);
        var newDataset = {
            label: value_namestock,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#000000',
            data: arr
        }
        data1.datasets.push(newDataset);
        chart.update();
        datanamestock.push(value_namestock);

        add_tag();
        
        var b_close = document.getElementById(value_namestock +"_add");
        var get_id_stock = document.getElementById(value_namestock);
        b_close.addEventListener("click", function(){
            get_id_stock.remove();
            for( var index =0; index< data1.datasets.length; index++){
                if(data1.datasets[index].label == value_namestock){
                    data1.datasets.splice(index,1);
                    chart.update();
                }
            }
        });
    }
    else{
        data1.datasets.splice(indexof-1,1);
        arr = Object.values(response);
        var newDataset = {
            label: value_namestock,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#000000',
            data: arr
        }
        data1.datasets.push(newDataset);
        chart.update();
        add_tag();
    }
}

function reqListener_first(){
    for(var i = 0; i<datanamestock.length; i++){
    if(VNET.localeCompare(datanamestock[i]) !=0){
        count =1;
    }
    else {count =0; indexof =i; break;}
    }
    if(count == 1){
        arr2 = Object.values(response);
        var newDataset = {
            label: VNET,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#000000',
            data: arr2
        }
        data1.datasets.push(newDataset);
        chart.update();
        datanamestock.push(VNET);

        var div_add = document.createElement("div");
        var sub_div_add = document.createElement("div");
        var h3_add = document.createElement ("h3");
        var p_add = document.createElement ("p");
        var button_add = document.createElement("button");

        h3_add.style.color = "#FFFFFF";
        sub_div_add.style.backgroundColor = "#990033";
        

        div_add.classList.add("name_stock");
        div_add.id = VNET;
        sub_div_add.classList.add("sub_div");
        button_add.id = VNET +"_add";
        button_add.classList.add("button_add");
        

        var textnode = document.createTextNode(VNET);
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
        
        var b_close = document.getElementById(VNET +"_add");
        var get_id_stock = document.getElementById(VNET);
        b_close.addEventListener("click", function(){
            get_id_stock.remove();
            for( var index =0; index< data1.datasets.length; index++){
                if(data1.datasets[index].label == VNET){
                    data1.datasets.splice(index,1);
                    chart.update();
                }
            }
        });
    }
    else{
        data1.datasets.splice(indexof-1,1);
        arr = Object.values(response);
        var newDataset = {
            label: VNET,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#000000',
            data: arr
        }
        data1.datasets.push(newDataset);
        chart.update();
    }
}

//alert(newdata);


function display_stock(){
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/list/" + document.getElementById("namestock").value;
    xhr.open("GET", url, false);
    xhr.addEventListener("load", reqListener);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function (responseText) {
    //alert(JSON.stringify(responseText));
        response = JSON.parse(this.response);
        var arr = [];
    };
    xhr.send();
}

function add_stock(){
    
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/add/stock";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    alert(this.status);
    display_stock();
    };
    var data = JSON.stringify({"nameOfStock": document.getElementById("namestock").value, "data": document.getElementById("data").value});
    xhr.send(data);
}


// var name_stock_array = ["no_name", "VNET","AGTK", "AKAM", "BIDU", "BCOR", "WIFI", "BRNW", "CARB", "JRJC", "CCIH", "CHICF", "CCOI", "CXDO", "CRWG", "EATR", "EDXC",
//                         "ENV", "FB", "FLPC", "FZRO", "GEGI", "GDDY", "IAC", "IIJI", "IPAS","JCOM", "LOGL", "LLNW", "MOMO", "NTES", "EGOV", "OTOW", "OPESY",
//                         "PTOP", "SIFY", "SINA", "SMCE", "SOHU", "FCCN", "SNST", "TCTZF", "TCEHY", "TMMI", "TRON", "TCX", "TWTR", "WEB", "XNET", "YAHOY", "YNDX"];

// var color = ["no_name", "#000000","#2F4F4F", "#990033", "#528B8B", "#EEE8AA", "#8B4513", "#8B795E", "#E0EEE0", "#CDC1C5", "#E6E6FA", 
//             "#8470FF", "#473C8B", "#27408B", "#0000EE", "#191970", "#B0E0E6", "#00B2EE", "#00688B", "#6CA6CD", "#E0FFFF",
//             "#5F9EA0", "#53868B", "#48D1CC", "#00CED1", "#40E0D0", "#00868B", "#76EEC6", "#9BCD9B", "#2E8B57", "#9AFF9A",
//             "#00EE76", "#008B45", "#00CD00", "#008B00", "#006400", "#20B2AA", "#00FA9A", "#ADFF2F", "#B3EE3A", "#556B2F",
//             "#A2CD5A", "#8B8B00", "#CDAD00", "#CD9B1D", "#8B658B", "#8B3A3A", "#CD6839", "#8B1A1A", "#8B0A50", "#551A8B"]

// var data_num = [23,45,2,6,1,56,38,23,57,68,43,13,76,34, 100,57,277,345,78,1111,2075, 56,47,33,68,2345,670,135];



 // var ctx = document.getElementById('myChart').getContext('2d');

// lable_data = ["January", "February", "March", "April", "May", "June", "July"];
// var data = {
//          labels: lable_data,
//          datasets:[{
//                     label: "VNET",
//                     backgroundColor: 'rgba(255, 255, 255, 0)',
//                     borderColor: "#000000",
//                     data: [23,45,2,6,1,56,38],
//                 }]
// };

// var chart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {}
// });

// var input = document.getElementById("fill_stock");
// input.addEventListener("keyup", function(event){
//     event.preventDefault();
//     if(event.keyCode == 13 || event.which == 13){
//         document.getElementById("add").click();
//     }
// });

// function add(){

//     var get_name_stock = document.getElementById("fill_stock").value;
//     for(var i =0; i<name_stock_array.length; i++){
//         if(name_stock_array[i].localeCompare(get_name_stock) == 0){

//             var div_add = document.createElement("div");
//             var sub_div_add = document.createElement("div");
//             var h3_add = document.createElement ("h3");
//             var p_add = document.createElement ("p");
//             var button_add = document.createElement("button");

//             h3_add.style.color = "#FFFFFF";
//             sub_div_add.style.backgroundColor = color[i];
            

//             div_add.classList.add("name_stock");
//             div_add.id = get_name_stock;
//             sub_div_add.classList.add("sub_div");
//             button_add.id = color[i];
//             button_add.classList.add("button_add");
            

//             var textnode = document.createTextNode(get_name_stock);
//             var text_button = document.createTextNode("X");
//             var text_add = document.createTextNode("Microsoft Corporation (MSFT) Prices, Dividends, Splits and Trading Volume");
            
//             div_add.appendChild(sub_div_add);
//             div_add.appendChild(p_add);
//             sub_div_add.appendChild(button_add);
//             sub_div_add.appendChild(h3_add);
//             button_add.appendChild(text_button);
//             p_add.appendChild(text_add);
//             h3_add.appendChild(textnode);

//             document.getElementById("name_of_stock").appendChild(div_add);


//             var newdata =[];
//             //add data into data array
//                 for(var t = (i*lable_data.length)-lable_data.length; t<(i*lable_data.length); t++){
//                     newdata.push(data_num[t]);
//                 }
//                 //alert(newdata);
//                 var newDataset = {
//                     label: get_name_stock,
//                     backgroundColor: 'rgba(255, 255, 255, 0)',
//                     borderColor: color[i],
//                     data: newdata,
//                 }
//                 data.datasets.push(newDataset);
//                 chart.update();
//                 newdata=[];

//             document.getElementById("fill_stock").value = '';
            
//             break;
//         }
//     } 
//     var b_close = document.getElementById(color[i]);
//     var get_id_stock = document.getElementById(get_name_stock);
//     b_close.addEventListener("click", function(){
//         get_id_stock.remove();
//         for( var index =0; index< data.datasets.length; index++){
//             if(data.datasets[index].label == get_name_stock){
//                 data.datasets.splice(index,1);
//                 chart.update();
//             }
//         }
//     });   
// }

//data.datasets[i].label

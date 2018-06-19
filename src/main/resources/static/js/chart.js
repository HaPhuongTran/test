

 

// var name_stock_array = ["no_name", "VNET","AGTK", "AKAM", "BIDU", "BCOR", "WIFI", "BRNW", "CARB", "JRJC", "CCIH", "CHICF", "CCOI", "CXDO", "CRWG", "EATR", "EDXC",
//                         "ENV", "FB", "FLPC", "FZRO", "GEGI", "GDDY", "IAC", "IIJI", "IPAS","JCOM", "LOGL", "LLNW", "MOMO", "NTES", "EGOV", "OTOW", "OPESY",
//                         "PTOP", "SIFY", "SINA", "SMCE", "SOHU", "FCCN", "SNST", "TCTZF", "TCEHY", "TMMI", "TRON", "TCX", "TWTR", "WEB", "XNET", "YAHOY", "YNDX"];

// var color = ["no_name", "#000000","#2F4F4F", "#990033", "#528B8B", "#EEE8AA", "#8B4513", "#8B795E", "#E0EEE0", "#CDC1C5", "#E6E6FA", 
//             "#8470FF", "#473C8B", "#27408B", "#0000EE", "#191970", "#B0E0E6", "#00B2EE", "#00688B", "#6CA6CD", "#E0FFFF",
//             "#5F9EA0", "#53868B", "#48D1CC", "#00CED1", "#40E0D0", "#00868B", "#76EEC6", "#9BCD9B", "#2E8B57", "#9AFF9A",
//             "#00EE76", "#008B45", "#00CD00", "#008B00", "#006400", "#20B2AA", "#00FA9A", "#ADFF2F", "#B3EE3A", "#556B2F",
//             "#A2CD5A", "#8B8B00", "#CDAD00", "#CD9B1D", "#8B658B", "#8B3A3A", "#CD6839", "#8B1A1A", "#8B0A50", "#551A8B"]

// var data_num = [23,45,2,6,1,56,38,23,57,68,43,13,76,34, 100,57,277,345,78,1111,2075, 56,47,33,68,2345,670,135];

function add_stock(){
    
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/add";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    alert(this.status);
    };
    var data = JSON.stringify({"nameOfStock": document.getElementById("namestock").value, "data": document.getElementById("data").value});
    xhr.send(data);
}

 var ctx = document.getElementById('myChart').getContext('2d');

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



@Override
    public List<Stock> list(){
          Session session = entitymanger.unwrap(SessionFactory.class).openSession();
          CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
          CriteriaQuery<Stock> criteriaQuery = criteriaBuilder.createQuery(Stock.class);
          Root<Stock> root =criteriaQuery.from(Stock.class);
          criteriaQuery.select(root);
          Query<Stock> query = session.createQuery(criteriaQuery);
          return query.getResultList();
    }
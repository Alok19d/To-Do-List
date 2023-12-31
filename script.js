var date = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let curr_day = weekday[date.getUTCDay()];

let set_day = document.querySelector('.day').innerHTML = curr_day;

// Setting Date, Month and Year
let curr_date = date.getDate();
if (curr_date < 10) curr_date = '0' + curr_date;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let curr_month = month[date.getUTCMonth()];
let curr_year = date.getFullYear();

let formatted_date= curr_month +" "+ curr_date+", "+curr_year;
let set_date = document.querySelector('.date').innerHTML = formatted_date;

//Map Element
var item=[]; //{val,cmp}
function ref_items(){
    if(item.length!=0){
    let tsk=``;
            for(let i=item.length-1;i>=0;i--){
                if(item[i].cmp==0){
                    let iHtml = `<div class="tsk"><p class="t${i}" onclick="tsksch('t${i}')">`+item[i].val+`</p><i class="fa-solid fa-trash" onclick="del_item(${i})"></i></div>`;
                    tsk += iHtml;
                }
            }
            for(let i=item.length-1;i>=0;i--){
                if(item[i].cmp==1){
                    let iHtml = `<div class="tsk"><p class="t${i} cmp_tsk" onclick="tsksch('t${i}')">`+item[i].val+`</p><i class="fa-solid fa-trash" onclick="del_item(${i})"></i></div>`;
                    tsk += iHtml;
                }
            }
            document.getElementsByClassName("items")[0].innerHTML = tsk;
    }
    else{
        document.getElementsByClassName("items")[0].innerHTML=`<center><span class="empty_list">No items Found</span></center>`;
    }
}
ref_items();
//Function Show Input
function show_inp(){
    let elem = document.getElementsByClassName('new_task')[0];
    elem.style.display="inline-block";
}

// Function task switch(del-notdel)
function tsksch(t){
    let pos = Number.parseInt(t[1]);
    if(item[pos].cmp==0){
        item[pos].cmp=1;
    }
    else{
        item[pos].cmp=0;
    }
    ref_items();
}

// Function Add input on clicking enter
var input = document.getElementsByClassName("inp_fld")[0];
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the function 
    add_item();
  }
});

// Function Add input on clicking outside input
function add_item(){
    let inp = document.getElementsByClassName("inp_fld")[0].value;
    let remspainp = inp.split(" ").join("");
    if(remspainp.length != 0){
        item.push({val:inp,cmp:0});
        document.getElementsByClassName("inp_fld")[0].value="";
        ref_items();
        let elem = document.getElementsByClassName('new_task')[0];
        elem.style.display="none";
    }
}

// Function Delete Item
function del_item(t){
    let deleted = item.splice(t,1);
    ref_items();
}

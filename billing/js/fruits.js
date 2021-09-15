// fruits.js
var myprd=
[
    {
        product:"Apple",
        Price:50
    },
    {
        product:"Grapes",
        Price:50
    },
    {
        product:"Orange",
        Price:50
    },
    {
        product:"Bananna",
        Price:50
    },
];
var x=0;
var prd=document.querySelector(".opt").value;
 function myfun()
 {
    if (prd==myprd[0].product)
    {
    alert("prds r same")
    }
    var showdata=document.createElement("div");
    showdata.setAttribute("class","datas")
    var sd=document.querySelector("#right").appendChild(showdata);
    sd=prd;
    // alert(sd);
    document.getElementsByClassName("data").inntext=sd;
    
    
 }
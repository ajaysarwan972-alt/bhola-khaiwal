// 🔥 MENU DATA
const MENU_ITEMS = [

{name:"🏠 Home", link:"home.html"},

{name:"👤 Profile", link:"profile.html"},

{name:"💳 UPI Details", link:"deposit.html"},

{name:"🏦 Bank Details", link:"withdraw.html"},

{name:"📜 History", link:"userhistory.html"},


// 🔥 RESULT MARKET

{name:"📊 DESHAWAR", link:"market.html?market=dswr"},

{name:"📊 FARIDABAD", link:"market.html?market=frbd"},

{name:"📊 GAZIABAD", link:"market.html?market=gzbd"},

{name:"📊 GALI", link:"market.html?market=gali"},

{name:"📊 TAJ", link:"market.html?market=taj"},


{name:"💰 Winning", link:"userwining.html"},

{name:"📊 Game Rates", link:"#"},


{name:"📄 Terms", link:"terms.html"},

{name:"🚪 Logout", link:"logout"}

];


// 🔥 MENU + OVERLAY CREATE
document.body.insertAdjacentHTML("beforeend", `

<div id="sideMenu" style="
position:fixed;
top:0;
left:-100%;
width:80%;
height:100%;
background:#fff;
z-index:9999;
padding:15px;
transition:0.3s;
border-top-right-radius:20px;
border-bottom-right-radius:20px;
overflow:auto;
">

<h2 style="margin-bottom:15px;">
Menu
</h2>

<div id="menuItems"></div>

</div>


<div id="overlay" onclick="closeMenu()" style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:none;
z-index:9998;
"></div>

`);


// 🔥 MENU ITEMS LOAD
let html = "";

MENU_ITEMS.forEach(item=>{

html += `

<div style="
padding:15px;
margin-top:10px;
background:#f2f2f2;
border-radius:12px;
font-weight:bold;
cursor:pointer;
display:flex;
justify-content:space-between;
align-items:center;
" onclick="handleMenu('${item.link}')">

<span>${item.name}</span>

<span>›</span>

</div>

`;

});

document.getElementById("menuItems").innerHTML = html;


// 🔥 OPEN MENU
function openMenu(){

document.getElementById("sideMenu").style.left = "0";

document.getElementById("overlay").style.display = "block";

}


// 🔥 CLOSE MENU
function closeMenu(){

document.getElementById("sideMenu").style.left = "-100%";

document.getElementById("overlay").style.display = "none";

}


// 🔥 HANDLE MENU
function handleMenu(link){

// 🔥 GAME RATE POPUP
if(link === "#"){

alert(
"RATE LIST:-\n\n" +

"• JODI RATE: 1 KE 90\n\n" +

"• HARUF RATE: 10 KE 90\n\n" +

"• CROSSING RATE: 100 KE 950"
);

return;

}


// 🔥 LOGOUT
if(link === "logout"){

localStorage.removeItem("user");

window.location.href = "index.html";

}else{

window.location.href = link;

}

}

var $last=document.getElementById("last");
var $table=document.getElementById("table");
var $user=document.querySelector(".apple-table-last");
$last.onclick=function(){
    $table.style.display="block";
    console.log(1);
}
document.onclick=function(e){
    if(e.target.id !=="last"&&e.target.id !=="table"){
        $table.style.display="none";
    }
}
$user.onclick=function(){
    location.href="denglu.html";
}
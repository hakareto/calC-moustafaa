const result = document.getElementById('display')


 function display_btns(x){
     result.innerText += x
 }

function clear_result (){
    result.textContent = ''}


 function equal(){
    
    result.innerText = eval( result.innerText )
    
 }

function deleteOne(){

    result.innerText = result.innerText.slice( 0 , -1  ) 
}
   
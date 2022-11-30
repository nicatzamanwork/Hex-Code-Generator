
      function func() {
       
        var randomColor = Math.floor(Math.random()*16777215).toString(16); 
        console.log(randomColor);
        document.getElementById("demo").style.background = "#" + randomColor;
        document.getElementById("hexcolor").value="#"+randomColor
      }



       document.getElementById("btn").addEventListener("click",func);  


       function myFunction() {

 var copyText = document.getElementById("hexcolor");

 copyText.select();
 copyText.setSelectionRange(0, 99999); 

 
 navigator.clipboard.writeText(copyText.value);


 alert("Copied the text: " + copyText.value);
}

    

  
 
$(document).ready(function(){
$("#button").click(function(){
                   
     var search=$("#search").val();   
          var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&format=json&callback=?";
                   
          $.ajax({
             type:'GET',
             url:url,
             async:false,
             dataType:'json',
             success:function(data){
                $("#output").html(" ");
              for(var i=0;i<data[1].length;i++)
                 {
               $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
                 }
                $("#search").val(" ");
             },
             error:function(errorMesssage)
             {
                
                alert("error");
             }
             
          });
          
                   });                 

   
});
$("#search").keypress(function(dat){
   if(dat.which==13)
      {
         $("#button").click();
      }
});
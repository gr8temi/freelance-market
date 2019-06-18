$(document).ready(function(){
    
    $("#login-form").submit(function(e){
        e.preventDefault();
        var email = $("#email").val()
        var password = $("#password").val()
        $.ajax({
        url:"http://localhost:3000/user",
        dataType:'json',
        type:'GET',
        data:{
            format: 'json'
         },
        dataType:"json",
            // contentType:'application/json',
             
        success:function(data){
        for(var i=0; i<data.length;i++){
            if(email==data[i].email && password==data[i].password){
                var id =data[i].id;
                location.assign('http://localhost:3000/dashboard.html?'+id)
            }
            else{
                // alert("Your account does not exist. Reverting you to Sign Up") 
                location.assign('http://localhost:3000/signup.html')
    
            }
        }

    //  windows.location.assign('http://localhost:3000/dashboard.html/'+firstname)
        // alert(data)
        },
              error:function(errorThrown){
                 console.log(errorThrown)
              }
 
 
         })
        
    });
})
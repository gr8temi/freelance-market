$(document).ready(function(){
    
    $("#login-form").click(function(e){
        e.preventDefault();
        var email = $("#log-email").val()
        var password = $("#log-password").val()
        $.ajax({
        url:"http://localhost:3000/user?email="+email+"&password="+password,
        dataType:'json',
        type:'GET',
        data:{
            format: 'json'
         },
        dataType:"json",
            // contentType:'application/json',
             
        success:function(data){
            console.log(data.length)
            if(data.length==0){
                // location.assign('http://localhost:3000/signup.html')
                $(".emails").addClass("has-error")
                $(".pass").addClass("has-error")
                $(".log-error").show();
            }
            else{
             $.each(data, function(i,info){
                
                location.assign('http://localhost:3000/dashboard.html?'+info.id)
            })   
            }
            
            
        // for(var i=0; i<data.length;i++){
        //     if(email==data[i].email && password==data[i].password){
        //         var id =data[i].id;
        //        
        //     }
        //     else{
        //         // alert("Your account does not exist. Reverting you to Sign Up") 
        //         location.assign('http://localhost:3000/signup.html')
    
        //     }
        // }

    //  windows.location.assign('http://localhost:3000/dashboard.html/'+firstname)
        // alert(data)
        },
              error:function(){
                location.assign('http://localhost:3000/signup.html')
              }
 
 
         })
        
    });
})
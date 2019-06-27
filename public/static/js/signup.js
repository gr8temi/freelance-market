$(document).ready(function(){
    $("#signup-form").submit(function(e){
        e.preventDefault();
    
        // var forms={firstname:firstname,lastname:lastname,email:email,address:address,imgUrl:imgUrl,password:password}
        // console.log(forms)
        let email=$("#email").val()
        $.ajax({
            url:"/user?email="+email,
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
                    $.ajax({
            
                        url:"/user",
                        
                        dataType:'json',
                        contentType:'application/json',
                        data :JSON.stringify({
                            "firstname":$('#firstname').val(),
                            "lastname":$("#lastname").val(),
                            "email":$("#email").val(),
                            "address":$("#address").val(),
                            "imgUrl":$("#imgUrl").val(),
                            "password":$("#password").val()
                        }),
                        processData:false,
                        success:function(){
            
                            alert("Account successfully created")
                            location.assign('/login.html')
                        },
                        error : function(){
                            alert("error");
                        },
                        type:'post'
                    })
                    // location.assign('http://localhost:3000/signup.html')
                   
                }
                else{
                    $(".emails").addClass("has-error")
                    $(".log-error").show();   
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
    
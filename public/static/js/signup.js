$(document).ready(function(){
    $("#signup-form").submit(function(e){
        e.preventDefault();
    
        // var forms={firstname:firstname,lastname:lastname,email:email,address:address,imgUrl:imgUrl,password:password}
        // console.log(forms)
        $.ajax({
            
            url:"http://localhost:3000/user",
            
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
                location.assign('http://localhost:3000/login.html')
            },
            error : function(){
                alert("error");
            },
            type:'post'
        })
    
    
        
    });    
    })
    
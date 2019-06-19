$(function(){
    let query=location.search.substring(1);
    $.ajax({
        type:'GET',
        url:"http://localhost:3000/user/"+query,
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        success:function(data){
            var div3 = $(".name");
   
                
                    var strings=data.firstname+ ` `+data.lastname ;
                    
                    div3.append(strings);  
            let div4=$(".info");
            
            
            var string4=`
            <div>
                <label for="">Firstname: </label><h5>`+data.firstname+`</h5>   
            </div>
            <div>
                <label for="">Lastname: </label><h5>`+data.lastname+`</h5>   
            </div>
            <div>
                <label for="">Address: </label><h5>`+data.address+`</h5>   
            </div>
            <div>
                <label for="">Email: </label><h5>`+data.email+`</h5>   
            </div>
            
            ` ;
   
                    
            div4.append(string4);
            var string2=`
                   <div class="service account-form" style="display:none;">
                   
                        <legend>Update Details</legend>
                    
                        <div class="form-group">
                            <label>Firstname</label>
                            <input type="text" class="form-control" id="firstname" value="`+data.firstname+`">
                        </div>
                        <div class="form-group">
                        <label>lastname</label>
                            <input type="text" class="form-control" id="lastname" value="`+data.lastname+`">
                        </div>
                        <div class="form-group">
                        <label>Email</label>
                            <input type="email" class="form-control" id="email" value="`+data.email+`">
                        </div>
                        <div class="form-group">
                        <label>Address</label>
                            <input type="text" class="form-control" id="address" value="`+data.address+`">
                        </div>
                        <div class="form-group">
                        <label>Image URL</label>
                            <input type="text" class="form-control" id="imgUrl" value="`+data.imgUrl+`">
                        </div>
                        <div class="form-group">
                        <label>password</label>
                            <input type="password" class="form-control" id="password" value="`+data.password+`">
                        </div>
                        <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
                        
                    
                        <button id="subTest" class="btn btn-primary">Submit</button>
                    
                    </div>
                   `;
            div4.append(string2); 
            submitForm();
            

        },

    });  
    //submitForm()
   
          
               $.ajax({
    
   
               url:"http://localhost:3000/user/"+query+"?_embed=skills",
               dataType:"json",
               contentType:'application/json',
               data:{
                  format: 'json'
               },
               
          
               success:function(data){
   
                   var div = $(".skillset");
                   skill=data.skills;
                   count=0;
                   for(var i=0; i<skill.length;i++){
                       count++
                       var string=
                       `
                       <div class="service">
                                    <label for="">Skill:</label><h5>`+skill[i].skill+` </h5>
                                    <a href="#" id="" class="edit-skills" >
                                    <span class=" glyphicon glyphicon-edit" aria-hidden="true"></span>
                                </a>    <span style="color:red" class=" glyphicon
                                     glyphicon-remove-circle"></span>
                                    <p>Rating:`+skill[i].rating+`/5</p>

                                    <div class="service edit-skill" style="display:none">
                                    <form action="" method="POST" class="form-inline" role="form">
                                 
                                        <div class="form-group">   
                                            <input type="text" class="form-control" id="Title" placeholder="Skill Name">
                                        </div>
                                        <div class="form-group">
                                            
                                            <input type="number" min="1" max="5" class="form-control" id="description" placeholder="Skill rating /5">
                                        </div>
                                    
                                        
                                    
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                        </div>
                        
                       `;
                       
                       div.append(string);
                   
                   }
                   var string1=`
                   <div class="service skill-form" style="display:none;">
                   
                        <legend>Add Skill</legend>
                    
                        <div class="form-group">
                            
                            <input type="text" class="form-control" id="skill-input" placeholder="Skill Name">
                        </div>
                        <div class="form-group">
                            
                            <input type="number" min="1" max="5" class="form-control" id="rating-input" placeholder="Skill rating /5">
                        </div>
                        <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
                        
                    
                        <button id="submit-skill" class="btn btn-primary">Submit</button>
                    
                    </div>
                   `;
                     div.append(string1);  
                     submitForm()          
               },
               type:'GET',
           });  
       
       $.ajax({
    
   
           url:"http://localhost:3000/user/"+query+"?_embed=pastJob",
           dataType:"json",
           contentType:'application/json',
           data:{
              format: 'json'
           },
          
      
           success:function(data){
                 
               var div = $(".past-jobs");
               pastJob=data.pastJob;
               for(var i=0; i<pastJob.length;i++){
                   
                    var string=
                   `
   
                   <div class="service">
                        <label for="">Title: </label><h5>`+` `+pastJob[i].pastJob+`</h5>
                        <p>`+pastJob[i].description+`
                        </p>
                    </div>
                   
                   
                   `;
                   div.append(string);
               
               }
               var string1=`
               <div class="service pastjob-form" style="display:none;">
               
                    <legend>Add Past Jobs</legend>
                
                    <div class="form-group">
                        
                        <input type="text" class="form-control" id="pastjob-input" placeholder="Past Job Title">
                    </div>
                    <div class="form-group">
                        
                        <input type="text" class="form-control" id="p-description" placeholder="Job Description">
                    </div>
                    <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
                    
                
                    <button id="submit-pastjob" class="btn btn-primary">Submit</button>
                
                </div>
               `;
                 div.append(string1); 
                 submitForm()
                       
                       
                   
               
           },
           type:'GET',
       });  
       
       $.ajax({
    
   
           url:"http://localhost:3000/user/"+query+"?_embed=services",
           dataType:"json",
           contentType:'application/json',
           data:{
              format: 'json'
           },
           // dataType:'jsonp',
      
           success:function(data){
                 
               var div = $(".service-render");
               service=data.services;
               count=0;
               for(var i=0; i<service.length;i++){
                   count++
                   var string=
                   `
   
                   <div class="service">
                                <label for="">Service Title: </label><h5>`+service[i].title +`</h5>
                                <p>`+service[i].description+`</p>
                    </div>
                   
                   `;
                   // li.innerHTML = 
                   // localStorage.setItem('user', JSON.stringify(data))
                   div.append(string);
               
               }
               var string1=`
               <div class="service-form" style="display:none;">
               
               
               <legend>Add Services</legend>
           
               <div class="form-group">
                   
                   <input type="text" class="form-control" id="Title" placeholder="Service Title">
               </div>
               <div class="form-group">
                   
                   <input type="text" class="form-control" id="description" placeholder="Service Description">
               </div>
               <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
               
           
               <button id="service-submit" class="btn btn-primary">Submit</button>
                </div>
               `;
                 div.append(string1); 
                 submitForm() 
                   
               
           },
           type:'GET',
       }); 

    $(".service-edit").click(function(){
         $(".service-form").toggle();   
       
    });
    $(".skill-edit").click(function(){
        $(".skill-form").toggle();
    });

    $(".pastjob-edit").click(function(){
        $(".pastjob-form").toggle();
    });
    $(".account-edit").click(function(){
        $(".account-form").toggle();
    });
    

    $(".edit-skills").on("click",function(){
        console.log("working")
           // $(".edit-skill").toggle();
    });

})

function submitForm(){
    
    let query1=location.search.substring(1);
        $("#subTest").unbind().click(function(e){
        e.preventDefault();
        $.ajax({
            
            url:"http://localhost:3000/user/"+query1,
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
                alert("uploaded")
            },
            error : function(){
                alert("error");
            },
            type:'PUT'
        })
    })
    $("#submit-skill").unbind().click(function(e){
        e.preventDefault();
            let user=parseInt($("#user").val())
        $.ajax({
            url:"http://localhost:3000/skills",
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "skill":$('#skill-input').val(),
                "rating":$("#rating-input").val(),
                "userId":user,
            }),
            processData:false,
            success:function(data){
                var div=$(".skillset");
                var string=
                `
                <div class="service skillset">
                             <label for="">Skill:</label><h5>`+data.skill+` </h5>
                             <a href="#" id="" class="edit-skills" >
                             <span class=" glyphicon glyphicon-edit" aria-hidden="true"></span>
                         </a>    <span style="color:red" class=" glyphicon
                              glyphicon-remove-circle"></span>
                             <p>Rating:`+data.rating+`/5</p>

                             <div class="service edit-skill" style="display:none">
                             <form action="" method="POST" class="form-inline" role="form">
                          
                                 <div class="form-group">   
                                     <input type="text" class="form-control" id="Title" placeholder="Skill Name">
                                 </div>
                                 <div class="form-group">
                                     
                                     <input type="number" min="1" max="5" class="form-control" id="description" placeholder="Skill rating /5">
                                 </div>
                             
                                 
                             
                                 <button type="submit" class="btn btn-primary">Submit</button>
                             </form>
                         </div>
                 </div>
                 
                `;
                
                div.append(string);
            },
            error : function(){
                alert("error");
            },
            type:'POST'
        })
    })
    $("#service-submit").unbind().click(function(e){
        e.preventDefault();
            let user=parseInt($("#user").val())
        $.ajax({
            url:"http://localhost:3000/services",
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "title":$('#Title').val(),
                "description":$("#description").val(),
                "userId":user,
            }),
            processData:false,
            success:function(data){
                var div=$(".service-render");
                var string=
                `

                <div class="service">
                             <label for="">Service Title: </label><h5>`+data.title +`</h5>
                             <p>`+data.description+`</p>
                 </div>
                
                `;
                // li.innerHTML = 
                // localStorage.setItem('user', JSON.stringify(data))
                div.append(string);
            },
            error : function(){
                alert("error");
            },
            type:'POST'
        })
    })
    $("#submit-pastjob").unbind().click(function(e){


        console.log($("#user").val())
        e.preventDefault();
            let user=parseInt($("#user").val())
        $.ajax({
            url:"http://localhost:3000/pastJob",
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "pastJob":$('#pastjob-input').val(),
                "description":$("#p-description").val(),
                "userId":user,
            }),
            processData:false,
            success:function(data){
                var div = $(".past-jobs");
               
              
                   
                    var string=
                   `
   
                   <div class="service">
                        <label for="">Title: </label><h5>`+` `+data.pastJob+`</h5>
                        <p>`+data.description+`
                        </p>
                    </div>
                   
                   
                   `;
                   div.append(string);
               
              
            },
            error : function(){
                alert("error");
            },
            type:'POST'
        })
    })
    
$("#delete-user").unbind().click(function(e){
    e.preventDefault();
    $.ajax({
        
        url:"http://localhost:3000/user/"+query1,
        dataType:'json',
        contentType:'application/json',
        processData:false,
        success:function(){
            
                location.assign('http://localhost:3000/')
        },
        error : function(){
            alert("error");
        },
        type:'DELETE'
    })
    })
}
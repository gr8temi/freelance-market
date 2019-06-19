$(function(){
    let query=location.search.substring(1);
    $.ajax({
 

        url:"http://localhost:3000/user/"+query,
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        // dataType:'jsonp',
   
        success:function(data){
            var div = $(".name");
   
                
                    var string=data.firstname+ ` `+data.lastname ;
   
                    // li.innerHTML = 
                    div.append(string);     
            
        },
        type:'GET',
    });  
   
           // Get Freelancer Skills
               $.ajax({
    
   
               url:"http://localhost:3000/user/"+query+"?_embed=skills",
               dataType:"json",
               contentType:'application/json',
               data:{
                  format: 'json'
               },
               // dataType:'jsonp',
          
               success:function(data){
   
                   var div = $(".skillset");
                   skill=data.skills;
                   count=0;
                   for(var i=0; i<skill.length;i++){
                       count++
                       var string=
                       `
                       <div class="service skillset">
                                    <label for="">Skill:</label><h5>`+skill[i].skill+`</h5>
                                    <p>Rating:`+skill[i].rating+`/5</p>
                        </div>
                       
                       `;
                       // li.innerHTML = 
                       // localStorage.setItem('user', JSON.stringify(data))
                       div.append(string);
                   
                   }
                                 
               },
               type:'GET',
           });  
       // Get FreeLancer Past Jobs
       $.ajax({
    
   
           url:"http://localhost:3000/user/"+query+"?_embed=pastJobs",
           dataType:"json",
           contentType:'application/json',
           data:{
              format: 'json'
           },
           // dataType:'jsonp',
      
           success:function(data){
                 
               var div = $(".past-jobs");
               pastJob=data.pastJobs;
               for(var i=0; i<pastJob.length;i++){
                   
                    var string=
                   `
   
                   <div class="service">
                        <label for="">Title: </label><h5>`+` `+pastJob[i].pastJob+`</h5>
                        <p>I built a freelance marketplace for Decagon. This app was developed to ease
                            the way frelance technologies work.
                        </p>
                    </div>
                   
                   
                   `; 
                  
                   // li.innerHTML = 
                   // localStorage.setItem('user', JSON.stringify(data))
                   div.append(string);
               
               }
                      
                       
                       
                   
               
           },
           type:'GET',
       });  
       // Get FreeLancer services
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
                      
                       
                       
                   
               
           },
           type:'GET',
       }); 
})
var c = new Date();
var hrs = c.getHours();
var sec = c.getMinutes();
var currentime = hrs + ":" +sec;
var currenTimeInSplit = currentime.split("");

//notif
function notifyMe() {
  if (Notification.permission === "granted") {
   var notification = new Notification(taskName);
  } else if (Notification.permission !== "denied") {
   Notification.requestPermission().then(function (permission) {
     if (permission === "granted") {
       var notification = new Notification(taskName);
     }
   });
 }
 
   
 }





//main function
 async function  inter(li , x, starttime , endtime) {

  var starttime = document.getElementById("starttime").value;
  var intervalByUser = document.getElementById("interval").value;
  var endtime = document.getElementById("endtime").value;
  var taskName = document.getElementById("taskName").value;
  

  starttimeWithSplit = starttime.split(":");
  endtimeWithSplit = endtime.split(":");
  var startDate = new Date(0, 0, 0, starttimeWithSplit[0], starttimeWithSplit[1], 0);
  var endDate = new Date(0, 0, 0, endtimeWithSplit[0], endtimeWithSplit[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);
  
  if (hours < 0)
     hours = hours + 24;

  var interval= (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
  
  starttime = starttime.split("");
  endtime = endtime.split("");
  interval = interval.split("");
  for (let index = 0; index < interval.length; index++) {
    var t1= parseInt(interval[0]+ interval[1])*60 + parseInt(interval[3]+ interval[4]);
    var t2 =parseInt(interval[0]+ interval[1])*60 + parseInt(interval[3]+ interval[4]);
    
  }

  const t3 =0;
  const t4=0;
  var li=[];
  const intervalYes = parseInt(intervalByUser);
  
  
  for (let i = 0; i < parseInt(t3)+1; i=i+intervalYes) {
    if (parseInt(starttimeWithSplit[0]+starttimeWithSplit[1]+starttimeWithSplit[3]+starttimeWithSplit[4])== parseInt(currenTimeInSplit[0]+currenTimeInSplit[1]+currenTimeInSplit[3]+currenTimeInSplit[4])) {
      if (parseInt(t1)%60==0) {
        for (let i = 0; i< parseInt(t1)+1; i=i+intervalYes) {
          if (i>=0){
            console.log(taskName);
            notifyMe();
            await new Promise(r => setTimeout(r, (intervalYes*60000)));

            
            b= parseInt(li[3]+li[4]+ intervalYes);
            b= ''+ b;
            b=b.split("");
            li[3]= b[0];
            li[4]= b[1];
            if (parseInt(li[3])>=6){
              if (li[1]!='9'){
                li[1] = parseInt(li[1]+1);
                li[1]= '' +li[1];
                a=li[3]+li[4];
                a= (parseInt(a)-60)
                a= ''+ a;
                a=a.split("");
                if (a.length==1){
                  li[3]='0';
                  li[4]= a[0];
                }else if(a.length==2){
                  li[3]=a[0];
                  li[4]=a[1];
                }
                pqrs=parseInt(li[0]+li[1]+li[3]+li[4]);
                if (pqrs> parseInt(endtimeWithSplit[0]+endtimeWithSplit[1]+endtimeWithSplit[3]+endtimeWithSplit[4])){
                  break
                } else {
                  console.log(li);
                };
                



              } else{
                li[1]='0';
                li[0]= parseInt(li[0]+1);
                li[0] = ''+li[0];
                a= li[3]+li[4];
                a= (parseInt(a)-60)
                a=''+ a;
                a = a.split("");
                if (a.length==1){
                  li[3]=='0';
                  li[4]= a[0];

                } else if(a.length==2){
                  li[3]=a[0];
                  li[4]=a[1];


                }
                pqrs=parseInt(li[0]+li[1]+li[3]+li[4]);
                if(pqrs>parseInt(endtimeWithSplit[0]+endtimeWithSplit[1]+endtimeWithSplit[3]+endtimeWithSplit[4])){
                  break

                } else{
                  console.log(li)
                }



              }

            } else if(parseInt(li[3])<6){
              pqrs=parseInt(li[0]+li[1]+li[3]+li[4]);
              if(pqrs>parseInt(endtimeWithSplit[0]+endtimeWithSplit[1]+endtimeWithSplit[3]+endtimeWithSplit[4])){
                break
              } else{
                console.log(li);
              }

            }
            


          }
          
        } notifyMe();

        
      } else if(parseInt(t1)%60!=0){
        for (let i = 0;i< (parseInt(t1)-intervalByUser)+1; i=i+intervalYes) {
          if(i>=0){
            //notification to be added
            console.log(taskName);
            notifyMe();
            await new Promise(r => setTimeout(r, (intervalYes*60000)));

            //sleep to be added
            b= parseInt(li[3]+li[4])+intervalByUser;
            b = ""+ b;
            b=b.split("");
            li[3]=b[0];
            li[4]=b[1];
            if (parseInt(li[3])>=6){
              if(li[1]!='9'){
                li[1]=(parseInt(li[1])+1);
                li[1]= ''+li[1];
                a=li[3]+li[4];
                a= (parseInt(int(a))-60);
                a=''+ a;
                a=a.split("");
                if (a.length==1){
                  li[3]=='0';
                  li[4]=a[0];
                } else if(a.length==2){
                  li[3]=a[0];
                  li[4]=a[1];
                }
                console.log(li);


              } else{
                li[1]='0';
                li[0]= (parseInt(li[0])+1);
              }

            } else if(parseInt(li[3])<6){
              console.log(li);

            }

          }
          
        } 
        console.log("TASK ENDED FOR THE DAY");

      }
      
    }
    
  }

 
 // console.log(t1 , t2);
  //console.log(interval);
  //console.log(starttime);
  //console.log(endtime);

  
  


  
   
  
}


















 
 const fullname = "Jaypes Lazaro";
 const country = "New Zealand";

 document.getElementById("fullname").innerHTML=fullname;
 document.getElementById("location").innerHTML=country;
 
 const positions = ["Project Manager","Frontend Dev",
 "Backend Dev", "Fullstack Dev"];
 
positions.forEach(i => {
    const span = "<span class='tags'>"+i+"</span>";
    document.getElementById("positions").innerHTML += span;
});


const educationData = [
    { 
      schoollogo: "images/ust-logo.png",
      schoolbanner: "images/ust-campus.jpg",
      course:"BSIT",
      schoolname:"UST",
      yeargraduated:"2022"
    },
    { 
        schoollogo: "images/harvard-logo.png",
        schoolbanner: "images/harvard-campus.jpg",
        course:"BSCS",
        schoolname:"Harvard",
        yeargraduated:"2024"
      } 
];

educationData.forEach(i => {

    const tr = `<tr>
                <td>
                    <img style="height:120px;"
                    src="${i.schoollogo}" class="school-banner" />
                 </td>  
                <td>
                    <img style="width:220px;"
                    src="${i.schoolbanner}" class="school-banner" /> 
                </td>   
                <td>${i.course}</td>  
                <td>${i.schoolname}</td>  
                <td>${i.yeargraduated}</td>  
            </tr> `;

    document.getElementById("educationRows").innerHTML += tr;

});
 
const myskills = [ { name : "HTML 5", proficiency : 75},
{ name : "CSS 3", proficiency : 100},
{ name : "React", proficiency : 50} 
];

myskills.forEach(i=> {
    const li = ` <li>
    ${i.name} 
    <div class="proficiency proficiency-${i.proficiency}"></div>
    </li>`;
    
    document.getElementById("myskills").innerHTML += li;
});

 


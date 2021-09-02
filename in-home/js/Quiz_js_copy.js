// Quiz_js_copy.js
const quiz = [{
    
        Question: "1) 'HTML' Full Form ?",
        a: "Hypertext Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "None of these",
        correct_ans: 'a'
    },
    {
        Question: "2) 'CSS' Full Form",
        a: "Creative Style Shots",
        b: "Creative Style Sheets",
        c: "Cascading Style Shots",
        d: "Cascading Style Sheet",
        correct_ans: 'd'
    },
    {
        Question: "3) Select the option to make a list that lists the items with bullets?",
        a: "None",
        b: "UI",
        c: "OI",
        d: "list",
        correct_ans: 'b'
    }
];
//var ans = undefined;
//lable
const qus = document.getElementById("qus");
const opt_a = document.getElementById("a");
const opt_b = document.getElementById("b");
const opt_c = document.getElementById("c");
const opt_d = document.getElementById("d");
const btn = document.getElementById("btn");
// radio
const rdo_a=document.getElementById("a1");
const rdo_b=document.getElementById("a2");
const rdo_c=document.getElementById("a3");
const rdo_d=document.getElementById("a4");
//check  radio
var answer=undefined;
var score = 0;
var ans 
document.getElementById("score").innerText = score;
var Quiz_no = 0;
myfunction();
function myfunction()
{

    const current_qus = quiz[Quiz_no];
    qus.innerText = current_qus.Question;
    opt_a.innerText = current_qus.a;
    opt_b.innerText = current_qus.b;
    opt_c.innerText = current_qus.c;
    opt_d.innerText = current_qus.d;
    // alert(current_qus.correct_ans);

}

btn.addEventListener("click", () =>
{
   Quiz_no++;
    // find
    //const ans1 = find_checked();
     //const answer=find_checked();
     const ans1=find_checked();
     alert("KUMAR"+ans1);
      
/*
    if (ans == quiz[current_qus].correct_ans)
    {
        // alert("correct")
        score=+2;
        if (Quiz_no < quiz.length)
         {
        myfunction();
      
        } 
        else
         {
        swal("Good job!", "You completed the Quiz!", "success");
       
        }
        
    }
  */  
    
});


function find_checked()
{
    
    const answers_check = document.querySelectorAll(".opt_ans");
                                                                  /*  answers_check.forEach(                                                        (
                                                                        (ael)=>
                                                                        {
                                                                            
                                                                                if(ael.checked)
                                                                                {
                                                                                    ans=ael.id;
                                                                                
                                                                                    alert("1"+"    "+ans)
                                                                                    return ans;
                                                                                }
                                                                            }
                                                                        );
                                                                        // return undefined;
                                                                    */    

    let ans=undefined;

    answers_check.forEach(ael);
    
    }

    function ael(item)
        {
            if(item.checked)
            {
           // ans=ael.id
            ans=item.id
            //answer=item.id;
            alert("hai :->   "+ans)
            return ans;     
            }
            /*
            else
            {
                alert("undeif");
                answer="undefined";
                return answer;
            }

            */
        
            //alert("undeif");
           return undefined   
    }
    // console.log(ans)
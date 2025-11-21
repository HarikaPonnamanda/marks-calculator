document.getElementById("calcbtn").onclick=function()
{
    let s1=Number(document.getElementById("m1").value);
    let s2=Number(document.getElementById("m2").value);
    let s3=Number(document.getElementById("m3").value);
    let s4=Number(document.getElementById("m4").value);
    let s5=Number(document.getElementById("m5").value);
        let total=s1+s2+s3+s4+s5;
        let percentage=total/5;
    let grade="";
    if (percentage>=90)grade="A";
      else if (percentage>=80)grade="B";
        else if (percentage>=70)grade="C";
          else if (percentage>=60)grade="D";
             else grade="F";
                 document.getElementById("result").innerHTML="Total: "+total+"<br>"+"percentage: "+percentage+"%<br>"+"grade:"+grade;
};


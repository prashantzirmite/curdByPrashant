
function addUser()
{
	// alert("Inside Add user");
	var uid=document.getElementById("id").value;
	var uname=document.getElementById("fname").value;
	var jdate=document.getElementById("jdate").value;
	// console.log(uid,uname,jdate);
	var userArr=JSON.parse(localStorage.getItem("userDetails"));

	if(userArr==null)
		userArr=[];

	var userObj={ID:uid,Name:uname,Join_Date:jdate};
	userArr.push(userObj);
	localStorage.setItem("userDetails",JSON.stringify(userArr))
	showDetaile();
	// LOU.identify('97980cfea0067', {  company: 'Example Company',  permissions: 'admin',  plan: 'premium',    })
}
function showDetaile()
{
	var getInfo=JSON.parse(localStorage.getItem("userDetails"));

	var temp="<table border='1'>";

	for(var i=0;i<getInfo.length;i++)
	{
		temp=temp+"<div class='row'><div class='col-1'>"+(i+1)+"</div><div class='col-3'>"+getInfo[i].ID+"</div>"+
			 "<div class='col-4'>"+getInfo[i].Name+"</div>"+"<div class='col-4'>"
			 +getInfo[i].Join_Date+"</div></div>";
	}
	document.getElementById("out").innerHTML=temp;
	// var html=temp;
	// document.getElementById("out").insertAdjacentHTML("beforeend",html);
}

function showOld()
{
	var getInfo=JSON.parse(localStorage.getItem("userDetails"));
	var m=document.getElementById("din").value;
	let f=true;var r;
	for(let j=0;j<getInfo.length;j++)
	{
		// console.log(r+" j "+j+" n "+n+"id"+getInfo[j].ID)
		if(getInfo[j].ID===m)
			{
				r=j;
				f=false;
				break;
			}
	}
	if(f)
		alert("ID not Found")
	else
		{
			document.getElementById("id").value=getInfo[r].ID;
			document.getElementById("fname").value=getInfo[r].Name;
			document.getElementById("jdate").value=getInfo[r].Join_Date;
		}
	// showDetaile();
}
function updateUser()
{

	var getInfo=JSON.parse(localStorage.getItem("userDetails"));
	var k=document.getElementById("din").value;
	let f=true;var r;
	// alert("inside update");
	for(let j=0;j<getInfo.length;j++)
	{
		// console.log(r+" j "+j+" n "+k+"id"+getInfo[j].ID)
		if(getInfo[j].ID===k)
			{
				r=j;
				f=false;
				break;
			}
	}
	if(f)
		alert("ID not Found")
	else
		{
			getInfo[r].ID=document.getElementById("id").value;
			getInfo[r].Name=document.getElementById("fname").value;
			getInfo[r].Join_Date=document.getElementById("jdate").value;
		}
	localStorage.setItem("userDetails",JSON.stringify(getInfo))
	showDetaile();
	// LOU.identify('97980cfea0067', {  company: 'Example Company',  permissions: 'admin',  plan: 'premium',    })
	alert("update done")
}
function deleteUser()
{
	var t=confirm("Do you really want to delete?? ");
	if(t==true)
	{
		var getInfo=JSON.parse(localStorage.getItem("userDetails"));
		var n=document.getElementById("din").value;
		let f=true;var r;
		for(let j=0;j<getInfo.length;j++)
		{
			console.log(r+" j "+j+" n "+n+"id"+getInfo[j].ID)
			if(getInfo[j].ID===n)
				{
					r=j;
					f=false;
					break;
				}

		}
		if(f)
			alert("ID not Found")
		else
			getInfo.splice(r,1);

		localStorage.setItem("userDetails",JSON.stringify(getInfo))
			showDetaile();
		}
}
function closeModal(){

	var modal=document.getElementById("myModal")
	modal.style.display = "none";
}
function saveName(){
	var userName=document.getElementById("userNameOnLoad");
	closeModal();
	LOU.identify('97980cfea0067', {  company: 'Example Company',  permissions: 'admin',  plan: 'premium',    })
}

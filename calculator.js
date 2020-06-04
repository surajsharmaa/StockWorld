function calcForm(){
    var aShare=Number(document.getElementById('AShares').value);
	var aPrice=Number(document.getElementById('APrice').value);
	
	var bshare=Number(document.getElementById('BShares').value);
	var bPrice=Number(document.getElementById('BPrice').value);
	
	var totalShare =  aShare +  bshare;
	var averageCost = (aShare*aPrice + bshare*bPrice)/totalShare;
	
	document.getElementById("CShares").value = totalShare;
	document.getElementById("CPrice").value = averageCost;

 }
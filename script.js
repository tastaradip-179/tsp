
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


function arrayMake(){

  let array=[], sortedArr=[], indexArr=[];

  var i1 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8728568,90.3984184);
  var resultcell1 = document.getElementById('result-cell1');
  resultcell1.innerHTML=i1;

  var i2 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8513998,90.3944536);
  var resultcell2 = document.getElementById('result-cell2');
  resultcell2.innerHTML=i2;

  var i3 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8330429,90.4092871);
  var resultcell3 = document.getElementById('result-cell3');
  resultcell3.innerHTML=i3;

  var i4 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8679743,90.3840879);
  var resultcell4 = document.getElementById('result-cell4');
  resultcell4.innerHTML=i4;

  var i5 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8248293,90.3551134);
  var resultcell5 = document.getElementById('result-cell5');
  resultcell5.innerHTML=i5;

  var i6 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.827149,90.4106238);
  var resultcell6 = document.getElementById('result-cell6');
  resultcell6.innerHTML=i6;

  var i7 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8629078,90.3816318);
  var resultcell7 = document.getElementById('result-cell7');
  resultcell7.innerHTML=i7;

  var i8 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8673789,90.429412);
  var resultcell8 = document.getElementById('result-cell8');
  resultcell8.innerHTML=i8;

  var i9 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.8248938,90.3549467);
  var resultcell9 = document.getElementById('result-cell9');
  resultcell9.innerHTML=i9;

  var i10 = getDistanceFromLatLonInKm(23.8728568,90.3984184,23.813316,90.4147498);
  var resultcell10 = document.getElementById('result-cell10');
  resultcell10.innerHTML=i10;

  array.push(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10);
  arr = [...array];

  sortedArr = arr.sort();

  for (var i = 0; i < sortedArr.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (sortedArr[i] == array[j]) {
        indexArr[i] = j+1;
      }
    }
  }
  var arraycontainer = document.getElementById('array-container');
  arraycontainer.innerHTML=sortedArr.map( (e, i) => (e) ).join(' -> ');

  var arrayindexcontainer = document.getElementById('arrayindex-container');
  arrayindexcontainer.innerHTML=indexArr.map( (e, i) => (e) ).join(' -> ');
}

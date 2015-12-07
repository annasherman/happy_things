console.log('connected');

window.onload=function(){


$.ajax({
  url: 'http://api.worldbank.org/countries/indicators/2.0.hoi.Int?per_page=10&date=1960:2015&format=json',
  type: 'get',
  dataType: 'jsonp',
})
.done(function(data) {
  console.log("success");
  console.table(data);
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log("complete");
});



};

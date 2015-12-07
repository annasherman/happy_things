console.log('connected');

window.onload=function(){


$.ajax({
  url: 'https://api.worldbank.org/countries/indicators/2.0.hoi.Int?per_page=10&date=1960:2015&format=json&callback=?',
  type: 'get',
  dataType: 'jsonp',
})
.done(function(json) {
  console.log("success");
  console.table(json);
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log("complete");
});



};

$("#search").on("click", function(){
  var searchTerm = $("#searchTerm").val();
  console.log(searchTerm);

  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+
  searchTerm +"&format=json&callback=?";

  $.ajax(url, function(data){
    console.log(data);
  });
});

const API_URL = "https://dummyjson.com/quotes/random";

$("#fetch").click(function () {
  $.ajax({
    method: "GET",
    url: API_URL,
    dataType: "json",
    success: gotData,
    error: function (xhr, status) {
      console.log(status);
      console.error("Error fetching data:", xhr.statusText);
    },
  });

  function gotData(response) {
    const { quote, author } = response;
    $("#quote").html(`${quote}`);
    $("#author").html(`- ${author}`);
  }
});

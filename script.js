const API_URL = "https://dummyjson.com/quotes";

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: API_URL,
    dataType: "json",
    success: gotData,
    error: function (xhr, status, error) {
      console.error("Error fetching data:", error);
    },
  });

  function gotData(response) {
    console.log(response);
    const { quotes } = response;
    $.each(quotes, parseData);
  }

  function parseData(index, item) {
    // console.log(index, item);
  }
});

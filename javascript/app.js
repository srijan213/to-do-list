$(document).ready(function() {
  let userInput = "";

  function userInputFetcher() {
    userInput = $("#input").val();
  }
  function listItemAdder(itemDesc) {
    let listItem = $(`<div class="list">
    <i class="far fa-square" class="bullet--icon"></i>
    <!-- <i class="far fa-check-square" class="bullet__check--icon"></i> -->
    <span class="item--desc">${itemDesc}</span>
    <i class="far fa-check-circle" class="done--icon"></i>
    <i class="far fa-edit" class="edit--icon"></i>
    <i class="far fa-trash-alt" class="delete--icon"></i>
  </div>`);
    $(".container").append(listItem);
  }
  $("#add--button").click(function() {
    userInputFetcher();
    if (userInput == "") alert("Task cannot be empty");
    else listItemAdder(userInput);
  });
});

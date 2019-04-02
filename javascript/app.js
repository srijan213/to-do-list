$(document).ready(function() {
  $("#edit--button").hide();
  let userInput = "";
  let listItemNumber = 0;
  function userInputFetcher() {
    userInput = $("#input").val();
  }
  function listItemAdder(itemDesc, listItemNumber) {
    let listItem = $(`<div class="list" id="list-item-${listItemNumber}">
    <i class="far fa-square"></i>
    <!-- <i class="far fa-check-square"></i> -->
    <span class="item--desc">${itemDesc}</span>
    <span class="done--icon"><i class="far fa-check-circle"></i></span>
    <span class="edit--icon"><i class="far fa-edit"></i></span>
    <span class="delete--icon"><i class="far fa-trash-alt"></i></span>
  </div>`);
    $(".container").append(listItem);
  }

  $("#add--button").click(function() {
    userInputFetcher();
    if (userInput == "") alert("Task cannot be empty");
    else {
      listItemNumber += 1;
      listItemAdder(userInput, listItemNumber);
      $("#input").val("");
    }
  });

  $("#edit--button").click(function() {
    alert("Edited");
  });

  $(document).on("click", ".delete--icon", function() {
    $(this)
      .parent()
      .remove();
  });

  $(document).on("click", ".edit--icon", function() {
    $("#add--button").hide();
    $("#edit--button").show();
    let item = $(this)
      .parent()
      .children(".item--desc");
    //Set value of Edit Item in Input
    $("#input").val(item.html());
    $("#input").focus();

    //Set the value of list item to that of Input
    $("#input").on("keyup", function() {
      item.html($(this).val());
    });
  });

  $(document).on("click", ".done--icon", function() {
    $(this)
      .parent()
      .children(".item--desc")
      .css({ "text-decoration": "line-through" });

    $(this)
      .parent()
      .children(":first")
      .attr("class", "far fa-check-square");
  });
});

function Person (firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
  this.todolist = [];
}

function ToDoList(todo){
  this.todo = todo;
}

Person.prototype.fullName = function() {
  return this.firstname + " " + this.lastname;
}

function resetFields() {
    $("input#firstname").val("");
    $("input#lastname").val("");
    $("input.todo").val("");
}

$(document).ready(function() {
  $("#addtask").click(function() {
    $("#todo").append('<div class="todotask">' +
                    '<div class="form-group">'+
                      '<label for="todo">what to do</label>'+
                      '<input type="text" class="form-control todo">'+
                    '</div>'+
                  '</div>');
    });

  $("form#new-person").submit(function(event) {
    event.preventDefault();
    var inputfirstname = $("#firstname").val();

    var inputlastname = $("#lastname").val();

    var person = new Person(inputfirstname, inputlastname);


  $(".todotask").each(function() {
    var inputodo = $(this).find(".todo").val();
    var newtodo = new ToDoList(inputodo);
    person.todolist.push(newtodo);

  });
  console.log(person);
  $("ul#persons").append("<li><span class='person'>" + person.fullName() + "</span></li>");

  $(".person").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(person.fullName());
    $(".first-name").text(person.firstname);
    $(".last-name").text(person.lastname);

    person.todolist.forEach(function(element) {
      $("ul#listtodo").append("<li>" + element.todo + "</li>");
      $("ul#listtodo li").last().click(function() {
        $(this).fadeOut();
      });
    });
    });

  });
});

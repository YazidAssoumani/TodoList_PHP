/*********************************/
/***** CIBLES DES ÉVÈNEMENTS *****/
/*********************************/
var addButton    = $("#btnAddTodo");
var updateButton = $("#btnUpdateTodo");
var deleteButton = $("#btnDeleteTodo");

/*******************************/
/***** FONCTION À UTILISER *****/
/*******************************/
function openModal() 
{$('#todoModal').modal('toggle');}

function addTodos() {
    var titleValue       = $('#titleTodo').val();
    var categoryValue    = $('#categoryTodo').val();
    var descriptionValue = $('#descriptionTodo').val();
    // var dataTypeValue = "json";

    $.post('ajax/todo.add.php', 
    {
        title       : titleValue,
        category    : categoryValue,
        description : descriptionValue,
    },
    function(getTodo) {
        console.log("je passe par ici", getTodo["id"]);
        $("#todosList").append('<tr class="newTodo">');

        var todo = $(".newTodo");
        todo.attr("id", "todo_"+getTodo.id);
        console.log(todo);
        todo.append
        (
            '<th scope="row">'+ getTodo.id +'</th>',
            '<td>'+ getTodo.title +'</td>',
            '<td>'+ getTodo.category +'</td>',
            '<td><button type="button" class="btn btn-info" onClick="showTodo('+ getTodo.id +')">Voir</button></td>'
        );

        cleanform();
        openModal();
    });
}

function showTodo() 
{$('#todoModal').modal('toggle');}

function showModalButton(button) 
{button.show();}

function hideModalButton(button) 
{button.hide();}

function cleanform(){
    document.getElementById("titleTodo").value = null;
    document.getElementById("categoryTodo").value = null;
    document.getElementById("descriptionTodo").value = null;
}

/**************************/
/***** CODE PRINCIPAL *****/
/**************************/
$("#btnOpenModal").on('click', openModal);
$("#btnOpenModal").on({'click': function() {hideModalButton(updateButton)} });
$("#btnOpenModal").on({'click': function() {hideModalButton(deleteButton)} });
$("#btnOpenModal").on({'click': function() {showModalButton(addButton)} });

$(".btn-info").on('click', openModal);
$(".btn-info").on({'click': function() {hideModalButton(addButton)} });
$(".btn-info").on({'click': function() {showModalButton(updateButton)} });
$(".btn-info").on({'click': function() {showModalButton(deleteButton)} });
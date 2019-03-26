/*************************/
/***** REQUÊTES AJAX *****/
/*************************/
function addTodo() {
    var titleValue       = $('#titleTodo').val();
    var categoryValue    = $('#categoryTodo').val();
    var descriptionValue = $('#descriptionTodo').val();

    $.post(
        'ajax/todo.add.php',
        {
            title       : titleValue,
            category    : categoryValue,
            description : descriptionValue
        },
        function(todo) {
            $("#todosList").append('<tr class="newTodo">');
            $(".newTodo").attr("id", "todo_"+todo.id);
            $(".newTodo").append
            (
                '<th scope="row">'+ todo.id +'</th>',
                '<td>'+ todo.title +'</td>',
                '<td>'+ todo.category +'</td>',
                '<td><button type="button" class="btn btn-info" onClick="showTodo('+ todo.id +')">Voir</button></td>'
            );
            $("tr").removeClass("newTodo");

            cleanform();
            openModal();
        },
        'json'
    );
}

function showTodo(todo_id) {
    $.post(
        'ajax/todo.show.php',
        {id : todo_id},
        function(todo) {
            $('#idTodo').val(todo.id);
            $('#titleTodo').val(todo.title);
            $('#categoryTodo').val(todo.category);
            $('#descriptionTodo').val(todo.description);
        },
        'json'
    );
}

function updateTodo() {
    var idValue          = $('#idTodo').val();
    var titleValue       = $('#titleTodo').val();
    var categoryValue    = $('#categoryTodo').val();
    var descriptionValue = $('#descriptionTodo').val();

    $.post(
        'ajax/todo.update.php',
        {
            id          : idValue,
            title       : titleValue,
            category    : categoryValue,
            description : descriptionValue
        },
        function(todo) {
            $("#todo_"+idValue+" td:nth-child(2)").html(todo.title);
            $("#todo_"+idValue+" td:nth-child(3)").html(todo.category);

            cleanform();
            openModal();
        },
        'json'
    );
}

function deleteTodo() {
    var idValue = $('#idTodo').val();

    $.post(
        'ajax/todo.delete.php',
        {id : idValue},
        function() {
            $("#todo_"+idValue).remove();

            openModal();
        }
    );
}

/*********************/
/***** UTILITIES *****/
/*********************/
var addButton    = $("#btnAddTodo");
var updateButton = $("#btnUpdateTodo");
var deleteButton = $("#btnDeleteTodo");

function openModal() 
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
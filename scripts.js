//Adding a new item to the list of items:
//jQuery

function newItem() {

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  if (inputValue === '') {
    alert('You must write something')
  } else {
    let list = $('#list');
    list.append(li);
  }

//Crossing out an item from the list of items:
li.on('dblclick', function(){
  li.toggleClass('strike');
  });

// Adding the delete button "X":
 let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
 function deleteListItem(){
	li.addClass("delete")
}

//Reordering the items:
  $('#list').sortable();

}
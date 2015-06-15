toDo.controller('ToDoCtrl', [function() {

  this.toDoList = defaultList;
  this.priority ="";
  this.newImportance ="Select importance of task"

  this.addToList = function(){
    var noItems = this.toDoList.items.length;
    var item = { "no": noItems,
                 "text":this.newListItem,
                 "importance":this.newImportance,
                 "done":false
                };
    // if (this.newListItem.length !=  > 3) {
      this.toDoList.items.push(item);
      this.newListItem ="";
    // };
  };

  this.completeItem = function(itemToComplete){
    this.toDoList.items[itemToComplete].done = true;
  };

  this.clearDone = function(){
    console.log("hasdasd");
    self = this
    this.toDoList.items.forEach(function(item){
      if (item.done){
        self.toDoList.items.splice(item.no,1);
      };
    });

  };

}]);
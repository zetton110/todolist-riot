
riot.tag2('app', '<h1>To do list</h1> <form onsubmit="{addNewTask}"> <input name="newTaskName" type="text"> <input type="submit" value="add"> </form> <ul> <li each="{list}" class="{done:done}"> <input type="checkbox" __checked="{done}" onclick="{toggle}"> {title} <button onclick="{deleteTask}">delete</button> </li> </ul>', 'li.done { color: #aaa; text-decoration: line-through; }', '', function(opts) {

      this.list = [
      {
          title: 'do this task 1',
          done: false,
      },
      {
          title: 'do this task 2',
          done: true,
      },
      {
          title: 'do this task 3',
          done: false,
      },
      {
          title: 'do this task 4',
          done: false,
      },
      ];
      this.addNewTask = function(){
        this.list.push(
        {
            title: this.newTaskName.value,
            done: false
        }
        );
      }
      this.deleteTask = function(event){
            var task = event.item;
            var index = this.list.indexOf(task);
            this.list.splice(index,1);
      }
     this.toggle = function(event){
      var task = event.item;
      task.done = !task.done;
      return true;
    }
});
 
var toDo = angular.module('ToDo', []);

//poluting the global name space further.. bad!
var defaultList = { "items":[
                {  "no": 0,
                  "text":"fed the cat",
                 "importance":"High",
                 "done":false
                },
                {  "no": 1,
                  "text":"watch the paint dry",
                 "importance":"Medium",
                 "done":false
                }
                ]};
var demoApp=angular.module('demoApp',[]);
function Controller1($scope) {
    $scope.friends = [
                      {name:'Joyua', age:15, gender:'girl'},
                      {name:'John', age:25, gender:'boy'},
                      {name:'Jessie', age:30, gender:'girl'},
                      {name:'Johanna', age:28, gender:'girl'},
                      {name:'Joy', age:15, gender:'girl'},
                      {name:'Mary', age:28, gender:'girl'},
                      {name:'Peter', age:95, gender:'boy'},
                      {name:'Sebastian', age:50, gender:'boy'},
                      {name:'Erika', age:27, gender:'girl'},
                      {name:'Patrick', age:40, gender:'boy'},
                      {name:'Pulkit', age:24, gender:'boy'},
                      {name:'Samantha', age:60, gender:'girl'}
                    ];
}

demoApp.controller('Controller1',Controller1);
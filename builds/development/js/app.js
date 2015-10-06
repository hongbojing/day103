angular
    .module('myApp', [])
    .controller('myController', myController)
;

function myController($http) {
    var vm = this;
    $http.get("http://www.w3schools.com/angular/customers_mysql.php")
        .success(function (response) {vm.names = response.records;});
    vm.predicate = 'age';
    vm.reverse = true;
    vm.order = order;

    function order(predicate) {
        vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
        vm.predicate = predicate;
    }
}
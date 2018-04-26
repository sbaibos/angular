angular.module('demo', [])



       
	   .controller('Hello', function($scope, $http) {
    $http({
                method: 'GET',
                url: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php',
                params: {t:"Chelsea"}
            }).then(function (response) {
                $scope.myData = response.data.player;
				
	$scope.getClickedItem = function(item) {
    console.log("clicked");
    $scope.clickedelement = item.myData.idPlayer;
  }
            });
});
	   
	   
	   
	   
	   
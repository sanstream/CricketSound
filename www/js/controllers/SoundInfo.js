/**
 * @description Holds all the logic for explanining the app to the end-user.
 * @author 		Sanne Peters
 * @copyright 	Sanstream Creations 2015  
 */

CricketSound.controller('SoundInfo',['$scope',
 	function ($scope){

        $scope.popupOpen = false;

 		$scope.openPopUp= function () {

 			$scope.popupOpen = true;
 		};

 		$scope.closePopUp = function () {

 			$scope.popupOpen = false;
 		};
 	}
 ]);


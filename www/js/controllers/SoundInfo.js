/**
 * @description Holds all the logic for explanining the app to the end-user.
 * @author 		Sanne Peters
 * @copyright 	Sanstream Creations 2015  
 */

CricketSound.controller('SoundInfo',['$scope',
 	function ($scope){

 		$scope.popup.state = 'closed';

 		$scope.openPopUp: function () {

 			$scope.popup.state = 'open';
 		};

 		$scope.closePopUp: function () {

 			$scope.popup.state = 'closed';
 		};
 	}
 ]);


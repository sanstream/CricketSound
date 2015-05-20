/**
 * @description Holds all the logic for the ChapterCtrl controller.
 * @author 		Sanne Peters
 * @copyright 	Sanstream Creations 2013  
 */

/**
 * Definition of the ChapterCtrl Angular controller:
 */

CricketSound.controller('Cricket',['$scope',
 	function ($scope){

		var whenActive = {
			buttonText: "Make it Stop!"
		};

		/**
		 * [inactive description]
		 * @type {Object}
		 */
		var whenInActive = {
			buttonText: "Make it chrip"	
		};

		
		$scope.isSilent = false;
		$scope.buttonText = whenActive.buttonText;
		
		/**
		 * Handles the result of the toggling action of the in-page index button
		 * @return {void}
		 */
		$scope.toggleCricketSound = function(){

			if($scope.isSilent){

				$scope.isSilent = false;
				$scope.buttonText = whenActive.buttonText;
			}
			else {

				$scope.isSilent = true;
				$scope.buttonText = whenInActive.buttonText;
			}
		}
	}
]);
/**
 * @description Holds all the logic for the Criket app.
 * @author 		Sanne Peters
 * @copyright 	Sanstream Creations 2015  
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

		/**
		 * [description]
		 * @return {[type]} [description]
		 */
		function startChriping () {

			$scope.isSilent = false;
			$scope.buttonText = whenActive.buttonText;	

			// call to cordova API to play sound.
		};

		/**
		 * [description]
		 * @return {[type]} [description]
		 */
		function stopChriping () {

			$scope.isSilent = true;
			$scope.buttonText = whenInActive.buttonText;	

			// call to cordova API to stop playing sound.
		};

		// initiate the app with a chriping cricket:
		startChriping();

		/**
		 * Handles the result of the toggling action of the in-page index button
		 * @return {void}
		 */
		$scope.toggleCricketSound = function(){

			if($scope.isSilent){

				startChriping();
			}
			else {

				stopChriping();
			}
		}
	}
]);
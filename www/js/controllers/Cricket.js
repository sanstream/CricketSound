/**
 * @description Holds all the logic for the Criket app.
 * @author 		Sanne Peters
 * @copyright 	Sanstream Creations 2015  
 */

CricketSound.controller('Cricket',['$scope',
 	function ($scope){

		const __whenActive = {
			buttonText: "Make it Stop!"
		};

		/**
		 * [inactive description]
		 * @type {Object}
		 */
		const __whenInActive = {
			buttonText: "Make it chrip"	
		};

		const __maxDegreesOfMotion = 30;
		var __coverShieldIsOpening = false;
        const __frequency = 1000;

        /**
         * private chirp method that recursively calls itself until it needs to be silent.
         * @return {void}
         */
        function chirp () {
            console.debug("move...");

            if(!$scope.isSilent)
                setTimeout(chirp, __frequency);
            else {
                // turn off sound.
            }
        }

		/**
		 * initiates the chirp method and sets the right values.
		 * @return {[type]} [description]
		 */
		function startChirping () {

			$scope.isSilent = false;
			$scope.buttonText = __whenActive.buttonText;
			// animate the cover shields:
			chirp();
			// call to cordova API to play sound.
		}

		/**
		 * [description]
		 * @return {[type]} [description]
		 */
		function stopChirping () {

			$scope.isSilent = true;
			$scope.buttonText = __whenInActive.buttonText;

			// call to cordova API to stop playing sound.
		}

		// initiate the app with a chirping cricket:
		startChirping();

		/**
		 * Handles the result of the toggling action of the in-page index button
		 * @return {void}
		 */
		$scope.toggleCricketSound = function(){

			if($scope.isSilent){

				startChirping();
			}
			else {

				stopChirping();
			}
		}
	}
]);
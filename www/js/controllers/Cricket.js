/**
 * @description Holds all the logic for the Criket app.
 * @author 		Sanne Peters
 * @copyright 	Sanstream Creations 2015  
 */

soundDuration = 1200; // milliseconds

CricketSound.controller('Cricket',['$scope',
 	function ($scope){


		// private variables:
		const __whenActive = {
			buttonText: "Make it Stop!"
		};
		const __whenInActive = {
			buttonText: "Make it chrip"	
		};
		const __maxDegreesOfMotion = 30;
        const __animationDur = 100;

        var __degreesOfMotion = 0;
        var __coverShieldIsOpening = false;

        var __frontShield = null;
        var __backShield = null;

        var __sound = null;
        var __repeatSound = null;

        var self = this;

        //public variables:
	    $scope.degrees = __maxDegreesOfMotion;
        $scope.isSilent = false;
        $scope.buttonText = __whenActive.buttonText;
        $scope.origin = {
            x: 740,
            y: 660
        };
        $scope.maxDegOfRotation = 3;
        $scope.initDegOfRotation = 0;
        $scope.animationDur = (__animationDur / 1000) + "s";

        /**
         * private chirp method that recursively calls itself until it needs to be silent.
         * @return {void}
         */

        function initialize () {

            __frontShield = document.getElementById('corver-shield-front-animation');
            __backShield = document.getElementById('corver-shield-back-animation');

            self.__sound = new Media("/android_asset/www/sounds/cricket-sound.mp3", null, whenAudioInError);
            console.debug("sound duration: ",soundDuration);
            startChirping();
        }

        function whenAudioInError (reponse) {
        	console.debug(reponse);	
        }

		/**
		 * initiates the chirp method and sets the right values.
		 * @return {[type]} [description]
		 */
		function startChirping () {

			$scope.isSilent = false;
			$scope.buttonText = __whenActive.buttonText;

            __frontShield.beginElement();
            __backShield.beginElement();
			// animate the cover shields:
			// call to cordova API to play sound.
			self.__sound.play();

			__repeatSound = setInterval(function() {
			 	self.__sound.play();
			 	console.debug(Date.now(),"playing sound again...");
			}, soundDuration);
		}

		/**
		 * [description]
		 * @return {[type]} [description]
		 */
		function stopChirping () {

			$scope.isSilent = true;
			$scope.buttonText = __whenInActive.buttonText;
            __frontShield.endElement();
            __backShield.endElement();
			// call to cordova API to stop playing sound.
			self.__sound.stop();
			clearInterval(__repeatSound);
            __repeatSound = null;
		}

		// initiate the app with a chirping cricket:


        document.addEventListener('deviceready',initialize, false);
        document.addEventListener('DOMContentLoaded',console.debug, false);

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
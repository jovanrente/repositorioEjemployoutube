controllers.controller('perosnactr', [ '$scope', '$rootScope',
		'RegistroFactory', function($scope, $rootScope, RegistroFactory) {

			$rootScope.value1 = true;
			$rootScope.value2 = 'YES'
			$rootScope.chequeo = 'meses';
			$scope.preview = 'first';
			$scope.model = true;

			$scope.switchStatus = true;

			$scope.enabled = true;
			$rootScope.caragarInicio = function() {
				var result = RegistroFactory.getAll();
				result.$promise.then(function(data) {
					$scope.empleados = data.data;
				});
			};

			$scope.ordenarPor = function(orden) {
				$scope.ordenSeleccionado = orden;
			};

			$scope.$watch('preview', function(isPreview) {
				$scope.preview = 'first';
				$scope.preview = false;
			});

			// $scope.$watch('options.first_preview', function(isPreview) {
			// $scope.options.include_preview = 'first';
			// $scope.options.second_preview = false;
			// });
			//			  
			// $scope.$watch('options.second_preview', function() {
			// $scope.options.include_preview = 'second';
			// $scope.options.first_preview = false;
			// });

		} ]);

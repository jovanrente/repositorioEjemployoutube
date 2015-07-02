controllers.controller('usuarioctr', [ '$scope', '$rootScope',
		'addUsuarioFactory','getForIdFactory','deletForIdFactory', function($scope, $rootScope, addUsuarioFactory,getForIdFactory,deletForIdFactory) {

			$scope.usuario = {};
			
			$scope.submit = function() {
				
				console.log(JSON.stringify($scope.usuario));
				
				var result = addUsuarioFactory.addUsuario($scope.usuario);

				result.$promise.then(function(data) {
					console.log(JSON.stringify(data));
					$rootScope.caragarInicio();
					alert("datos guardados");
					$scope.usuario=null;
				},
				function(reason) {
					$rootScope.mensaje=$rootScope.mensageerror;
					alert("ocurrio un error");

					if (reason.status == '404') {

					}
					if (reason.status == '500') {

					}
				});
			}
			
			$scope.buscarId = function()
			{
				console.log(JSON.stringify($scope.usuario));
				var result = getForIdFactory.getId({id:$scope.usuario.id});
				
				result.$promise.then(function(data) {
					console.log(JSON.stringify(data));
					if(data.id){
					$scope.usuario = data;
					}
				});
				
			}
			
			$scope.deleteId=function()
			{
				var result=deletForIdFactory.deleteId({id:$scope.usuario.id});
				result.$promise.then(function(data) {
					console.log(JSON.stringify(data));
					$rootScope.caragarInicio();
					$scope.usuario=null;
					alert("Regsitro eliminado");
				});
				
			}

		} ]);

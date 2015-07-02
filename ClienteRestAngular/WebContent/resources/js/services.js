'use strict';

services.factory('RegistroFactory',
		[ '$resource', '$rootScope', function($resource, $rootScope) {

			return $resource('/RestServiceGradle/agenda/persons', {}, {
				getAll : {
					method : 'GET'
				}
			})
} ]).factory('getForIdFactory',
		[ '$resource', '$rootScope', function($resource, $rootScope) {

			return $resource('/RestServiceGradle/agenda/person/:id', {id:'@id'}, {

				getId : {
					method : 'GET'
				}
			})
} ]).factory('deletForIdFactory',
		[ '$resource', '$rootScope', function($resource, $rootScope) {

			return $resource('/RestServiceGradle/agenda/personDelete/:id', {id:'@id'}, {

				deleteId : {
					method : 'DELETE'
				}
			})
} ]).factory('addUsuarioFactory', [ '$resource', '$rootScope', function($resource, $rootScope) {

	return $resource('/RestServiceGradle/agenda/person/:person', {}, {
		addUsuario : {
			method : 'POST'
		}
	})
} ]);
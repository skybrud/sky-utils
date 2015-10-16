(function() {
	'use strict';
	
	/**
	 *	#Usage: 
	 *	<sky-compile content="{{string}}"></sky-compile>
	 * 	<sky-compile>{{string}}</sky-compile>
	 *	
	 *	##Attributes
	 *	content:string 
	 * 
	 * 	Compiles content-attr or content of element
	 *	
	 **/
	
	angular.module('skyUtils').directive('skyCompile', skyCompileDirective);
	
	skyCompileDirective.$inject = ['$compile'];
	
	function skyCompileDirective($compile) {
		var directive = {
			restrict: 'E',
			/* no template and inherit scope even though E-directive */
			link: link
		};
		
		function link(scope, element, attrs) {
			if ('content' in attrs) {
				attrs.$observe('content', function(newVal) {
					element[0].innerHTML = newVal;
					$compile(element.contents())(scope);
				});
			} else {
				$compile(element.contents())(scope);
			}
		}
		
		return directive;
	}

})();

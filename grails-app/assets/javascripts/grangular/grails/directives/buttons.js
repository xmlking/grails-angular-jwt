//= wrapped

angular.module('grangular.grails')
    .directive('crudButton', crudButton);

function crudButton($state, FlashService) {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      crudButton: '@',
      item: '=',
      isDisabled: '=',
      afterAction: '&'
    },
    link: function ($scope) {

      var createFn = function () {
        if($state.current.name.endsWith('.show')
          || $state.current.name.endsWith('.edit')
          || $state.current.name.endsWith('.create')) {
          $state.go("^.create");
        } else {
          $state.go(".create");
        }
        if ($scope.afterAction) {
          $scope.afterAction();
        }
      };

      var editFn = function () {
        $state.go("^.edit", {id: $scope.item.id});
        if ($scope.afterAction) {
          $scope.afterAction();
        }
      };

      var saveFn = function () {
        var resourceName = $scope.item.route.replace(/s$/g,"");

        $scope.item.save()
          .then(function (response)  {
            if ($scope.afterAction) {
              $scope.afterAction();
            }
            var message =  resourceName + "was successfully saved";
            FlashService.success(message, {routeChange: true});
            $state.go("^.show", {id: response.id}, { reload: true });
          })
          .catch(function (data) {
            var messages = [];
            angular.forEach(data.data.errors, function (error) {
              messages.push(error.message);
            });

            FlashService.error(messages);
          })
      };

      var deleteFn = function () {
        var resourceName = $scope.item.route.replace(/s$/g,"");

        $scope.item.remove()
          .then(function () {
            if ($scope.afterAction) {
              $scope.afterAction();
            }
            var message =  resourceName + 'was successfully deleted';
            FlashService.success(message, {routeChange: true});
            $state.go("^", {}, { reload: true });
          })
          .catch(function () {
            var message = "Couldn't delete " + resourceName ;
            FlashService.error(message);
          })

      };

      $scope.onClick = function () {
        switch ($scope.crudButton) {
          case "create" :
            createFn();
            break;
          case "edit" :
            editFn();
            break;
          case "delete" :
            deleteFn();
            break;
          case "save" :
            saveFn();
            break;
        }
      }
    },
    templateUrl: function (element, attrs) {
      switch (attrs.crudButton) {
        case "create":
          return "/grangular/grails/buttons/create-button.html";
        case "edit":
          return "/grangular/grails/buttons/edit-button.html";
        case "delete":
          return "/grangular/grails/buttons/delete-button.html";
        case "save":
          return "/grangular/grails/buttons/save-button.html";
      }

    }
  }
}


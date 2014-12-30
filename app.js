(function() {
  angular.module("Sunburst", [])
    .directive("sunburst", sunburst)
    .directive("onReadFile", onReadFile)
    .controller("MainCtrl", MainCtrl);

  // controller function MainCtrl
  function MainCtrl($http) {
    var ctrl = this;
    init();


    // function init
    function init() {
      // initialize controller variables
      ctrl.data = "1, 2, prod2, 1000\n\
1, 1, prod0, 122\n\
2, 1, prod0, 0\n\
2, 2, prod3, 105\n\
3, 1, prod0, 0\n\
3, 2, prod5, 200\n\
4, 1, prod0, 0\n\
4, 2, prod4, 5\n\
5, 1, prod0, 0\n\
5, 2, prod0, 0\n\
5, 3, prod1, 725\n\
7, 1, prod0, 0\n\
7, 2, prod0, 0\n\
7, 3, prod4, 625\n\
9, 1, prod0, 0\n\
9, 2, prod6, 0\n\
9, 3, prod2, 429\n\
10, 1, prod0, 0\n\
10, 2, prod0, 0\n\
10, 3, prod5, 0\n\
10, 4, prod4, 672\n\
12, 1, prod0, 0\n\
12, 2, prod0, 0\n\
12, 3, prod0, 0\n\
12, 4, prod2, 352";

      ctrl.getData = getData;

    }

    // function getData
    function getData($fileContent) {
      ctrl.data = $fileContent;
    }
  }


  // directive function sunburst
  function sunburst() {
    return {
      restrict: "E",
      scope: {
        data: "=",
      },
      link: sunburstDraw
    };
  }


  // directive function onReadFile
  function onReadFile($parse) {
    return {
      restrict: "A",
      scope: false,
      link: function(scope, element, attrs) {
        var fn = $parse(attrs.onReadFile);
        element.on("change", function(onChangeEvent) {
          var reader = new FileReader();
          reader.onload = function(onLoadEvent) {
            scope.$apply(function() {
              fn(scope, {
                $fileContent: onLoadEvent.target.result
              });
            });
          };
          reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        });
      }
    };
  }
})();
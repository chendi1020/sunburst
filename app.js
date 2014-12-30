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
      ctrl.data = "\
1, 1, froyo, 0\n\
1, 2, froyo, 0\n\
1, 3, froyo, 0\n\
1, 4, froyo, 25\n\
2, 1, froyo, 0\n\
2, 2, froyo, 0\n\
2, 3, froyo, 0\n\
2, 4, gingerbread, 52\n\
3, 1, froyo, 0\n\
3, 2, froyo, 0\n\
3, 3, froyo, 0\n\
3, 4, icecream, 128\n\
4, 1, froyo, 0\n\
4, 2, froyo, 0\n\
4, 3, froyo, 0\n\
4, 4, jellybean, 328\n\
5, 1, froyo, 0\n\
5, 2, froyo, 0\n\
5, 3, froyo, 0\n\
5, 4, kitkat, 231\n\
6, 1, gingerbread, 0\n\
6, 2, gingerbread, 0\n\
6, 3, gingerbread, 0\n\
6, 4, gingerbread, 116\n\
7, 1, gingerbread, 0\n\
7, 2, gingerbread, 0\n\
7, 3, gingerbread, 0\n\
7, 4, icecream, 229\n\
8, 1, gingerbread, 0\n\
8, 2, gingerbread, 0\n\
8, 3, gingerbread, 0\n\
8, 4, jellybean, 73\n\
9, 1, gingerbread, 0\n\
9, 2, gingerbread, 0\n\
9, 3, gingerbread, 0\n\
9, 4, kitkat, 23\n\
10, 1, gingerbread, 0\n\
10, 2, icecream, 0\n\
10, 3, jellybean, 0\n\
10, 4, kitkat, 1265\n\
11, 1, gingerbread, 0\n\
11, 2, gingerbread, 0\n\
11, 3, icecream, 0\n\
11, 4, jellybean, 869\n\
12, 1, gingerbread, 0\n\
12, 2, icecream, 0\n\
12, 3, icecream, 0\n\
12, 4, jellybean, 321\n\
13, 1, gingerbread, 0\n\
13, 2, gingerbread, 0\n\
13, 3, icecream, 0\n\
13, 4, icecream, 264\n\
14, 1, gingerbread, 0\n\
14, 2, icecream, 0\n\
14, 3, icecream, 0\n\
14, 4, icecream, 168\n\
15, 1, gingerbread, 0\n\
15, 2, icecream, 0\n\
15, 3, jellybean, 0\n\
15, 4, jellybean, 476\n\
16, 1, gingerbread, 0\n\
16, 2, icecream, 0\n\
16, 3, icecream, 0\n\
16, 4, jellybean, 576\n\
17, 1, gingerbread, 0\n\
17, 2, icecream, 0\n\
17, 3, jellybean, 0\n\
17, 4, kitkat, 1342\n\
18, 1, gingerbread, 0\n\
18, 2, icecream, 0\n\
18, 3, kitkat, 0\n\
18, 4, kitkat, 469\
";

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
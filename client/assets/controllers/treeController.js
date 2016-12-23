  app.controller('treeController',
    ['$scope', '$routeParams', '$location',
        function($scope, $routeParams, $location) {
            $scope.countNodes = function(tree) {
                let numOfNodes = 0;
                for(var value in tree){
                    if(tree[value] != null){
                        numOfNodes++;
                        // console.log(value + " : " + tree[value]);
                    } else {
                        delete tree.value;
                        $scope.level3 = false;
                        $scope.level2 = false;
                        $scope.level4 = false;
                    }
                };
                if(tree.Child0 && numOfNodes < 2){
                    $scope.level2 = true;
                }
                if(2 <= numOfNodes && numOfNodes < 6){
                    $scope.level3 = true;
                    $scope.level2 = true;
                    if(tree.Child3 || tree.Child4 || tree.Child5 || tree.Child6)
                    {
                        $scope.level4 = true;
                    }
                }
                if(6 <= numOfNodes){
                    $scope.level2 = true;
                    $scope.level3 = true;
                    $scope.level4 = true;
                }
            }

            $scope.logTree = function(tree) {
                for (var value in tree) {
                    if (tree[value]) {
                        console.log(value + " : " + tree[value]);
                    } else {
                        delete tree.value;
                    }
                }   //end for-in loop
            }
            $scope.constructTree = function(tree) {

                $scope.bTree =
                    {
                        val: tree.Child0,
                        right: {val: tree.Child1},
                        left: {val: tree.Child2}
                    };
                let count = []

                for(var child in tree){
                    if(tree[child] != null){
                        count.push(parseInt(child[5]));
                        console.log(parseInt(child[5]));
                    }
                }
                for(let i = 0; i < count.length; i++){
                    let temp = tree[`Child${count[i]}`];
                    console.log(tree[`Child${count[i]}`]);
                }
                console.log(count);
                // for(let i = 0; i < count; i++){
                //     console.log(`This is Child${i}'s value:` + tree[`Child${i}`]);
                // } //maybe go backwards?

                // get to Child#, parse number and see if it Math.floor(#/2),
                // if Math.floor((#-1)/2)*2 == #, in which case, Child[Math.floor(#/2)].right.val = Child#
                // else if Math.floor((#-2)/2)*2+1 == #,
                // Child[Math.floor(#/2)].left.val = Child#
                //this is the perfect time for recursion

                //times 2 plus 2

                $scope.test = JSON.stringify($scope.bTree);
                console.log($scope.test);
                $scope.showTree = true;
                return $scope.test;
            }

            $scope.clearTree = function(tree) {
                //not functional
                for(var child in tree){
                    delete tree.child;
                }
                return tree;
            }
}]);

// to add children to node 2;
// if 2*2 and 2*2+1, left and right of the node.

// BSTNode(value){
//     this.val = value;
//     this.left = null;
//     this.right = null;
// }

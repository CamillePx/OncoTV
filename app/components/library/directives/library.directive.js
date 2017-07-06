function setEqualHeight(columns){
    columns.height("auto");
    var tallestcolumn = 0;
    columns.each(function(){
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn){
             tallestcolumn  = currentHeight;
        }
    });
    columns.height(tallestcolumn);
}
$( window ).resize(function() {
    setEqualHeight($(".shows--item"));
});
$(document).ready(function () {
    setEqualHeight($(".shows--item"));
});

app.directive('moviesLibrary', function() {
  return{
      restrict: 'E',
      templateUrl: 'components/library/views/library.template.html',
      controller:   function($scope) {
                        $scope.number = 4;
                        $scope.loadmore = function(){
                            $scope.number += 4;
                            setEqualHeight($(".shows--item"));
                        };
                        $scope.selected = null;
                        $scope.setSelected = function(id) {
                            if($scope.selected != id){
                                $scope.selected = id;
                            }
                        }
                        $scope.closeSelected = function(id) {
                            $scope.selected = null;
                        }
                        $scope.movies = [ 
                          { 
                            title: "Room", 
                            overview: "ROOM tells the extraordinary story of Jack, a spirited 5-year-old who is looked after by his loving and devoted mother. Like any good mother, Ma dedicates herself to keeping Jack happy and safe, nurturing him with warmth and love and doing typical things like playing games and telling stories. Their life, however, is anything but typical--they are trapped--confined to a 10-by-10-foot space that Ma has euphemistically named Room. Ma has created a whole universe for Jack within Room, and she will stop at nothing to ensure that, even in this treacherous environment, Jack is able to live a complete and fulfilling life. But as Jack's curiosity about their situation grows, and Ma's resilience reaches its breaking point, they enact a risky plan to escape, ultimately bringing them face-to-face with what may turn out to be the scariest thing yet: the real world.", 
                            pubdate: 2015, 
                            cover: "assets/img/cover/room_big.jpg",
                            duration : 117,
                            trailer : "https://www.youtube.com/watch?v=E_Ci-pAL4eE"
                          }, 
                          { 
                            title: "Whiplash", 
                            overview: "A young and talented drummer attending a prestigious music academy finds himself under the wing of the most respected professor at the school, one who does not hold back on abuse towards his students. The two form an odd relationship as the student wants to achieve greatness, and the professor pushes him.", 
                            pubdate: 2014, 
                            cover: "assets/img/cover/whiplash_big.jpg",
                            duration : 167,
                            trailer : "https://www.youtube.com/watch?v=7d_jQycdQGo"
                          }, 
                          { 
                            title: "Mad Max", 
                            overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.", 
                            pubdate: 2015, 
                            cover: "assets/img/cover/madmax_big.jpg",
                            duration : 120,
                            trailer : "https://www.youtube.com/watch?v=hEJnMQG9ev8"
                          }, 
                          { 
                            title: "The Revenant", 
                            overview: "While exploring the uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home while avoiding natives on their own hunt. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald, the former confidant who betrayed and abandoned him. ", 
                            pubdate: 2015, 
                            cover: "assets/img/cover/therevenant_big.jpg",
                            duration : 156,
                            trailer : "https://www.youtube.com/watch?v=QRfj1VCg16Y"
                          }
                        ];
                    },
      controllerAs : 'movie'
  }
});


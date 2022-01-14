$(document).ready(function(){
    let searhFast = {
        init: function() {
            let _this = this;
            let result = [];
            $("#js-search").on("input", function() {
                $(".searchModelItems").empty();
                result = arrayModel
                    .map((item, i) => item[1].toLowerCase().trim().indexOf($(this).val().toLowerCase().trim()) >= 0 ? i : -1)
                    .filter(item => item >= 0);
                    
                if($(this).val().trim() == "" || result.length == 0){
                    _this.hide($(".searchModelItems"));
                }
                else{
                    result.forEach(function(currentValue){
                        $(".searchModelItems").append($("<div class='searchModelItem'>"+arrayModel[currentValue][1]+"</div>"));
                    });
                    _this.show($(".searchModelItems"));
                }
            });
            
            
            $("#js-search").on("focus", function() {
                if($(".searchModelItems").data("show") == "hide" && result.length > 0){
                    _this.show($(".searchModelItems"));
                }
            });
            $("#js-search").on("blur", function() {
                if($(".searchModelItems").data("show") == "show"){
                    _this.hide($(".searchModelItems"));
                }
            });
        },
        
        show: function(el) {
            el.slideDown();
            el.data("show", "show");
        },
        hide: function(el) {
            el.slideUp();
            el.data("show", "hide");
        }
    };
    
    let searhFastList = {
        init: function() {
            let _this = this;
            arrayModel.forEach(function(currentValue){
                $(".searchModelItemsList").append($("<div class='searchModelItem'>"+currentValue[1]+"</div>"));
            });
            $("#js-searchList").on("input", function() {
                _this.selectedFilter($(this));
            });
            
            $("#js-searchList").on("focus", function() {
                if($(".searchModelItemsList").data("show") == "hide"){
                    _this.show($(".searchModelItemsList"));
                }
            });
            
            $("#js-searchList").on("blur", function() {
                if($(".searchModelItemsList").data("show") == "show"){
                    _this.hide($(".searchModelItemsList"));
                }
            });
        },
        
        show: function(el) {
            el.slideDown();
            el.data("show", "show");
            $(".searchModelImgList").addClass("active");
        },
        hide: function(el) {
            el.slideUp();
            el.data("show", "hide");
            $(".searchModelImgList").removeClass("active");
        },
        selectedFilter: function(elem){
			let textFilter = $(elem).val().toLowerCase();
			$(".searchModelItemsList .searchModelItem").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(textFilter) > -1);
			});
		}
    };
    
    searhFast.init();
    searhFastList.init();
});
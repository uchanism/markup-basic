;(function($, document, window){

	var ui = {};

	ui.pageSet = {
		init : function(){
			this.page();
		},
		page : function(){
		    console.log("page init");
		}
		
	}

	$(document).ready(function(){
		ui.pageSet.init();
	});

	$(window).on("scroll",function(){
		
	});
	$(window).on("resize",function(){
		
	});
	$(window).load(function() {
		
	});

	$.fn.ui = ui;

}(jQuery, document, window));
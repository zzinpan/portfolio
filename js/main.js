$(function(){
	
	var $headerButton = $(".header-button");
	$headerButton.on("click", function(){
		
		var $this = $(this);
		$this.find("a").get(0).click();
		
	});
	
	$headerButton.find("a").on("click", function( e ){
		
		e.stopPropagation();
		
	});
	
	
	var $simulationDescButton = $("#simulation-desc-button");
	var $simulationDesc = $("#simulation-desc");
	
	$simulationDescButton.on("click", function(){
		
		$simulationDesc.toggle( 500 );
		
	});
	
	
});
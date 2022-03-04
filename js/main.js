$(function(){
	
	/**
	 * 헤더 클릭 이벤트
	 */
	var $headerItem = $(".header-item");
	$headerItem.on("click", function(){
		
		var $this = $(this);
		$this.find("a").get(0).click();
		
	});
	
	$headerItem.on("click", function( e ){
		
		e.stopPropagation();
		
	});
	
	var $headerXsButton = $("#header-xs-button");
	var $headerXsList = $(".header-xs-list");
	$headerXsButton.on("click", function( e ){
		
		e.stopPropagation();
		$headerXsList.toggleClass( "show" );
		
	});
	
	var $body = $("body");
	$body.on("click", function(){
		
		$headerXsList.removeClass( "show" );
		
	});
	
	
	/**
	 * 시뮬레이션 로직 상세 보기 클릭 이벤트
	 */
	var $simulationDescButton = $("#simulation-desc-button");
	var $simulationDesc = $("#simulation-desc");
	
	$simulationDescButton.on("click", function(){
		
		$simulationDesc.toggle( 500 );
		
	});
	
	
});
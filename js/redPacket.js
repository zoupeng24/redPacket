var init = function(){
	$("#detailLink").on("click",function(){
		var modalTitle = 'What is the red packet'
		$.pgwModal({
		    target: '#modalContent',
		    title: modalTitle,
		});
	})
};

$(document).ready(function(){
	init();
});

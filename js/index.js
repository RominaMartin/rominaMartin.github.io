$(function() {
	const INFO = {
		course_html: "#info_course_html",
		degree: "#info_degree",
		w_atos: "#info_w_atos",
		w_orange: "#info_w_orange",
		master_degree: "#info_master_degree",
		w_uda: "#info_w_uda"
	};

  $(".item").on("click", function () {
  	$(".info").hide();
  	$(INFO[$(this)[0].id]).show();
  });

});

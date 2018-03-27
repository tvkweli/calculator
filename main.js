$(document).ready(function () {
	$("input").on("keyup keydown keypress change", function (e) {
		var this_input = $(this),
			this_row = this_input.closest(".item"),
			quantity = parseFloat(this_row.find(".qty").val()), // input.val() -> "3" parseFloat("3") -> 3.0
			// cost = parseFloat(this_row.find(".cost").val()),
			grams = parseFloat(this_row.data("milligrams")),
			totalGrams = (grams * quantity);
		// post_tariff_cost = (pre_tariff_cost + (pre_tariff_cost * (tariff / 100)));

		// console.log("Quantity", quantity);

		if (isNumber(quantity) && isNumber(grams)) {
			this_row.find(".total").find("span").text(totalGrams);
		}
		// this_row.find(".post_total").find("span").text(post_tariff_cost);

		var pre_total = 0;

		$(".calculate").on("click", function (e) {
			e.preventDefault();
			$(".total").each(function () {
				//do stuff
				var this_total = parseFloat($(this).find("span").text());
				pre_total = pre_total + this_total;
			});
			$("#totalAll").find("span").text(pre_total + "mg");
			// $(".post_total").each(function () {
			// 	//more stuff
			// 	var this_post_total = parseFloat($(this).find("span").text());
			// 	post_total = post_total + this_post_total;
			// });

		});


	});
});

function isNumber(num) {
	return !isNaN(parseFloat(num));
}
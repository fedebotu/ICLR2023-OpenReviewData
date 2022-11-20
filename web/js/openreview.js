// function that given list of numbers, returns a list of html elements with the corresponding color class
// Example: [1, 2, 3] => <span class="one">1</span>, <span class="three">2</span>, <span class="five">3</span>
function getRatingColor(rating) {
    // if None, then return "No rating available yet"
    if (rating.length == 0) {
        return "No rating available yet";
    }
    // convert comma separated string to list and trim parentheses if they exist
    // rating = rating.replace("[", "").replace("]", "").split(",");
    // string to list
    rating = rating.split(",");
    // trim square brackets and whitespaces if they exist
    rating = rating.map(function (x) {
        return x.replace("[", "").replace("]", "").trim();
    });

    // convert to numbers
    var rating_color = [];
    for (var i = 0; i < rating.length; i++) {
        var rating_value = rating[i];
        var rating_class = "";
        if (rating_value <= 2) {
            rating_class = "one";
        } else if (rating_value <= 4) {
            rating_class = "three";
        } else if (rating_value < 6) {
            rating_class = "five";
        } else if (rating_value < 8) {
            rating_class = "six";
        } else if (rating_value < 10) {
            rating_class = "eight";
        } else {
            rating_class = "ten";
        }
        rating_color.push("<span class='" + rating_class + "'>" + rating_value + "</span>");
    }
    return rating_color;
}

// If >0, set class to increase, if <0, set class to decrease, if =0 , set class to same. rating is a float
function getRatingDiffColor(rating) {
    var rating_class = "";
    if (rating > 0) {
        rating_class = "increase";
    } else if (rating < 0) {
        rating_class = "decrease";
    } else {
        rating_class = "same";
    }
    return "<span class='" + rating_class + "'>" + rating + "</span>"
}

// function getRatingDiffColor(rating) {
//     // convert to numbers
//     var rating_color = [];
//     for (var i = 0; i < rating.length; i++) {
//         var rating_value = rating[i];
//         var rating_class = "";
//         if (rating_value < 0) {
//             rating_class = "decrease";
//         } else if (rating_value > 0) {
//             rating_class = "increase";
//         } else {
//             rating_class = "same";
//         }
//         rating_color.push("<span class='" + rating_class + "'>" + rating_value + "</span>");
//     }
//     return rating_color;
// }
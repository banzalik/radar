/*global document */
/**
 * Created by banzalik on 9/1/15.
 */
module.exports = function () {
    var title = document.title;
    if (typeof title !== 'string' ) {
        title =  document.getElementsByTagName('title');
        if (title) {
            title =  title[0].innerHTML;
        } else {
            title = '';
        }
    }
    return title;
};

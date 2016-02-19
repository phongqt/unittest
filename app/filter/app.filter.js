(function() {
  angular.module('app')
    .filter('truncate', truncate);

  function truncate() {
    return function(input, length, end) {
      if (isNaN(length)) return input;
      if (length <= 0) return '';
      if (typeof input == "undefined") {
        input = '';
      }
      input = String(input).replace(/<[^>]+>/gm, '');
      if (length > 1000) return input;
      if (input && input.length > length) {
        input = input.substring(0, length);
        var lastspace = input.lastIndexOf(' ');
        //get last space
        if (lastspace !== -1) {
          input = input.substr(0, lastspace);
        }
        if (end === undefined) {
          end = "...";
        }
        return input + end;
      }

      return input;
    };
  }
})();
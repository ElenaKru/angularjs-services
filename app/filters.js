app.filter('capitalize', function() {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return function(input) {
        
        for (let i = 0; i < input.length; i++) {
            input[i].name = capitalizeFirstLetter(input[i].name);     
        
        }
       
        return input;
      }
});
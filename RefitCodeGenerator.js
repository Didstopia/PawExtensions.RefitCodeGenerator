// Extensions are implemented as JavaScript classes
var RefitCodeGenerator = function () {
   // implement the generate() method to generate code
  this.generate = function (context, requests, options) {
    var generated = ''
     // iterate requests (`Request` objects)
    for (var i in requests) {
      var request = requests[i]

      // iterate on request headers
      var headers = request.headers
      for (var headerName in headers) {
        var headerValue = headers[headerName]
             // do something
      }
         // get the latest response status code
      var statusCode = request.getLastExchange().responseStatusCode

         // get the latest response body
      var body = request.getLastExchange().responseBody
      generated += statusCode + '\n' + body + '\n\n'
    }
     // return the generated string
    return generated
  }
}

// set the extension identifier (must be same as the directory name)
RefitCodeGenerator.identifier = 'com.didstopia.PawExtensions.RefitCodeGenerator'

// give a display name to your Code Generator
RefitCodeGenerator.title = 'My Code Generator'

// call to register function is required
registerCodeGenerator(RefitCodeGenerator)

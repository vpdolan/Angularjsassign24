let UserService = function($http, PARSE, $cookies, $state) {

  console.log(PARSE);
  
  this.checkAuth = function () {

    let token = $cookies.get('authToken');

    PARSE.CONFIG.headers['X-AUTH-TOKEN'] = token;
    
    if (token) {
      return $http.get(PARSE.URL + 'check', PARSE.CONFIG);
    } else {
      $state.go('root.login');
    }

  };

  this.sendLogin = function (userObj) {
    return $http.post(PARSE.URL + 'login', userObj, PARSE.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('authToken', res.data.auth_token);
    PARSE.CONFIG.headers['X-AUTH-TOKEN'] = res.data.auth_token;
    $state.go('root.recipe');
  };

  this.logout = function () {
    $cookies.remove('authToken');
    PARSE.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };

};

UserService.$inject = ['$http', 'PARSE', '$cookies', '$state'];

export default UserService;
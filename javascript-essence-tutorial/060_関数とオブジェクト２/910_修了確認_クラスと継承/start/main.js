/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

function loginController(user, role, route) {
  if (user.login()
    && user.checkRoll()
    && user.redirect()) {
    console.log('login success');
  } else {
    console.log('login failed');
  }
}

class User {
  constructor(name, role, route){
    this.name = name;
    this.role = role;
    this.route = route;
  }
  login(){
    console.log('User:' + this.name)
    return false;
  }
  checkRoll(){
    console.log('you have ' + this.role + ' roll')
    return true;
  }
  redirect() {
    console.log('redirect : ' + this.route)
    return true
  }
}

class AdminUser extends User{
  // constructor(name, role, route){
  //   // super(name, role, route);
  // }
}

loginController(new User('Bob', 'normal', '/'));
loginController(new AdminUser('sum', 'admin', '/admin'));

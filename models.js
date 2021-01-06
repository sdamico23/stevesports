class UserModel {
    constructor(first, last, email, username, password, passwordConfirm)
    {
        this.first = first;
        this.last = last;
        this.email = email;
        this.username = username;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }
}
module.exports = UserModel;
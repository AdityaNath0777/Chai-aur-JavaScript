const User = {
    _email: 'koko@jojo.com',
    _password: 'xyz',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

    // JS -> memory se value laana aur bhejne ke process ke bich overwrite kar raha hai
}

// let's use a factory function -> create()
const tea = Object.create(User)
console.log(tea.email);
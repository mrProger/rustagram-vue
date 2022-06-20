function showAuthWindow() {
    let width;
    let height;

    if (isAndroid() || isIOS()) {
        width = 350;
        height = 350;

        if (document.querySelectorAll('auth-window')[0] != undefined) {
            console.log(true);
            document.querySelectorAll('auth-window__login__input')[0].classList.add('mobile-input');
            document.querySelectorAll('auth-window__password__input')[0].classList.add('mobile-input');
            document.querySelectorAll('home-page__buttons__auth-button')[0].classList.add('mobile-button');
        }
    } else if (isPC()) {
        width = 600;
        height = 500;

        if (document.querySelectorAll('auth-window')[0] != undefined) {
            document.querySelectorAll('auth-window__login__input')[0].classList.remove('mobile-input');
            document.querySelectorAll('auth-window__password__input')[0].classList.remove('mobile-input');
            document.querySelectorAll('home-page__buttons__auth-button')[0].classList.remove('mobile-button');
        }
    }

    $('.auth-window').dialog({ 
        modal: true,
        title: "Вход",
        draggable: false, 
        resizable: false, 
        show: true, 
        hide: true,
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height
    });
}

function showRegisterWindow() {
    let width;
    let height;

    if (isAndroid() || isIOS()) {
        width = 350;
        height = 350;
    } else if (isPC()) {
        width = 600;
        height = 500;
    }

    $('.register-window').dialog({
        modal: true,
        title: "Регистрация",
        draggable: false,
        resizable: false,
        show: true,
        hide: true,
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height
    });
}

function auth() {
    if (document.querySelector('.auth-window__login__input').value.trim().length === 0 || document.querySelector('.auth-window__password__input').value.trim().length === 0) {
        alert('Все поля должны быть заполнены');
        return;
    }

    try {
        let login = document.querySelectorAll('.auth-window__login__input')[0].value;
        let password = document.querySelectorAll('.auth-window__password__input')[0].value;

        fetch('https://rustagram-api.herokuapp.com/api/Auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                'login': login,
                'password': password
            })
        }).then((response) => {
            return response.text().then(function (text) {
                if (text === 'true' && JSON.parse(text).meta == undefined) {
                    alert('Вы успешно вошли в аккаунт');
                } else {
                    alert('Неверные логин или пароль');
                    console.log(text);
                }
            });
        });
    } catch(err) {
        alert('Ошибка: ' + err);
    }
}

function registration() {
    if (document.querySelector('.register-window__login__input').value.trim().length === 0 || document.querySelector('.register-window__password__input').value.trim().length === 0) {
        alert('Все поля должны быть заполнены');
        return;
    }

    try {
        let login = document.querySelectorAll('.register-window__login__input')[0].value;
        let password = document.querySelectorAll('.register-window__password__input')[0].value;

        fetch('https://rustagram-api.herokuapp.com/api/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                'login': login,
                'password': password
            })
        }).then((response) => {
            return response.text().then(function (text) {
                if (text === 'true') {
                    alert('Аккаунт успешно зарегистрирован');
                } else {
                    alert('Аккаунт с указанным логином уже существует');
                    console.log(text);
                }
            });
        });
    } catch(err) {
        alert('Ошибка: ' + err);
    }
}

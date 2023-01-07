// получаем url к серверу
const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        // дает возможность делать HTTP-запросы, без перезагрузки страницы
        const xhr = new XMLHttpRequest()

        // отправляем GET запрос и указываем путь
        xhr.open(method, url);

        // говорим браузеру, чтобы он выдавал данные в формате json, либо в виде объектов
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        // функция, для проверки работы в консоли
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        }

        // обработчик ошибок, которые могут возникнуть в xhr
        xhr.onerror = () => {
            reject(xhr.response);
        }

        // отправляет запросы
        xhr.send(JSON.stringify(body));
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Baatyr',
    age: 26
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
// //text ile fetch api kullanımı
// function getText() {
//     fetch('text.txt')
//         .then(response => {
//             return response.text();
//             //İkinci then ifadesinde yakalamak için return ettik
//         })
//         .then(data => {
//             // ilk then ifadesinden return edilen değeri yakaladık
//             console.log(data);
//         });

// }
// getText();


// //json ile fetch api kullanımı
// function getJson() {
//     fetch('fetch.json')
//         .then((response) => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         });
// }
// getJson();




//external api ile fetch kullanımı
function getExtrnlApi() {
    fetch('https://randomuser.me/api/?results=5')
        .then(users => {
            return users.json();
            // ikinci then ifadesinden kullanmak için gelen datayı döndürdük
        })
        .then(users => {
            var html = '<div>';
            users.results.forEach(element => {
                html += `
                <img src="${element.picture.large}">
                <div>${element.name.title}</div>
                <div>${element.name.first}</div>
                <div>Phone Number : ${element.phone}</div>
                `;
                html += '</div>'
            });
            document.querySelector('#users').innerHTML = html;
        });
}
getExtrnlApi();

// Fetch API  POST Request
/* NOT :  Localde oluşturduğumuz bir dosya içerisinde POST işlemi yapamayız bunun için
server tabanlı bir dil olmalı Node.js gibi  */

function postExternalFetchApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    var data = {
        method: "POST",
        body: JSON.stringify({
            /*header'ı JSON olarak belirlediğimiz için dönüştürdük */
            userId: 1,
            title: "sample title",
            body: "sample body"
        }),
        header: new Headers({
            'content-type': 'application/json'
        })
    }

    fetch(url, data)
        .then(response => {
            console.log(response)
        });
}
postExternalFetchApi();
document.getElementById('button1').addEventListener('click', get_text);
document.getElementById('button2').addEventListener('click', get_json);
document.getElementById('button3').addEventListener('click', get_external);

function get_text(){
    fetch('sample.txt').then(res => {
        return res.text();
    }).then(data => {
        document.getElementById('output').innerHTML = data;
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}

function get_json(){
    fetch('sample.json').then(res => {
        return res.json();
    }).then(data => {
        console.log(data.employee);
        let output = '';
        data.forEach(user => {
            output += `<li>${user.name}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    }).catch(err => {
        console.log(err);
    });
}

function get_external(){
    fetch('https://api.github.com/users').then(res => {
        return res.json();
    }).then(data => { 
        console.log(data);
        let output = '';
        data.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    }).catch(err => {
        console.log(err);
    });
}

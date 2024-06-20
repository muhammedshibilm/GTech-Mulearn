const codeElement = document.getElementById('displayedCode');
var copybutton = document.querySelector('.copybutton');
var selectitem = document.querySelector("#language");
var addbutton = document.querySelector('.addname');


var names = localStorage.getItem('name');

document.querySelector('span').textContent = names ? names : 'to our website';
updateCodeSnippet('java', `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello, ${names ? names : "World"}!");
            }
        }`);

//data removing area 
if (localStorage.getItem('button')) {
    addbutton.innerHTML = 'Revoke';
    document.querySelector('input').removeAttribute('required')
    addbutton.addEventListener('click', () => {
        localStorage.removeItem('name');
        localStorage.removeItem('button');

    })
}

//code syntax-highleting area 
function updateCodeSnippet(language, code) {
    codeElement.textContent = code;
    codeElement.className = `language-${language}`;
    Prism.highlightElement(codeElement);

}

//copy text area 
copybutton.addEventListener('click', () => {
    showInfomessages('Copied successfully');
    navigator.clipboard.writeText(codeElement.innerText).catch(err => {
        alert("Some error is occured")
    })
})



//selection based change program code 
selectitem.addEventListener('change', () => {
    let value = selectitem.value;

    switch (value) {
        case 'c':
            updateCodeSnippet('c', `#include <stdio.h>

int main() {
    printf("Hello, ${names ? names : "World"}!");
    return 0;
}`);
            break;
        case 'java':
            updateCodeSnippet('java', `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, ${names ? names : "World"}!");
    }
}`);
            break;
        case 'javascript':
            updateCodeSnippet('javascript', `function displayName() {
    console.log("Hello, ${names ? names : "World"}!");
}
displayName();`);
            break;
        default:
            break;
    }
})


//chnage name function
function changeName() {
    let username = document.querySelector('input').value;
    if (!(localStorage.getItem('button'))) {
        if (username) {
            localStorage.setItem('name', username);
            localStorage.setItem('button', true);

        }
    }
}

//show notification function
function showInfomessages(value) {
    let suucess = document.querySelector('#successMessage');
    suucess.textContent = value;
    suucess.classList.remove('d-none')
    setTimeout(() => {
        suucess.classList.add('d-none')
    }, 1000);
}
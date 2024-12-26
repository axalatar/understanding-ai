const buttons = document.querySelectorAll('button');
const content = document.getElementById('contentHolder');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active'); 

        fetch("content/" + button.id + ".html").then(response => {
            if(response.ok) {
                return response.text();
            }
        }).then(response => {
            content.innerHTML = response;
            content.scrollIntoView({block: 'start', behavior: "smooth"})
        })
    });
});
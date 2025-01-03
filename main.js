const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => {
            b.classList.remove('active');
            document.getElementById(b.id + "-content").style.display = "none";
    });
        button.classList.add('active'); 

        const content = document.getElementById(button.id + "-content");
        content.style.display = "flex";
        content.scrollIntoView({block: 'start', behavior: "smooth"})
    });
});
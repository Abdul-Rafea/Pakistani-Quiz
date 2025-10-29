document.getElementById('refresh-button').addEventListener("click", function() {
    location.reload();
});

function goto(id){
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
        }
    else {
        console.warn('got(): element not found with id',id);
        
    }
    }

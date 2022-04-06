

// serach toggle
const search_wrapper = document.getElementById('search-wrapper');
const search_input = document.getElementById('search-input');
const search_result = document.getElementById('search-result')


const profile_avatar_icon = document.getElementById('profile-avatar-icon');
const profile_menu = document.getElementById('profile-menu');


window.addEventListener('click', function(e){   
    // search
    if (search_input.contains(e.target)) {
        search_result.classList.remove('d-none')
    } else {
        search_result.classList.add('d-none')
    }


    // profile menu
    if (profile_avatar_icon.contains(e.target)) {
        profile_menu.classList.remove('d-none')
    } else {
        profile_menu.classList.add('d-none')
    }
});


// navbar-btn
const navbar_btn = document.getElementById('navbar-btn')
const email_label_text = document.querySelectorAll('.email-label-text'); 
const sidenav = document.querySelector('.sidenav'); 
navbar_btn.addEventListener('click', () => {
    email_label_text.forEach(ele => {
        ele.classList.toggle('d-none')
    })

    sidenav.classList.toggle('small-sidenav') 
})


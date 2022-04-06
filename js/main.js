

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



const select_colapse_email = document.querySelectorAll('.select-colapse-email')
const action_btns = document.querySelector('.action-btns')
const select_all_colapse_email = document.getElementById('select-all-colapse-email')

// selected all collapsed email
select_all_colapse_email.addEventListener('change', ele => {
    if(ele.target.checked) {
        select_colapse_email.forEach(checkbox => {
            checkbox.checked = true; 

        }); 
    } else {
        select_colapse_email.forEach(checkbox => {
            checkbox.checked = false 
        }); 
    }
})

// check even if any colapsed email is selected
select_colapse_email.forEach(input => {
    input.addEventListener('change', e => {
        const ifchecked = ifChecked()
        if(ifchecked) {
            action_btns.classList.remove('text-secondary')
        } else {
            action_btns.classList.add('text-secondary')
        }
    })
})

// check if any of colapsed email is selected
function ifChecked() {
    const restul = [...select_colapse_email].filter(ele => ele.checked)
    if(restul.length != 0) {
        return true
    }
    else {
        return false;
    }
}


// change email listing title 
// const email_labels = document.querySelectorAll('.email-label'); 
// email_labels.forEach(ele => {
//     ele.addEventListener('click', (e) => {
//         const icon = e.target.querySelector('i'); 
//         const iconClasses = [...icon.classList].join(" ");

//         let spantext = e.target.querySelector('span'); 
//         spantext = spantext.innerText; 
//         console.log(spantext)
//     })
// })
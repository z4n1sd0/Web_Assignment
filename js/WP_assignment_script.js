const initBg = (autoplay = true) => {
    const bgImgsNames = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 4000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});

function checkForm(fullname, email, location, message) {
    // read data from form
    var gmail = email.includes("@gmail.com");
    //check data
    if (fullname == "") {
        alert("PLEASE ENTER YOUR FULLNAME !!");
    }
    else if (email == "") {
        alert("PLEASE ENTER YOUR EMAIL !!");
    }
    else if (gmail === false) {
        alert("Currently, We only support gmail !!");
    }
    else if (location == "") {
        alert("PLEASE SELECT YOUR LOCATION !!");
    }
    else if (message == "") {
        alert("PLEASE ENTER YOUR MESSAGE !!");
    }
    else {
        return true;
    }
}
function popup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var message = document.getElementById("message").value;
    //open new popup window and send data
    if (checkForm(fullname, email, location, message) === true) {
        let newWin = window.open("", "", "width=400,height=170");
        // new window html content
        {
            newWin.document.write("<h3>Thank you for coming to us !<\/h3>");
            newWin.document.write("<b>Your Name: <\/b>" + fullname + "<\/br>");
            newWin.document.write("<b>Your Email: <\/b>" + email + "<\/br>");
            newWin.document.write("<b>Your are from: <\/b>" + location + "<\/br>");
            newWin.document.write("<b>Your Details Message: <\/b>" + message + "<\/br>");
        }
    }
}
function clearForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("location").value = "";
    document.getElementById("message").value = "";
}
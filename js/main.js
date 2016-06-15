/* globals
---------------------------------------------------------------------*/
var students = [{
    "firstname": "Ariana",
    "lastname": "Govan",
    "site": "http://cargocollective.com/ARIANAGOVAN",
    "submitted": true
}, {
    "firstname": "Bijun",
    "lastname": "Liang",
    "site": "http://bijunliang.com",
    "submitted": true
}, {
    "firstname": "Bowan",
    "lastname": "Hesslegrave",
    "site": "http://cargocollective.com/bowanhesslegrave/",
    "submitted": true
}, {
    "firstname": "Caroline",
    "lastname": "Park",
    "site": "http://caro-park.com/",
    "submitted": true
}, {
    "firstname": "Casey",
    "lastname": "Bradford",
    "site": "http://cebradford.com/",
    "submitted": true
}, {
    "firstname": "Charlotte",
    "lastname": "Hayden",
    "site": "#:(",
    "submitted": true
}, {
    "firstname": "Charu",
    "lastname": "Chaudhary",
    "site": "http://cargocollective.com/chaudharycharu",
    "submitted": false
}, {
    "firstname": "Christian",
    "lastname": "Gimber",
    "site": "http://christiangimber.com/",
    "submitted": true
}, {
    "firstname": "Claire",
    "lastname": "Couch",
    "site": "http://cargocollective.com/claireacouch",
    "submitted": false
}, {
    "firstname": "Collette",
    "lastname": "DelPoso",
    "site": "http://www.collettedelposo.com/",
    "submitted": true
}, {
    "firstname": "Danielle",
    "lastname": "Hollander",
    "site": "http://danielle-hollander.com/",
    "submitted": true
}, {
    "firstname": "David",
    "lastname": "Gao",
    "site": "http://cargocollective.com/davidcgao",
    "submitted": false
}, {
    "firstname": "Dora",
    "lastname": "Parnanen",
    "site": "http://dorasofia.com/",
    "submitted": true
}, {
    "firstname": "Echo",
    "lastname": "Theohar",
    "site": "http://cargocollective.com/SkyeTheohar",
    "submitted": false
}, {
    "firstname": "Elena",
    "lastname": "Cullen",
    "site": "https://vimeo.com/elenamcullen/",
    "submitted": true
}, {
    "firstname": "Erika",
    "lastname": "Friesen",
    "site": "#:(",
    "submitted": false
}, {
    "firstname": "Giancarlos",
    "lastname": "Campos",
    "site": "#:(",
    "submitted": true
}, {
    "firstname": "Gilbert",
    "lastname": "Lim",
    "site": "https://www.behance.net/gillylim",
    "submitted": false
}, {
    "firstname": "Giovanna",
    "lastname": "Castro",
    "site": "http://www.giocastro.com/",
    "submitted": true
}, {
    "firstname": "Haysol",
    "lastname": "Chung",
    "site": "http://cargocollective.com/haysolchung",
    "submitted": true
}, {
    "firstname": "Jason",
    "lastname": "Lee",
    "site": "#:(",
    "submitted": true
}, {
    "firstname": "Jonathan",
    "lastname": "Smith",
    "site": "#:(",
    "submitted": true
}, {
    "firstname": "Kara",
    "lastname": "Logan",
    "site": "http://www.karalogandesign.com/",
    "submitted": true
}, {
    "firstname": "Ky",
    "lastname": "Newman",
    "site": "https://vimeo.com/kynewman",
    "submitted": false
}, {
    "firstname": "Lauren",
    "lastname": "Amorese",
    "site": "http://cargocollective.com/laurenamorese",
    "submitted": true
}, {
    "firstname": "Lauren",
    "lastname": "Nipper",
    "site": "http://cargocollective.com/lnipper",
    "submitted": true
}, {
    "firstname": "Lizzie",
    "lastname": "Zweng",
    "site": "https://vimeo.com/user23326172",
    "submitted": true
}, {
    "firstname": "Louis",
    "lastname": "Pham",
    "site": "http://louispham.design/",
    "submitted": false
}, {
    "firstname": "Lydia",
    "lastname": "Gu",
    "site": "http://cargocollective.com/lydiagu",
    "submitted": true
}, {
    "firstname": "Maxine",
    "lastname": "Tsang",
    "site": "http://www.maxinetsang.com/",
    "submitted": true
}, {
    "firstname": "Michael",
    "lastname": "Hsiu",
    "site": "http://michaelhsiu.com/",
    "submitted": true
}, {
    "firstname": "Miranda",
    "lastname": "Stein",
    "site": "http://cargocollective.com/mirandastein",
    "submitted": false
}, {
    "firstname": "Myra",
    "lastname": "Vitela",
    "site": "http://www.myravitela.com/",
    "submitted": false
}, {
    "firstname": "Nicholas",
    "lastname": "Tasato",
    "site": "http://nicholastasato.com/",
    "submitted": false
}, {
    "firstname": "Nicole",
    "lastname": "Anderson",
    "site": "http://nicoleanderson.us/",
    "submitted": false
}, {
    "firstname": "Niko",
    "lastname": "Le",
    "site": "#:(",
    "submitted": false
}, {
    "firstname": "Noopur",
    "lastname": "Goel",
    "site": "http://noopurpgoel.com/",
    "submitted": true
}, {
    "firstname": "Oliver",
    "lastname": "Leighton",
    "site": "http://classes.dma.ucla.edu/Fall15/161/projects/oliver/portfolio/index.html",
    "submitted": true
}, {
    "firstname": "Peitong",
    "lastname": "Chen",
    "site": "https://www.behance.net/wipetty",
    "submitted": true
}, {
    "firstname": "Sally",
    "lastname": "Kim",
    "site": "http://cargocollective.com/sallymk/",
    "submitted": true
}, {
    "firstname": "Samantha",
    "lastname": "Chang",
    "site": "http://samanthachang.co/About",
    "submitted": false
}, {
    "firstname": "Samson",
    "lastname": "Klitsner",
    "site": "http://samsonklitsner.com/",
    "submitted": true
}, {
    "firstname": "Sienna",
    "lastname": "Moffitt",
    "site": "http://www.siennarosemoffitt.com/",
    "submitted": true
}, {
    "firstname": "Simon",
    "lastname": "Pinkas",
    "site": "http://code-think.com/",
    "submitted": true
}, {
    "firstname": "Tina",
    "lastname": "Tran",
    "site": "http://cargocollective.com/tinamichelletran",
    "submitted": false
}, {
    "firstname": "Tobias",
    "lastname": "Heinemann",
    "site": "http://cargocollective.com/tobiasheinemann",
    "submitted": false
}, {
    "firstname": "Victor",
    "lastname": "Beteta",
    "site": "http://victorbeteta.com/",
    "submitted": true
}, {
    "firstname": "Xiaoman",
    "lastname": "Zheng",
    "site": "https://xiaomanzheng.squarespace.com/",
    "submitted": true
}, {
    "firstname": "Zeyu",
    "lastname": "Ren",
    "site": "http://cargocollective.com/renzeyu",
    "submitted": false
}];
var numStudent = 0;
var numSubmitted = 0;
var content = 'project';
var shuffler;
var modalIsOpen = false;
var fps = isTouch() ? 10 : 30;

/* document ready
---------------------------------------------------------------------*/
$(document).ready(function() {
    // for each student in students
    for (var i = 0; i < students.length; i++) {
        // add an anchor with a portrait
        var pathToPortrait;
        var name = students[i].firstname + ' ' + students[i].lastname;
        if (students[i].submitted) {
            numSubmitted++;
            pathToPortrait = 'assets/' + students[i].lastname.toLowerCase() + '-' + students[i].firstname.toLowerCase() + '-portrait.jpg';
        } else
            pathToPortrait = 'assets/sad-portrait.png';
        var student = ('<a class="student" target="_blank" href="' + students[i].site + '" data-id=' + i + '>' + '<img src="' + pathToPortrait + '" alt="' + name + '" title="' + name + '"/>' + '</a>');
        $('.students').append(student);
    }
    // log the number of students who submitted images
    console.log(numSubmitted + " / " + students.length + " students have submitted images");
    // make a sad face that sheds a tear for each student who didn't follow instructions
    console.log(":_(");
    for (var s = 0; s < students.length - numSubmitted; s++) {
        if (s % 2 === 0)
            console.log("'");
        else
            console.log(" '");
    }

    // start shuffler
    shuffler = animate(shuffleStudents, fps);

    $('.student').hover(function() {
        if (modalIsOpen) return;
        /* when the mouse enters the element */
        shuffler.stop();

        var $id = $(this).data('id');
        var currStudent = students[$id];
        var pathToImg;
        if (currStudent.submitted)
            pathToImg = 'assets/' + currStudent.lastname.toLowerCase() + '-' + currStudent.firstname.toLowerCase() + '-' + content + '.jpg';
        else
            pathToImg = 'assets/sad-project-blk.jpg';
        $('.bg').css('background-image', 'url(' + pathToImg + ')');
        $('.title span').text(' ' + currStudent.firstname);
        $('.title').css('color', '#fff');
    }, function() {
        if (modalIsOpen) return;
        /* when the mouse leaves the element */
        $('.title span').text(" SHOW");
        $('.title').css('color', '#000');
        shuffler.resume();
    });

    var $toggle = $('.icon-info');
    $toggle.click(function(event) {
        // toggle modal, manage shuffler, and adjust styles
        $('.modal-info').fadeToggle('fast');
        if (!modalIsOpen) {
            $toggle.text('X');
            shuffler.stop();
            $('.bg').css('opacity', '0.25');
            $('.subtitle').css('color', '#000');
            if ($(window).width() <= 768 && ($('.modal-info__site').offset().top >= $(window).height()))
                $('.footer').css('position', 'relative');
        } else {
            $toggle.text('?');
            shuffler.resume();
            $('.bg').css('opacity', '1');
            $('.subtitle').css('color', '#fff');
            $('.footer').css('position', 'fixed');
        }
        modalIsOpen = !modalIsOpen;
    });
});

/* functions
---------------------------------------------------------------------*/
function isTouch() {
    return !!(('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch));
}

function shuffleStudents() {
    var currStudent = students[numStudent];
    var pathToImg;
    if (currStudent.submitted)
        pathToImg = 'assets/' + currStudent.lastname.toLowerCase() + '-' + currStudent.firstname.toLowerCase() + '-' + content + '.jpg';
    else
        pathToImg = 'assets/sad-project-wht.jpg';
    $('.bg').css('background-image', 'url(' + pathToImg + ')');

    if (numStudent < students.length - 1)
        numStudent++;
    else
        numStudent = 0;
}

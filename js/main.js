/* globals
---------------------------------------------------------------------*/
var students = [{
    "firstname": "Bowan",
    "lastname": "Hesslegrave",
    "site": "http://cargocollective.com/bowanhesslegrave"
}, {
    "firstname": "Casey",
    "lastname": "Bradford",
    "site": "#"
}, {
    "firstname": "Christian",
    "lastname": "Gimber",
    "site": "http://christiangimber.com/"
}, {
    "firstname": "Lauren",
    "lastname": "Amorese",
    "site": "http://cargocollective.com/laurenamorese"
}, {
    "firstname": "Elena",
    "lastname": "Cullen",
    "site": "#"
}, {
    "firstname": "Sienna",
    "lastname": "Moffitt",
    "site": "#"
}, {
    "firstname": "Ariana",
    "lastname": "Govan",
    "site": "#"
}, {
    "firstname": "Lauren",
    "lastname": "Nipper",
    "site": "#"
}, {
    "firstname": "Haysol",
    "lastname": "Chung",
    "site": "#"
}];
var numStudent = 0;
var content = 'project';
var shuffler;

/* document ready
---------------------------------------------------------------------*/
$(document).ready(function() {
    // create an anchor for each student in students
    for (var i = 0; i < students.length; i++) {
        var aStudent = '';
        if (i !== 0)
            aStudent += '<br>';
        aStudent += ('<a class="student" href="' + students[i].site + '" data-id=' + i + '>' + students[i].firstname + ' ' + students[i].lastname + '</a>');
        $('.student__list').append(aStudent);
    }
    // start shuffler
    shuffler = requestAnimationFrame(shuffleStudents);

    $('.student').hover(function() {
        /* when the mouse enters the element */
        cancelAnimationFrame(shuffler);

        var $id = $(this).data('id');
        var currStudent = students[$id];
        var pathToImg = 'assets/' + currStudent.lastname.toLowerCase() + '-' + currStudent.firstname.toLowerCase() + '-' + content + '.png';
        $('.bg__container').css('background-image', 'url(' + pathToImg + ')');
        console.log($id, pathToImg);
    }, function() {
        /* when the mouse leaves the element */
        shuffler = requestAnimationFrame(shuffleStudents);
    });
});

/* functions
---------------------------------------------------------------------*/
function shuffleStudents() {
    shuffler = requestAnimationFrame(shuffleStudents);

    var currStudent = students[numStudent];
    var pathToImg = 'assets/' + currStudent.lastname.toLowerCase() + '-' + currStudent.firstname.toLowerCase() + '-' + content + '.png';
    $('.bg__container').css('background-image', 'url(' + pathToImg + ')');
    console.log(numStudent, pathToImg);

    if (numStudent < students.length - 1)
        numStudent++;
    else
        numStudent = 0;
}

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    "firstname": "Caro",
    "lastname": "Park",
    "site": "http://caro-park.com/",
    "submitted": false
}, {
    "firstname": "Casey",
    "lastname": "Bradford",
    "site": "http://cebradford.com/",
    "submitted": true
}, {
    "firstname": "Charlotte",
    "lastname": "Hayden",
    "site": "#",
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
    "submitted": false
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
    "submitted": false
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
    "site": "#",
    "submitted": false
}, {
    "firstname": "Giancarlos",
    "lastname": "Campos",
    "site": "#",
    "submitted": true
}, {
    "firstname": "Gilbert",
    "lastname": "Lim",
    "site": "https://www.behance.net/gillylim",
    "submitted": false
}, {
    "firstname": "Giovanna",
    "lastname": "Castro",
    "site": "http://cargocollective.com/giovannacastro",
    "submitted": false
}, {
    "firstname": "Haysol",
    "lastname": "Chung",
    "site": "http://cargocollective.com/haysolchung",
    "submitted": true
}, {
    "firstname": "Jason",
    "lastname": "Lee",
    "site": "#",
    "submitted": false
}, {
    "firstname": "Jonathan",
    "lastname": "Smith",
    "site": "#",
    "submitted": false
}, {
    "firstname": "Kara",
    "lastname": "Logan",
    "site": "http://classes.dma.ucla.edu/~kaloganslo/",
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
    "submitted": false
}, {
    "firstname": "Louis",
    "lastname": "Pham",
    "site": "http://cargocollective.com/LouisPham",
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
    "submitted": false
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
    "site": "",
    "submitted": false
}, {
    "firstname": "Nicole",
    "lastname": "Anderson",
    "site": "http://nicholastasato.com/",
    "submitted": false
}, {
    "firstname": "Niko",
    "lastname": "Le",
    "site": "#",
    "submitted": false
}, {
    "firstname": "Noopur",
    "lastname": "Goel",
    "site": "http://noopurpgoel.com/",
    "submitted": true
}, {
    "firstname": "Oliver",
    "lastname": "Leighton",
    "site": "#",
    "submitted": true
}, {
    "firstname": "Peitong",
    "lastname": "Chen",
    "site": "https://www.behance.net/wipetty",
    "submitted": false
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
    "submitted": false
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
    "submitted": false
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

/* document ready
---------------------------------------------------------------------*/
$(document).ready(function() {
    // for each student in students
    for (var i = 0; i < students.length; i++) {
        // add an anchor with a portrait
        var pathToPortrait;
        if (students[i].submitted) {
            numSubmitted++;
            pathToPortrait = 'assets/' + students[i].lastname.toLowerCase() + '-' + students[i].firstname.toLowerCase() + '-portrait.jpg';
        } else
            pathToPortrait = 'assets/sad-portrait.png';
        var student = ('<a target="_blank" class="student" href="' + students[i].site + '" data-id=' + i + '>' + '<img src="' + pathToPortrait + '"/>' + '</a>');
        $('.students').append(student);
    }
    console.log(numSubmitted + " / " + students.length + " submitted\n:_(");
    $('.title span').text(" SHOW");
    // start shuffler
    shuffler = requestAnimationFrame(shuffleStudents);

    $('.student').hover(function() {
        /* when the mouse enters the element */
        cancelAnimationFrame(shuffler);

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
        // console.log($id, pathToImg);
    }, function() {
        /* when the mouse leaves the element */
        $('.title span').text(" SHOW");
        $('.title').css('color', '#000');
        shuffler = requestAnimationFrame(shuffleStudents);
    });
});

/* functions
---------------------------------------------------------------------*/
function shuffleStudents() {
    shuffler = requestAnimationFrame(shuffleStudents);

    var currStudent = students[numStudent];
    var pathToImg;
    if (currStudent.submitted)
        pathToImg = 'assets/' + currStudent.lastname.toLowerCase() + '-' + currStudent.firstname.toLowerCase() + '-' + content + '.jpg';
    else
        pathToImg = 'assets/sad-project-wht.jpg';
    $('.bg').css('background-image', 'url(' + pathToImg + ')');
    // console.log(numStudent, pathToImg);

    if (numStudent < students.length - 1)
        numStudent++;
    else
        numStudent = 0;
}

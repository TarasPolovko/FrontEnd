$(function() {

    $("#carousel").carousel();

    var users = [
        {
            "name": "Taras",
            "surname": "Polovko",
            "age": "24",
            "about": "Study front-end",
            "avatar": "/pic1.png"
        },
        {
            "name": "Dmitro",
            "surname": "Strembetsky",
            "age": "22",
            "about": "Person of Light",
            "avatar": "/pic4.png"
        },
        {
            "name": "Julian",
            "surname": "Vorobyov",
            "age": "25",
            "about": "Do not like plastic bags",
            "avatar": "/pic5.png"
        }
    ];

     var users2 = [
        {
            "name": "Taras2",
            "surname": "Polovko2",
            "age": "24",
            "about": "Study front-end",
            "avatar": "/pic1.png"
        },
        {
            "name": "Dmitro2",
            "surname": "Strembetsky2",
            "age": "22",
            "about": "Person of Light",
            "avatar": "/pic4.png"
        },
        {
            "name": "Julian2",
            "surname": "Vorobyov2",
            "age": "25",
            "about": "Do not like plastic bags",
            "avatar": "/pic5.png"
        }
    ];

    var profilesHTML = $("#profiles").html();

    var content = tmpl(profilesHTML, {
        users: users
    });

    $("body").append(content);

    var profiles2HTML = $("#profiles2").html();

    var content2 = _.template(profiles2HTML);

    var result = content2({users2: users2});

    $("body").append(result);
});


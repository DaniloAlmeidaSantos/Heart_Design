var titleArr = [
    "Como nos conhecemos?",
    "Por que eu te mandei este site?", 
    "Não tenho palavras para descrever o que sinto por você"
];

var content = [
    "Eros leo lobortis et bibendum quisque aliquet adipiscing aenean, semper fusce congue dolor gravida bibendum primis suscipit, imperdiet fermentum varius praesent malesuada sociosqu pulvinar. torquent per ultricies lacinia egestas nisi interdum lectus amet urna inceptos pellentesque, mollis mattis vulputate etiam in dictum potenti ultricies etiam sed. nisi varius nibh risus porta per dictumst mi fringilla convallis luctus leo inceptos, lacinia ultricies volutpat luctus eleifend ut ultricies enim sodales fringilla. etiam quisque posuere lacinia facilisis placerat, platea augue blandit sed nibh cursus, platea viverra nulla arcu.",
    "Tristique phasellus leo nostra posuere, nullam velit litora tellus, adipiscing nunc lorem. vitae eget sodales sapien pharetra donec auctor sollicitudin dui dapibus, nam mi massa inceptos donec lacus adipiscing accumsan, ut bibendum egestas tristique aenean etiam nullam quam. mi curabitur ligula platea porttitor pellentesque aenean luctus proin consectetur rhoncus convallis semper consequat, ullamcorper libero congue dolor id hendrerit vulputate bibendum velit eleifend ultricies curabitur. blandit suspendisse donec habitasse euismod tempus sem tempor vehicula est, donec pellentesque vestibulum elit sodales in arcu sapien tortor pharetra, etiam venenatis purus posuere vulputate elit hac morbi. ",
    " Libero aliquet nec imperdiet euismod malesuada posuere class integer dapibus, euismod lobortis justo condimentum varius ad mollis aptent malesuada posuere, nisi eu taciti nisi laoreet consectetur diam gravida. ornare per aliquam nec vehicula sociosqu etiam ultrices torquent diam pretium sagittis torquent, massa class ornare torquent ad a quam amet adipiscing curae. in ultrices quam porttitor inceptos nullam facilisis primis risus, mollis pretium venenatis nullam nisl praesent proin justo, habitasse felis commodo vehicula tristique tellus fames. ipsum fermentum integer imperdiet metus feugiat himenaeos vivamus tempor, fermentum eros viverra sed nibh augue et, commodo vestibulum hendrerit mi magna gravida suspendisse.  "
];

var hidden  = document.querySelector("#cont");
var body    = document.querySelector("#body");
var title   = document.querySelector("#title");
var next    = document.querySelector("#next");

next.addEventListener('click', function() {
    var cont = hidden.value;
    cont++;

    if (cont == 2) {
        next.innerHTML      = null;
        next.setAttribute ('id', null);
        hidden.setAttribute('value', cont);
        title.innerHTML     = titleArr[cont];
        body.innerHTML      = content[cont];
    } else {
        hidden.setAttribute('value', cont);
        title.innerHTML     = titleArr[cont];
        body.innerHTML      = content[cont];
    }
    
});
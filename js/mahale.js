function mahale(tag){
    let text = $(tag).find("option:selected").text();

    let arrMahale = new Array();

 
    if (text == 'تهران') {
        arrMahale = ['محله 1 تهران', 'محله 2 تهران'];
    }
    if (text == 'قم') {
        arrMahale = ['محله 1 قم', 'محله 2 قم', 'نیروگاه', 'شیخ آباد', 'امین آباد'];
    }

    $(".mahale").find("select option").remove();

    let k = 0;

    if (arrMahale.length > 0) {
        for (k = 0; k < arrMahale.length; k++) {
            $(".mahale").find("select").append($("<option>", {
                text: arrMahale[k]
            }))
        }
    }

    $(".selectpicker").selectpicker("refresh");

}






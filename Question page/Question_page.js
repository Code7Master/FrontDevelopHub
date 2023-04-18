function do_menu(){
    let click = document.getElementById('dropdown-content');
    if(click.style.display === "none"){
        click.style.display === "block";
    }
    else{
        click.style.display === "none";
    }


}

function windowClick(){
    let click = document.getElementById('dropdown-content');

    if(click.style.display !== "block" && 'none'){
        click.style.display === "none";
    }
}

window.addEventListener('click', windowClick);
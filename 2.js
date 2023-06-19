function greeting(){
    const name = prompt("Здравствуйте, можно узнать Ваше имя?")
    return alert(`Приветствую, ${name.charAt(0).toUpperCase() + name.slice(1)}!`)
}

greeting()
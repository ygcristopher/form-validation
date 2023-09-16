document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const selectElement = document.getElementById("job");
    const textAreaElement = document.getElementById("textarea")
    const dateInput = document.getElementById("date")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.querySelector('input[name=name]').value
        const email = form.querySelector('input[name=email]').value
        const password = form.querySelector('input[name=password]').value
        const date = dateInput.value;
        const selectValue = selectElement.value;
        const textareaValue = textAreaElement.value;

        if (name === '') {
            result.innerHTML = "Preencha seu nome !"
            result.classList.add("mostrar-individual");
        } else if (date === 0 || date === ''){
            result.innerHTML = "Preencha com sua data de nascimento !"
            result.classList.add("mostrar-individual");
        }else if(email === '') {
            result.innerHTML = "Preencha seu e-mail !"
            result.classList.add("mostrar-individual");
        } else if (password === '') {
            result.innerHTML = "Preencha sua senha !"
            result.classList.add("mostrar-individual");
        } else if (selectValue === '') {
            result.innerHTML = "Preencha se você está procurando emprego!"
            result.classList.add("mostrar-individual");
        } else if (textareaValue === '') {
            result.innerHTML = "Preencha o porque deveriamos de contratar !"
            result.classList.add("mostrar-individual");
        } else {
            success.innerHTML = "Enviado com sucesso !"
            success.classList.add("msg-success")
            form.reset();
        }

        preview.innerHTML = ` Nome ${name}<br> 
                            Idade ${date}<br>
                            Email ${email}<br> 
                            Senha ${password}<br> 
                            ${selectValue}<br>
                             ${textareaValue}`
        preview.classList.add('preview')
    })
})



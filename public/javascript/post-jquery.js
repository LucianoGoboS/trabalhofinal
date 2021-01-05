Users = {
    add: () => {
        var t = {}
        t.nome = $("#firstname").val()
        t.CPF = $("#cpf").val()
        t.nascimento = $("#nascimento").val()
        t.telefone = $("#telefone").val()
        t.profissao = $("#profissao").val()
        t.escolaridade = $("#escolaridade").val()
        t.habilidade = $("#habilidade")

        $.ajax({
            type: 'POST',
            url: '/post',
            data: t,
            dataType: 'json',
            success: Users.template
        })        
        return false
    },

    template: (data) => {

        var comment = $('<div></div>')
            .attr('id', 'comment-' + data.id)
            .attr('class', 'comment')

        var user = $('<p></p>')
            .attr('class', 'user')
            .html('Nome: '+data.nome+ '<br/>CPF: '+ data.CPF+'<br/>Nascimento: '+data.nascimento+
            '<br/>Telefone: '+t.telefone+'<br/>Profissão: '+t.profissao+'<br/>Escolaridade: '+t.escolaridade+'<br/>Habilidades: '+
            t.habilidade+'<br/><br/>')
/*
        var user = $('<p></p>').attr('class', 'user')
        if(data.user){
            user.html('Por ' + data.user.firstname + "  " + data.user.lastname)
        }else{
            user.html('Por ' + $("user option: selected").text())
        }
            
            $("#combo1").append($('<option>', {
                value: data.user.id,text: data.user.firstname + "  " + data.user.lastname
            }))    

            
        var dtCreation = new Date(data.createdAt)

        dtCreation = " " + (dtCreation.getDate() < 10 ? "0" + dtCreation.getDate() : dtCreation.getDate()) +
            "/" + ((dtCreation.getMonth() + 1) < 10 ? "0" + (dtCreation.getMonth() + 1) : (dtCreation.getMonth() + 1)) +
            "/" + dtCreation.getFullYear()


        var date = $('<span></span>')
            .attr('class', 'date')
            .html(dtCreation)

        var btnEdit = $('<button></button>')
            .attr('class', 'edit')
            .html('Editar')
        var btnSave = $('<button></button>')
            .attr('class', 'save hidden')
            .html('Salvar')

        var btnRemove = $('<button></button>')
            .attr('class', 'remove')
            .html('Remover')

        $(btnEdit).on('click', (event) => {
            Posts.enabledEdit(event.target)
        })

        $(btnSave).on('click', (event) => {
            Posts.update(event.target)
        })

        $(btnRemove).on('click', (event) => {
            Posts.remove(event.target)
        })
*/
  //      $(user).append(date)
  //      $(comment).append(content)
        $(comment).append(user)
   //     $(comment).append(btnEdit)
   //     $(comment).append(btnSave)
   //     $(comment).append(btnRemove)

        $("#comments").append(comment)
    },
}
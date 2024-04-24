const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden')

})
// hidden é uma classe colocada no form para facilitar na hora de demnadar uma função de esconde-la

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); //impede comportamento padrão
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})

// até então só esta salvando localmente, usaremos localStorage para salvar 

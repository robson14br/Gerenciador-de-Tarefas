    document.addEventListener('DOMContentLoaded', function () {
    let Botaoadd = document.getElementById('botao');
    let Input = document.getElementById('input-tarefa');
    let Tarefas = document.getElementById('tarefas');

    Botaoadd.addEventListener('click', function(){
        if (Input.value != '') {    
            var tarefa = document.createElement('p');
            Tarefas.appendChild(tarefa);
            tarefa.innerText = '- ' + Input.value;
            Input.value = '';
            
            tarefa.addEventListener('click', function() {
                if (!tarefa.classList.contains('marcado')) {
                    tarefa.classList.add('marcado');
                } else {
                    tarefa.classList.remove('marcado');
                }
            });

            tarefa.addEventListener('dblclick', function() {
                Tarefas.removeChild(tarefa);
            });
        }
    });
});
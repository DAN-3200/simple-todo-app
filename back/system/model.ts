export interface iToDo {
	// userID: string; -- feat futura
	id: number;
	title: string;
	content: string;
	status: ToDoStatus;
	tags?: string[];
	priority: ToDoPriority;
	isDeleted?: boolean; // feat Soft-Delete = previa pra confirmação de deletar permanentemente
	isArchived?: boolean; // tirar do foco principal
	createdAt: Date;
	updatedAt: Date | null;
	completedAt: Date | null;
}

export type ToDoPriority = 'baixa' | 'media' | 'alta';
export type ToDoStatus = 'pendente' | 'concluída' | 'arquivada';

/* 
{
	"CRUD": {
		"create": "Criar uma nova ToDo",
		"read_all": "Listar todas as ToDos",
		"read_by_id": "Buscar ToDo por id",
		"update": "Editar título, conteúdo, prioridade, tags",
		"update_status": "Atualizar status (pendente, concluída, arquivada)",
		"soft_delete": "Excluir (soft-delete)",
		"restore_deleted": "Restaurar item deletado",
		"hard_delete": "Deletar permanentemente",
		"archive": "Arquivar / desarquivar"
	},
	"Filters_and_Search": {
		"by_priority": "Filtrar por prioridade",
		"by_status": "Filtrar por status",
		"by_tag": "Filtrar por tag",
		"by_date": "Filtrar por data (createdAt, completedAt, updatedAt)",
		"by_keyword": "Buscar por palavra-chave no título ou conteúdo"
	},
	"Notifications": {
		"due_soon": "Notificar tarefas próximas do vencimento",
		"stale_pending": "Notificação para tarefas pendentes após X dias",
		"old_archived": "Notificar sobre tarefas arquivadas há muito tempo"
	},
	"Organization_and_Views": {
		"grouping": "Agrupamento por status ou prioridade",
		"separate_views": "Exibição separada de tarefas arquivadas e deletadas",
		"counters": "Contadores (total, pendentes, concluídas, arquivadas, deletadas)",
		"mark_important": "Marcar como importante (com base em prioridade)"
	},
	"Soft_Delete_Lixeira": {
		"move_to_trash": "Mover para lixeira (isDeleted = true)",
		"restore_from_trash": "Restaurar da lixeira",
		"empty_trash": "Esvaziar lixeira (remoção definitiva)"
	},
	"Tags_and_Categories": {
		"add_remove_tags": "Adicionar/remover tags",
		"list_tags": "Listar todas as tags em uso",
		"filter_by_multiple_tags": "Filtrar por múltiplas tags"
	},
	"History_and_Metrics": {
		"completion_time": "Ver tempo de conclusão (createdAt → completedAt)",
		"recently_completed": "Ver últimas tarefas concluídas",
		"edit_history": "Visualizar histórico de modificações (requer log)"
	},
	"User_Management_Future": {
		"assign_user": "Atribuir ToDo a um usuário (via userID)",
		"list_user_todos": "Listar tarefas de um usuário",
		"user_permissions": "Permissões de edição (multiusuário)"
	}
}
*/

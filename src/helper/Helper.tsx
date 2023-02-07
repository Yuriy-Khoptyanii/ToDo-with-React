import { CompletedFilter } from '../types/CompletedFilter';
import { Todo } from '../types/Todo';

export const filteredTodos = (
  todos: Todo[],
  completedFilter: CompletedFilter,
) => {
  switch (completedFilter) {
    case CompletedFilter.Active:
      return todos.filter(todo => !todo.completed);

    case CompletedFilter.Completed:
      return todos.filter(todo => todo.completed);

    case CompletedFilter.All:
    default:
      return todos;
  }
};

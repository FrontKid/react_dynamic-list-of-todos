import React, { memo } from 'react';

import { Todo } from '../../types/Todo';

import { TodoItem } from '../TodoItem';

type TTodoList = {
  todos: Todo[]
};

export const TodoList: React.FC<TTodoList> = memo(({ todos }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </tbody>
  </table>
));
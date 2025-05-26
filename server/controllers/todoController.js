// the logic part

import Todo from '../models/Todo';

// export is here so that the function can be expoted and used in your routes file.
export const getTodos = async (req, res) =>  {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
};


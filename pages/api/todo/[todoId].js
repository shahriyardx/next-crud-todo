import TodoModel from "../../../database/TodoModel";

const handler = async (req, res) => {
  const todoId = req.params.todoId

  switch (req.method) {
    case "DELETE":
      const deleteResult = await TodoModel.deleteOne({ _id: todoId })
      res.json(deleteResult)
      break;
    case "PUT":
      const body = req.body
      const updateResult = await TodoModel.updateOne({ _id: todoId }, body)
      res.json(updateResult)
      break;
    default:
      res.json({ error: "Method not allowed"})
      break;
  }
}

export default handler 
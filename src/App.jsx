import React, { useState } from "react"
import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Ali", age: "25" },
    { id: 2, name: "Qrbon", age: "30" },
    { id: 3, name: "Abubakr", age: "22" },
  ])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [editId, setEditId] = useState(null)

   function handleSubmit(e) {
    e.preventDefault()

    if (editId) {
      setData(data.map((item) => (item.id === editId ? { ...item, name, age } : item)))
      setEditId(null)
    } else {
      setData([...data, { id: Date.now(), name, age }])
    }

    setName("")
    setAge("")
  }

   function startEdit(item) {
    setEditId(item.id)
    setName(item.name)
    setAge(item.age)
  }

   
   function remove(id) {
    setData(data.filter((item) => item.id !== id))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product"
          value={name}
          onChange={(e) => setName(e.target.value)}
           
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
           
        />
        <Button type="submit">{editId ? "Save" : "Add"}</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon /><span className="sr-only">Open menu</span></Button>} />
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => startEdit(item)}>Edit</DropdownMenuItem>
                     <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive" onClick={() => remove(item.id)}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default App
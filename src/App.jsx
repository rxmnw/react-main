import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const api = "https://to-dos-api.softclub.tj/api/to-dos";

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null); // null = добавление, иначе редактирование
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function get() {
    try {
      const { data } = await axios.get(api);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  function openAdd() {
    setEditId(null);
    setName("");
    setDescription("");
    setOpen(true);
  }

  function openEdit(item) {
    setEditId(item.id);
    setName(item.name);
    setDescription(item.description);
    setOpen(true);
  }

  async function save(e) {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(api, { id: editId, name, description });
      } else {
        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Description", description);
        await axios.post(api, formData);
      }
      get();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(api + "?id=" + id);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleStatus(id) {
    try {
      await axios.put("https://to-dos-api.softclub.tj/completed?id=" + id);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Button onClick={openAdd}>Add</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editId ? "Edit user" : "Add user"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={save} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Description</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.description}</TableCell>
              <TableCell className={e.isCompleted ? "text-green-600" : "text-red-600"}>
                {e.isCompleted ? "Active" : "Inactive"}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <input
                  type="checkbox"
                  checked={e.isCompleted}
                  onChange={() => toggleStatus(e.id)}
                />
                <Button size="sm" variant="outline" onClick={() => openEdit(e)}>
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => deleteUser(e.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default App;

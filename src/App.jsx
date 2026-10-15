 import React, { use, useState } from 'react'
 import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

 import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



function App() {

const [data, setData] = useState([
  {
    name: 'Hojiakbar', 
    age: 17, 
    status:true,
    id:1
  },
  {
    name: 'Abdullo', 
    age: 16, 
    status:false,
    id:2
  },
  {
    name: 'Abubakr', 
    age: 15, 
    status:true,
    id:3
  },
  {
    name: 'Alisher', 
    age: 18, 
    status:false,
    id:4
  },
  {
    name: 'Alisher', 
    age: 18, 
    status:true,
    id:5
  },
  {
    name: 'Rajab', 
    age: 15, 
    status:false,
    id:6
  }
])
const[openEdit, setEdit] = useState(false)
const[openAdd, setAdd] = useState(false)
const[elemEdit, setElemEdit] = useState(null)

let handleDelete = (id) =>{
  setData((prev) => prev.filter(el => el.id != id ) )
}

let handleEdit = (e) =>{
setEdit(true)
setElemEdit(e)
}

let handleSubmitEdit = (e) =>{
  e.preventDefault()
 
  setData((prev) => prev.map(el => el.id == elemEdit.id ? elemEdit : el))
  setEdit((prev) => !prev)
}

let handleAdd = (e) => {
e.preventDefault()

let newUser = {
  id : Date.now(),
name : e.target.name.value,
age : Number(e.target.age.value),
status : e.target.status.value == 'true'
}

setData((prev) => [...prev, newUser])
setAdd((prev) => !prev)
}

  return (
    <>
    <Table>
       <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Activities</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((el) => (
          <TableRow key={el.id} >
            <TableCell className="font-medium">{el.name}</TableCell>
            <TableCell>{el.age}</TableCell>
          <TableCell  className = {`${el.status ? 'text-green-900' : 'text-red-900'} font-bold`}>
                <div className="flex flex-row-reverse items-center justify-end gap-2">
                  <input
                    type="checkbox"
                    checked={el.status}
                    onChange={() =>
                      setData((prev) =>
                        prev.map((item) =>
                          item.id === el.id
                            ? { ...item, status: !item.status }
                            : item,
                        ),
                      )
                    }
                    className="w-5 h-5"
                  />

                  <span>{el.status ? "Active" : "Inactive"}</span>
                </div>
              </TableCell>
            <TableCell className="text-right">
 <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Actions</Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick = {() =>handleEdit(el)}>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup >
          <DropdownMenuItem onClick = {() => handleDelete(el.id)} variant="destructive">
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>         
       </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

{
  openEdit ? (
    <Dialog open = {openEdit} onOpenChange = {setEdit}>
         <DialogContent className="sm:max-w-sm">
      <form onSubmit={handleSubmitEdit}>
          <DialogHeader>
            <DialogTitle className = 'text-center font-bold pb-[10px  ]'>Edit User</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input  value = {elemEdit?.name} onChange = {(el) => setElemEdit((prev) => ({...prev,name:el.target.value })) } id="name-1" name="name" />
            </Field>
            <Field className = 'pb-[20px]'>
              <Label htmlFor="username-1">Age</Label>
              <Input   value = {elemEdit?.age} onChange = {(el) => setElemEdit((prev) => ({...prev ,age: el.target.value}))} id="username-1" name="age" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
            </DialogFooter>
            </form>
            </DialogContent>
            </Dialog>
          ) : null
        }

  <Dialog  open = {openAdd} onOpenChange = {setAdd}>
        <DialogTrigger className = 'mt-[10px]' render={<Button variant="outline">Add User</Button>} />
        <DialogContent className="sm:max-w-sm">
      <form onSubmit = {handleAdd}>
          <DialogHeader>
            <DialogTitle className = 'text-center pb-[10px]'>Add User</DialogTitle>
           </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input placeholder = 'Name' id="name-1" name="name"   />
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input placeholder = 'Age' id="username-1" name="age"  />
            </Field>
          </FieldGroup>
          <select className='my-[10px] mt-[10px]' name="status" id="">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <DialogFooter >
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button  type="submit">Save changes</Button>
          </DialogFooter>
           
      </form>
        </DialogContent>
    </Dialog>
  
 
        
      </>
      )

}

export default App
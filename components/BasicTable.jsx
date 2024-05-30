'use client'
import React,{useMemo, useState} from 'react'
import { columnDefinitionWithGrouping } from './columns'
import mData from '@/components/MOCK_DATA.json'
import { useReactTable,flexRender,getCoreRowModel,getSortedRowModel,getFilteredRowModel} from '@tanstack/react-table'
import Filter from "@/components/FilterFunction"
export default function BasicTable() {
  const columnsDef = useMemo(()=>columnDefinitionWithGrouping,[])
  const data = useMemo(()=>mData,[])
  const [sorting,setSorting]=useState([])
  const [filtering,setFiltering]=useState("")
  const [columnFilters,setColumnFilters]=useState([])
  const defaultColumn = React.useMemo(()=>{
    return {
      YouTubeProp:"Hello world"
    }

  },[])
  console.log(filtering)
  const table = useReactTable({
    data,
    columns:columnsDef,
    defaultColumn:defaultColumn,
    getCoreRowModel:getCoreRowModel(),
 
    getFilteredRowModel:getFilteredRowModel(),
    state:{
        columnFilters:columnFilters,
    },
    onColumnFiltersChanged:setColumnFilters,
    state:{
       globalFilter:filtering,
    },
    onGlobalFilterChange:setFiltering,

   
  })
 
  return (
    <div>
      <input
      type='text'
      value={ filtering}
      onChange={e =>setFiltering(e.target.value)}
      ></input>
      <table>
        <thead>
        
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} >
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder ? null : <>
                  {flexRender(header.column.columnDef.header,
                  header.getContext())}
                  {header.column.getCanFilter() ? (<Filter column={header.column} table={table}></Filter>)
                  :null}
                  </>}



                  {{asc:"UP",desc:'DOWN'}[header.column.getIsSorted() ?? null]}
                </th>
              ))}

            </tr>

          ))}
          
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => 
            <tr key={row.id}>
              {row.getVisibleCells().map(cell=>(
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell,
                    cell.getContext())}
                </td>
              ))}

            </tr>
          )}
        </tbody>
        <tfoot>
        
        
        {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id} >
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header,
                  header.getContext())}
                </th>
              ))}

            </tr>

          ))}
        </tfoot>
      </table>
    </div>
  )
}

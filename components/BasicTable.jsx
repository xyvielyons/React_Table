'use client'
import React,{useMemo, useState} from 'react'
import { columnDefinitionWithGrouping } from './columns'
import mData from '@/components/MOCK_DATA.json'
import { useReactTable,flexRender,getCoreRowModel,getSortedRowModel } from '@tanstack/react-table'
export default function BasicTable() {
  const columnsDef = useMemo(()=>columnDefinitionWithGrouping,[])
  const data = useMemo(()=>mData,[])
  const [sorting,setSorting]=useState([])
  const table = useReactTable({
    data,
    columns:columnsDef,
    getCoreRowModel:getCoreRowModel(),
    getSortedRowModel:getSortedRowModel(),
    state:{
      sorting:sorting,
    },
    onSortingChange:setSorting,
  
  })
 
  return (
    <div>
      <table>
        <thead>
        
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} >
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header,
                  header.getContext())}



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

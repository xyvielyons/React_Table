'use client'
import React,{useMemo} from 'react'
import { columns } from './columns'
import mData from '@/components/MOCK_DATA.json'
import { useReactTable,flexRender,getCoreRowModel } from '@tanstack/react-table'
export default function BasicTable() {
  const columnsDef = useMemo(()=>columns,[])
  const data = useMemo(()=>mData,[])
  const table = useReactTable({data,columns:columnsDef,getCoreRowModel:getCoreRowModel()})
 
  return (
    <div>
      <table>
        <thead>
        
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} >
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header,
                  header.getContext())}
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

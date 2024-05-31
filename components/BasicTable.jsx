'use client'
import React,{useMemo, useState} from 'react'
import { columnDefinitionWithGrouping } from './columns'
import mData from '@/components/MOCK_DATA.json'
import { useReactTable,flexRender,getCoreRowModel,getSortedRowModel,getFilteredRowModel,getPaginationRowModel} from '@tanstack/react-table'
import Filter from "@/components/FilterFunction"
export default function BasicTable() {
  const columnsDef = useMemo(()=>columnDefinitionWithGrouping,[])
  const data = useMemo(()=>mData,[])
  const [sorting,setSorting]=useState([])
  const [filtering,setFiltering]=useState("")
  const [columnFilters,setColumnFilters]=useState([])
  const [rowSelection,setRowSelection]=useState({})
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
    getPaginationRowModel:getPaginationRowModel(),
    state:{
      rowSelection:rowSelection
    },
    onRowSelectionChange:setRowSelection,
    enableRowSelection:true,

   
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
      <div className="">
        <button onClick={()=>table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>FirstPage</button>
        <button onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>PreviousPage</button>
        <button onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>nextPage</button>
        <button onClick={()=>table.setPageIndex(table.getPageCount()-1)} disabled={!table.getCanNextPage()}>lastpage</button>
      </div>
      <ul>
        <li>You are on page number: {table.options.state.pagination.pageIndex}</li>
        <li>TotalPages:{table.getPageCount() - 1}</li>

        <input type="number" defaultValue={table.options.state.pagination.pageIndex} onChange={(e)=>table.setPageIndex(e.target.value)}></input>

      </ul>
     <h4>Current Page Size: {table.options.state.pagination.pageSize}</h4>
      <select value={table.options.state.pagination.pageSize} onChange={(e) => table.setPageSize(e.target.value)}>
        {[10,25,50].map(pagesize=> {
          return <option key={pagesize} value={pagesize}>
            {pagesize}

          </option>
        })}
      </select>

      <hr>
      </hr>
      {table.getSelectedRowModel().flatRows.map((el)=> {
        return <ul key={(el.id)}><li key={(el.id)}>{JSON.stringify(el.original)}</li></ul>
      })}

    </div>
  )
}

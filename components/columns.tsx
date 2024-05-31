import moment from 'moment';
import IndeterminateCheckbox from '@/components/IndeterminateCheckbox'
export const columns = [
    {
        header:"Id",
        accessorKey:'id',
        footer:'Id',
        enableColumnFilter:false
    },
   
    {
        header:"first & last",
        accessorFn:(row:any)=>`${row.first_name} ${row.last_name} `,
        footer:'ID'
    },
    
    {
 
        header:"First Name",
        accessorKey:'first_name',
        footer:'Id'

    },
    {
      
        header:"Last Name",
        accessor:'last_name',
        footer:'Id'
    },
    {

        header:"Date of Birth",
        accessorKey:'date_of_birth',
        footer:'Id'
    },
    {
        header:"Country",
        accessorKey:'country',
        footer:'Id'
    },
    {
     
        header:"Phone",
        accessorKey:'phone',
        footer:'Id'
    },

]

//cell merge example
export const columnDefWithCellMerge = [

    {
        header:"first & last",
        accessorFn:(row:any)=>`${row.first_name} ${row.last_name} `,
        footer:'Name'
    },
  

]

export const columnDefinitionWithGrouping = [
    {
        id: "select",
        header: ({ table }:any) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }:any) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
    {
        header:"Id",
        accessorKey:'id',
        footer:'Id',
        enableColumnFilter:false
    },
    {
        header:"Name",
        columns:[

                {
            
                    header:"First Name",
                    accessorKey:'first_name',
                    footer:'Id'

                },
                {
                
                    header:"Last Name",
                    accessorKey:'last_name',
                    footer:'Id'
                },
            
        ],

    },
   
     
    {

        header:"Date of Birth",
        accessorKey:'date_of_birth',
        footer:'Id',
        cell:({getValue}:any)=>moment(new Date(getValue())).format('MMM D YY')

    },
    {
        header:"Country",
        accessorKey:'country',
        footer:'Id',
    },
    {
     
        header:"Phone",
        accessorKey:'phone',
        footer:'Id'
    },

]
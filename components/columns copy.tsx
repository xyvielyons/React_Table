export const columns = [
    {
        header:"Id",
        accessorKey:'id',
        footer:'Id'
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
        header:"Id",
        accessorKey:'id',
        footer:'Id'
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
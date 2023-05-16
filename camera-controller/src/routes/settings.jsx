
import { Table } from "../components/table";
import { useTable } from "../hooks/useTable";

import { FormCo } from "../components/formComponent";



export default function Settings() {



    const [clickEdit, camera, id, handleClick] = useTable()
 
   

    return (
        <>
        
            {clickEdit ?
                <FormCo id={id} camera={camera}  />
                : <Table  handleClick={handleClick} />}
        </>

    )
}
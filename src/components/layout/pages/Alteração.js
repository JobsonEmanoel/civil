import {useForm} from "react-hook-form";

const UserEditForm = ({id, defaultValues}) => {
    const{handleSubmit, register} = useForm({
        defaultValues: defaultValues ??{}
    }); 
    const handleSubmitData = (data: any) => {
        console.log(data);
    }
    return(
    <>
    
 
    <form 
    onSubmit={handleSubmit(handleSubmitData)}

    style={
        {minWidth: '460px',
         display: 'flex',
           gap:'8px',
        marginTop:'16px'
        }
    }
    >
       <input type="text"{...register('name')} placeholder="Nome"/>
       <input type="text"{...register('address')} placeholder="Endereço" />
       <input type="text"{...register('cell')} placeholder="Telefone" />
       <input type="text"{...register('bo')} placeholder="Ocorrência" />

       <button type="submit">Adicionar</button>
    </form>
    </>
    ) 
}
function Listar() {
    return(
        <div>
<h2> Listar </h2>
<UserEditForm />
        </div>

    )
    
}
export default Listar 

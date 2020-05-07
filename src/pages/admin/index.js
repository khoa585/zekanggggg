import DashBoard from './../../components/Admin/DashBoard/DashBoard';
import {auth,withAuthSync} from './../../untils/auth';
function Index(){
    return (
        <DashBoard >
            
        </DashBoard>
    )
}
// Index.getInitialProps = async (context) =>{
//     let {ctx} = context;
//     let token = auth(ctx);
    
//     return {token} ;
// }
export default withAuthSync(Index);
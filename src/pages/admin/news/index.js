import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import {withAuthSync} from './../../../untils/auth';
function Index(){
    return (
        <DoashBoard>
            
        </DoashBoard>
    )
}
export default withAuthSync(Index);
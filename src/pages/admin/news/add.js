import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import {withAuthSync} from './../../../untils/auth';
import AddNews from './../../../components/Admin/News/AddNews';
function Index(){
    return (
        <DoashBoard>
            <AddNews />
        </DoashBoard>
    )
}
export default withAuthSync(Index);
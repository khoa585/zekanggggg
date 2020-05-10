import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import {withAuthSync} from './../../../untils/auth';
import News from './../../../components/Admin/News/News';
import {ACTION_FETCH_LIST_NEWS} from './../../../actions/newsActions';
function Index(){
    return (
        <DoashBoard>
            <News /> 
        </DoashBoard>
    )
}
Index.getInitialProps = async({store})=>{
    store.dispatch(ACTION_FETCH_LIST_NEWS());
    return {}
}
export default withAuthSync(Index);
import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import Products from './../../../components/Admin/Product/Products';
import {withAuthSync} from './../../../untils/auth';
import {ACTION_FETCH_LIST_PRODUCT} from './../../../actions/productsAction';
function Index(){
    return (
        <DoashBoard>
            <Products/>
        </DoashBoard>
    )
}
Index.getInitialProps = async({store})=>{
    store.dispatch(ACTION_FETCH_LIST_PRODUCT());
    return {}
}
export default withAuthSync(Index);
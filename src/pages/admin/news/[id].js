import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import {withAuthSync} from './../../../untils/auth';
import Detial from './../../../components/Admin/News/DetialNews';
import {fetchGetDetialNew} from './../../../api/news';
function Index(props){
    return(
        <DoashBoard>
            <Detial {...props}/>
        </DoashBoard>
    )
}
Index.getInitialProps =async({query,res}) =>{
    console.log(query.id)
    const datarequest = await fetchGetDetialNew(query.id);
    if(datarequest?.data?.data){
        return {...datarequest.data.data};
    }
    res.writeHead(302, { Location: '/admin/news' })
    res.end()
    
}
export default withAuthSync(Index);
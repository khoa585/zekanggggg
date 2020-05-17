import React, { useState } from 'react';
import { Input } from 'antd';
import { BsSearch } from "react-icons/bs"
import { fetchSearchProduct } from '../../../api/products'
import './style.scss';
const Searchs = (props) => {
    const [search,setSearch] = useState([])
    const hasdallsearch = async (e) => {
        const result = await fetchSearchProduct(e.target.value)
        setSearch(result)
    };
    console.log(search)
    return (
        <>
            <li className="menu-item container-search ">
                <input type="text" id="__inputItemProps" onChange={hasdallsearch} />
                <BsSearch></BsSearch>
            </li>
        </>
    )
}
export default Searchs;






// import React, { useState, useEffect } from 'react';
// import { Input } from 'antd';
// import Suggestion from 'search-suggestion';
// import { BsSearch, BsX } from "react-icons/bs";
// import { fetchListProduct } from '../../../api/products'
// import './style.scss';
// const Searchs = (props) => {
//     const [currentData, setCurrentData] = useState([])
//     const [items,setItems] = useState([])
//     const { Search } = Input;
//     const createData = (word, data) => {
//         const re = new RegExp(`${word.toLowerCase()}.*\\B`, 'g');
//         return data.filter(item => re.test(item.toLowerCase()));
//     };
//     console.log(items)
//     const handleChange = e => {
//         const value = e.target.value;
//         let filterData = [];
//         if (value) {
//             filterData = createData(value, items);
//         }
//         setCurrentData(filterData)
//     };
//     const fetchdata = (data) =>{
//         const result = data.map((task,index)=>{
//             return task.name
//         })
//         setItems(result)
//     }
//     useEffect(() => {
//         const fetch = async () => {
//             const result = await fetchListProduct()
//             fetchdata(result.data.data)
//         }
//         fetch()
//     }, [])
//     return (
//         <>
//             <Suggestion
//                 getDisplayName={item => item}
//                 items={currentData}
//             >
//                 {({
//                     getInputProps,
//                     getListItemProps,
//                     getItemProps,
//                     inputValue,
//                     selectedItem,
//                     highlightedIndex,
//                     items,
//                     isOpen,
//                     clearInputValue
//                 }) => (
//                         <li className="menu-item container-search ">
//                             <input type="search"
//                                 id="search"
//                                 {...getInputProps({
//                                     placeholder: "Search...",
//                                     onChange: handleChange
//                                 })}
//                             />
//                             <BsSearch></BsSearch>
//                             {isOpen && (
//                                 <div {...getListItemProps()}>
//                                     {
//                                         items.map((item, index) => (
//                                             <>
//                                                 <div
//                                                     {...getItemProps({ item, index })}
//                                                     key={item}
//                                                 >
//                                                     {item}
//                                                 </div>
//                                             </>
//                                         ))}
//                                 </div>
//                             )}
//                         </li>
//                     )}
//             </Suggestion>
//         </>
//     )
// }
// export default Searchs;

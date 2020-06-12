import React, { useState } from 'react';
import { fetchSearchProduct } from '../../../api/products';
import * as lodashs from "lodash";
import { to_slug } from '../../../commons/index';
import { Link } from '../../../../routers';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { BsSearch } from "react-icons/bs"
import './style.scss'
const ModalSearch = (props) => {
    const [val, setVal] = useState('')
    const [search, setSearch] = useState([])
    const hasdallsearch = lodashs.debounce(async (value) => {
        setVal(value)
        const result = await fetchSearchProduct(value)
        value === '' ? setSearch([]) : setSearch(result.data?.data)
    }, 500)
    const showsearch = () => {
        if (search.length != 0) {
            const result = search.map((item, index) => {
                return <div className="items" key={index}>
                    <Link route={`/san-pham/${to_slug(item.name)}.${item.id}`}>
                        <a><div>{item.name}</div ></a>
                    </Link>
                </div>
            })
            return result;
        } else {
            return <div className="noresult">Không có kết quả cần tìm</div>
        }
    }
    const shows = (val) => {
        if (val === '') {
            return;
        } else {
            return <div>
                <div>gợi ý</div>
                <div><span>Sản phẩm</span></div>
                <Container fluid>
                    {
                        showsearch()
                    }
                </Container>
            </div>
        }
    }
    const myFunctiononBlur = () => {
        setTimeout(() => {
            setVal('')
        }, 200)
    }
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title><Link route="/"><img src="../img/logo.png" alt="cover" className="img-fluid" /></Link></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    placeholder="Nhập từ khóa cần tìm"
                    value={val}
                    id="__inputItemProps"
                    onBlur={myFunctiononBlur}
                    onChange={(e) => hasdallsearch(e.target.value)}
                    enterButton
                />
                <BsSearch />
            </Modal.Body>
            <div id="__listItemProps">
                {
                    shows(val)
                }
            </div>
        </>
    )
}
export default React.memo(ModalSearch);
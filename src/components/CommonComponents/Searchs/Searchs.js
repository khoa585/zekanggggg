import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs"
import { fetchSearchProduct } from '../../../api/products';
import * as lodashs from "lodash";
import { to_slug } from '../../../commons/index';
import './style.scss';
import { Link } from '../../../../routers';
import { Container, Row, Col } from 'react-bootstrap';
const Searchs = (props) => {
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
                return <Link route={`/san-pham/${to_slug(item.name)}.${item.id}`} key={index}><div>{item.name}</div ></Link>
            })
            return result;
        } else {
            return;
        }
    }
    const shows = (val) => {
        if (val === '') {
            return <div>Không có kết quả cần tìm</div>
        } else {
            return <div>
                <div>gợi ý</div>
                <Container fluid>
                    <Row>
                        <Col lg={2}>
                            <div>Sản phẩm</div>
                        </Col>
                        <Col lg={10}>
                            {
                                showsearch()
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        }
    }
    return (
        <>
            <li className="menu-item container-search ">
                <input
                    type="text"
                    id="__inputItemProps"
                    onChange={(e) => hasdallsearch(e.target.value)}
                />
                <BsSearch></BsSearch>
                <div id="__listItemProps">
                    {
                        shows(val)
                    }
                </div>
            </li>
        </>
    )
}
export default Searchs;
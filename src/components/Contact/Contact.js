import React, { useState } from 'react';
import './style.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from './../../../routers';
function Contact(props) {
    const [state, setState] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    })
    const lat = 16.333481;
    const lng = 107.748174
    const onMarkerClick = (props, marker, e) => {
        setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    return (
        <React.Fragment>
            <div className="distant___"></div>
            <Container>
                <div className="title-wrap-contact">
                    <Link route="/"><span className="title-wrap-contact-0">Home</span></Link>
                    <span className="title-wrap-contact-1">Liên hệ</span>
                </div>
                <div className="distant___"></div>
                <div>
                    <form>
                        <Row>
                            <Col lg={12}>
                                <div className="form-name-contact">
                                    <div className="form-name-contact-1">
                                        <div className="form-contact-0">
                                            <div className="form-contact">
                                                <div className="contact-title-0">
                                                    <div className="contact-title-1">
                                                        <span>Tiêu đề</span>
                                                        <input type="input"></input>
                                                    </div>
                                                    <div className="contact-title-1">
                                                        <span>Họ tên</span>
                                                        <input type="input"></input>
                                                    </div>
                                                </div>
                                                <div className="contact-title-0">
                                                    <div className="contact-title-1">
                                                        <span>Địa chỉ</span>
                                                        <input type="input"></input>
                                                    </div>
                                                    <div className="contact-title-1">
                                                        <span>Email</span>
                                                        <input type="input"></input>
                                                    </div>
                                                </div>
                                                <div className="contact-title-0 contact-title-0-mission">
                                                    <div className="contact-title-2">
                                                        <span>Lời nhắn</span>
                                                        <textarea id="mission">
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className="contact-submit">
                                                    <input type="submit" value="GỬI LỜI NHẮN"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-name">
                                            <div className="contact-name-0">
                                                <div>
                                                    <h6>CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI VÀ GIẢI PHÁP QUỐC TẾ ANT GROUP</h6>
                                                </div>
                                                <div>
                                                    <span>Trụ sở chính</span>
                                                    <p>Tầng 3, Tòa nhà Lotus, Số 2 phố Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội</p>
                                                </div>
                                                <div>
                                                    <span>Tel</span>
                                                    <p>024 3640 1123</p>
                                                </div>
                                                <div>
                                                    <span>Email</span>
                                                    <p>info@antgroup.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
            <div className="distant___"></div>
            <div style={{ height: '500px', width: '100%' }}>
                <Map
                    google={props.google}
                    initialCenter={{
                        lat: lat,
                        lng: lng
                    }}
                    zoom={15}
                >
                    <Marker onClick={onMarkerClick}
                        position={{ lat: lat, lng: lng }}
                        name={'Hi'}
                    />
                    <InfoWindow
                        marker={state.activeMarker}
                        visible={state.showingInfoWindow}>
                        <div>
                            <h1>{state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        </React.Fragment>
    );
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes')
})(Contact);

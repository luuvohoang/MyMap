import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.images[0]} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} person</span>
                        <b>{item.price > 999999
                            ? item.price / 1000000 + " triệu"
                            : item.price / 1000 + " K"}/tháng
                    </b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;
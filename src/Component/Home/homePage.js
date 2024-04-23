import {Button, Col, Row} from "antd";
import {Link} from "react-router-dom";


const HomePage = () => {
    const data="1243"
    return <div>

        <Row type="flex" justify="space-between" style={{padding: '10px'}}>
            <Col>
               <Link to="/home"> {/* Made ECOM a clickable link*/}
                   E-COM
               </Link>
            </Col>
            <Col>
               <Link to={'/login'}> {/* Used to navigate as a component*/}
                   <Button>Login</Button>
               </Link>
            </Col>
        </Row>
        { //Display dynamic Data
            data
        }


    </div>
}

export default HomePage
import Header from "@/componets/molecules/header/header.component";
import {Empty} from "antd";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Empty description={<span>Realiza una búsqueda</span>} />
            </div>
        </>
    )
}

export default Home;

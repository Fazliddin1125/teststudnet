import { Link } from "react-router-dom"
import Card from "../UI/card/card"
import { useEffect, useState } from "react"



const Home = () => {
    const [products, setProducts] = useState([])
    async function GetProducts() {
        try {
            const res = await fetch("https://uzum-api.onrender.com/api/products")
            const data = await res.json()
            console.log(data);
            setProducts(data.data)
            
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        GetProducts()
    }, [])

    return (
        <div className="home">Home
            <h1>Home pahe</h1>
            <h1>Home pahe</h1>
            <h1>Home pahe</h1>
            <h1>Home pahe</h1>
            <h1>Home pahe</h1>
            <h1>Kategoriyalar</h1>
            <h1>Sotuvchilar</h1>
            <div className="card-box">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <Link to={"/detail"} >Card</Link>
        </div>
    )
}

export default Home
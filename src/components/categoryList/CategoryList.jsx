import CategoryItem from "../categoryItem/CategoryItem"
import "./CategoryList.scss"

const CategoryList = () => {
    const categories = [
        {
            id: "1",
            title: "Hats",
            img: "https://static3.depositphotos.com/1001028/131/i/600/depositphotos_1318297-stock-photo-hat.jpg"
        },
        {
            id: "2",
            title: "Jakets",
            img: "https://www.k4fashion.com/wp-content/uploads/2022/04/Fashion-Guide-Trendy-Leather-Jacket-Every-Mans-Dream-750x460.jpg"
        },
        {
            id: "3",
            title: "Sneakers",
            img: "https://rukminim1.flixcart.com/image/416/416/kst9gnk0/shoe/s/i/b/6-casual-sneakers-sports-running-outdoor-partywear-6-hoc-white-original-imag6bfw4ahzwawn.jpeg?q=70"
        },
        {
            id: "4",
            title: "Womens",
            img: "https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/12/Womens-Clothing.jpg"
        },
        {
            id: "5",
            title: "Mens",
            img: "https://assets.gqindia.com/photos/60deef4a78863c66ba52c557/master/w_1920,h_1080,c_limit/TRENDREPORTCOMPS3006_1.jpg"
        }
    ]
    return (
        <div className="categories">
            {
                categories.map((cat) => {
                    return (
                        <CategoryItem key={cat.id} {...cat} />
                    )
                })
            }
        </div>
    )
}

export default CategoryList
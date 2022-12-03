import "./CategoryItem.scss"


const CategoryItem = ({ title, img }) => {
    return (
        <div className="category">
            <div className="background_img" style={{
                backgroundImage: `url(${img})`
            }} />
            <div className="category_body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem
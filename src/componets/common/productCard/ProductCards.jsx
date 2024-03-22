const ProductCards = (props) => {
    return (
        <div>
            <h3>{props.tiltle}</h3>
            <h4>{props.description}</h4>
            <h5>{props.price}</h5>
        </div>
    )
}

export default ProductCards

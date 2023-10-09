import "./ReadPostCard.css"

export default function ReadPostCard({title, image, description,content ,extraInfo} ){
    return(
        <>
            <div className="ReadPostCard">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <div className="img-info">
                <img src={image} alt="city " className="image" />
                <p>{extraInfo}</p>
                </div>
                <p>{content}</p>
                


            </div>
        
        </>
    )
}


function NewsCard(props) {
    return <div className="col-lg-3 col-md-6 card-col">
    <div className="card" style={{ width: "18rem" }}>
        <img src={props.newsItems.urlToImage} class="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{props.newsItems.source.name}</h5>
            <p className="card-text">{props.newsItems.title}</p>
            <a href={props.newsItems.url} target="_blank" className="btn btn-danger">Read more</a>
        </div>
        </div>
    </div>
}
export default NewsCard
export const PostCard = ({ id, cover, title, body }) => (
    <div className="col-md-3">
        <div className="card">
            <img className="card-img-top" src={cover} alt={title} title={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    </div>
)
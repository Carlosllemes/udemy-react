export const Button = ({ onClick, disabled }) => {
    return (
        <button
            type="button"
            className="btn btn-info w-100 d-block"
            disabled={disabled}
            onClick={onClick}>Load More Posts
        </button>
    )
}
export const TextInput = ({handleFilterPost,searchText}) =>{
    return (
        <input
        placeholder="Pesquisar"
        className="form-control mt-2 mb-2"
        type="search"
        onChange={handleFilterPost}
        value={searchText}
      />
    )
}
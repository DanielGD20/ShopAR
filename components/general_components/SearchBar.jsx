const SearchBar = () => {
  return (
    <div className="col-8 pr-2">
      <form className="page-header-signup mr-3">
        <div className="form-row justify-content-center">
          <div className="col-8">
            <div className="form-group mr-0 mr-lg-2">
              <input
                className="form-control rounded-pill"
                id="search"
                type="text"
                placeholder="Buscar Productos..."
              />
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary btn-block btn-marketing rounded-pill"
              type="submit"
            >
              Buscar <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

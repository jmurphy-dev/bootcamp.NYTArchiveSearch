const searchParams = {
  searchTerm: "",
  searchDepth: "",
  searchBeginDate: "",
  searchEndDate: "",
  // searchQuery: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchParams.searchTerm}&api-key=cqAs97wG20GAPgLPCyAlYv1Ujuj8VfcU&begin_date=${searchParams.searchBeginDate}&end_date=${searchParms.searchEndDate}&page=${searchParams.searchDepth}`,

  get searchQuery() {
    let searchQuery = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchTerm}&api-key=cqAs97wG20GAPgLPCyAlYv1Ujuj8VfcU&page=${this.searchDepth}`;

    this.searchBeginDate !== "" && (searchQuery += `&begin_date=${this.searchBeginDate}`);
    this.searchEndDate !== "" && (searchQuery += `&end_date=${this.searchEndDate}`);

    return searchQuery
  }
};


const searchParams = {
  searchTerm: "",
  searchDepth: "",
  searchBeginDate: "",
  searchEndDate: "",

  get searchQuery() {
    let searchQuery = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchTerm}&api-key=cqAs97wG20GAPgLPCyAlYv1Ujuj8VfcU&page=${this.searchDepth}`;

    this.searchBeginDate !== "" && (searchQuery += `&begin_date=${this.searchBeginDate}`);
    this.searchEndDate !== "" && (searchQuery += `&end_date=${this.searchEndDate}`);

    return searchQuery
  }
};


$('button[type="submit"]').on('click', e => {
  e.preventDefault();

  let searchTerm = $("#InputTerm").val();
  let searchDepth = $("#InputNumberRecords").val();
  let searchBeginDate = $("#InputStart").val();
  let searchEndDate = $("#InputEnd").val();

  if (searchTerm === "") {
    // TODO: Alert of some sort
    return;
  }

  if (searchDepth === "") {
    // TODO: Alert of some sort
    return;
  }

  searchParams.searchTerm = searchTerm;
  searchParams.searchDepth = searchDepth;
  searchParams.searchBeginDate = searchBeginDate;
  searchParams.searchEndDate = searchEndDate;

  console.log(searchParams);
});


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

  if ($('#InputTerm').val() === "") {
    // TODO: Alert of some sort
    return;
  }

  if ($("#InputNumberRecords").val() === "") {
    // TODO: Alert of some sort
    return;
  }

  searchParams.searchTerm = $("#InputTerm").val();
  searchParams.searchDepth = $("#InputNumberRecords").val();
  searchParams.searchBeginDate = $("#InputStart").val();
  searchParams.searchEndDate = $("#InputEnd").val();

  console.log(searchParams);
});


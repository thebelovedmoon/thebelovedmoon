var loading;

function pageLoad() {
    loading = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("revealPage").style.display = "block";
}
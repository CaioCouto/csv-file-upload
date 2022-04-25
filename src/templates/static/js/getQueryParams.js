function getQueryParams() {
    const queryParams = {}
    const windowSearch = window.location.search;
    if(windowSearch) {
        window.location.search.substring(1).split('&').forEach(item => {
            const param = item.split('=');
            queryParams[param[0]] = param[1];
        });
        return queryParams;
    }
    else return false;
}
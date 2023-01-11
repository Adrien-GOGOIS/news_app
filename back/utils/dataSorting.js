function sortByDate(data) {
    return data.sort((a, b) => { return new Date(b.publishedAt) - new Date(a.publishedAt) });
}

module.exports = sortByDate;

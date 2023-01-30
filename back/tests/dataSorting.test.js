const sortByDate = require("../utils/dataSorting");

const data = [
    {
        article: "franceInfo",
        publishedAt: "2023-01-02T20:48:00Z"
    },
    {
        article: "Express",
        publishedAt: "2023-01-03T20:48:00Z"
    },
    {
        article: "Figaro",
        publishedAt: "2023-01-03T19:48:00Z"
    },
]

test('sort data by date', () => {
  expect(sortByDate(data)[0].article).toBe("Express");
});
import Mock from "mockjs";

Mock.mock("/data", "post", {
  "items|30": [
    {
      id: "@id",
      title: "@sentence(10, 20)",
      "status|1": ["published", "draft", "deleted"],
      author: "name",
      display_time: "@datetime",
      pageviews: "@integer(300, 5000)",
    },
  ],
});

Mock.mock("/type/phone", "get", {
  "type|3-6": [
    {
      name: "@cname",
      id: "@id",
      child: {
        "row1|1-4": ["@cname"],
        "row2|1-4": ["@cname"],
        "row3|1-4": ["@cname"],
      },
    },
  ],
});

import PageContent from "pages/PageContent";
import { capitalizeEveryWord } from "./helper";

export const generateRoutes = (data) => {
  let routes = [];

  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key, index) => {
      let categoryName = key.replace(" ", "-").toLowerCase();
      let category = {
        id: index,
        name: capitalizeEveryWord(categoryName.replace("-", " ")),
        path: `/${categoryName}/:child`,
        children: [],
      };

      data[key].map((post) => {
        let path = `/${categoryName}/${post.post_name}`;
        category.children.push({
          id: post.post_name,
          name: post.post_title,
          path: path,
        });
      });
      return routes.push({ page: PageContent, ...category });
    });
  }
  return routes;
};

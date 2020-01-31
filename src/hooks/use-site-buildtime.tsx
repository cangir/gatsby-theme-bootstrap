import { graphql, useStaticQuery } from "gatsby";

type Props = {
  site: {
    buildTime: string;
  };
};

{
  /* TODO: fix warning Missing return type on function */
}

export const useSiteBuildTime = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
      }
    }
  `);

  return data.site.buildTime;
};

export default useSiteBuildTime;

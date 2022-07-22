import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const ProudectPage = () => {
  const { id, name } = useParams();
  const location = useLocation();
  
  const qs = queryString.parse(location.search);

  console.log(qs);
  //   console.log(params);
  return (
    <h1>
      Product No:{id} Name: {name}
    </h1>
  );
};

export default ProudectPage;

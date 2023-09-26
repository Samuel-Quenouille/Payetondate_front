import Places from "../components/Places";
import Testimonies from "../components/Testimonies";

export default function Admin() {

  return (
    <>
      <h1 className="title_categoriespage" style={{position: 'relative'}}>Admin</h1>
      <div>
        <div>
          <Places />
        </div>
        <div>
          <Testimonies />
        </div>
      </div>
    </>
  );
}
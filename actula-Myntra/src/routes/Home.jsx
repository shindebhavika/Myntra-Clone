import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

function Home() {
  const items = useSelector((store) => store.items);
  // console.log("get home", items);
  
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}

export default Home;

import { useEffect, useState } from "react";
import NavBar from "./components/header/NavBar";
import Banner from "./components/header/Banner";
import SelecCategories from "./components/ui/SelecCategories";
import Search from "./components/ui/Search";
import GifCard from "./components/ui/GifCard";

// const noImage = import.meta.env.VITE_NO_IMAGE;
const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [catagories, setCatagories] = useState([]);
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("autos");
  useEffect(() => {
    getCategories();
    getSearch();
  }, []);
  useEffect(() => {
    getSearch();
  }, [search])
  
  const getCategories = async () => {
    const resp = await fetch(`${urlApi}gifs/categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    setCatagories(data);
  };

  const getSearch = async () => {
    const resp = await fetch(`${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=10&offset=0`
    );
    const { data } = await resp.json();
    setGifs(data);
    console.log("holas")
  };

  const onChangeByCategory = (event) => {
    setSearch(event.target.value);
  };
  const onChangeSearch =(event)=>{
    const data =event.target.value
    if (data.length >=3) {
      setSearch(event.target.value)
    }
  }

  return (
    <>
      <NavBar />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <SelecCategories
              onChangeByCategory={onChangeByCategory}
              dataItemC={catagories}
            />
          </div>
          <div className="col-sm-6">
            <Search onChangeSearch={(event)=>onChangeSearch(event)}/>
          </div>
        </div>
      </div>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <GifCard dataItemG={gifs} />
          </div>
        </div>
      </div>
    </>
  );
};

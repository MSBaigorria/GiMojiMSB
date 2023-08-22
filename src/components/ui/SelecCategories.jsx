const SelecCategories = ({ dataItemC, onChangeByCategory}) => {

  return (
    <>
      <select className="form-select" aria-label="Default select example"
      onChange={(event)=>onChangeByCategory(event)}>
        <option defaultValue={true}>Selecciona una Categoria</option>
        {dataItemC.map((categ) => (
          <option key={categ.name} value={categ.name}>
            {categ.name}{" "}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelecCategories;

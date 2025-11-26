interface CarouselControlsProps {
  indiceActivo: number,
  setIndiceActivo: React.Dispatch<React.SetStateAction<number>>,
  ciclo?: boolean
}

function CarouselControls( { indiceActivo, setIndiceActivo, ciclo = true } : CarouselControlsProps) {

  function handleLeftClick(){
      setIndiceActivo(indiceActivo -1);
  }
  
  function handleRightClick(){
      setIndiceActivo(indiceActivo +1);
  }
  console.log(ciclo); // Borrar cuando esté implementado el control
  return (
    <div className="carousel-controls">
      <button className="carousel-btn" onClick={handleLeftClick}>&lt;</button>
      <button className="carousel-btn" onClick={handleRightClick}>&gt;</button>
    </div>
  );
}
export default CarouselControls;

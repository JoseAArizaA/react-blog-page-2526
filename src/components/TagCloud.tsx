import { useState } from "react";
import "./TagCloud.css"

interface TagCloudProps {
    etiquetas: string[]
}
function TagCloud({etiquetas} : TagCloudProps) {
    const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState<string[]>([]);
    


    function handleClick(event: React.MouseEvent<HTMLSpanElement>) {
        let etiqueta :string;
        if (event.currentTarget.dataset.etiqueta != undefined) {
            etiqueta = event.currentTarget.dataset.etiqueta;
            if (!etiquetasSeleccionadas.includes(etiqueta)) {
                setEtiquetasSeleccionadas([etiqueta, ...etiquetasSeleccionadas]);
            }
        }

    }

    return (
        <div className="tag-cloud">
            <h3>Etiquetas</h3>
            <div className="tag-cloud__container">
                {
                    etiquetas.map((etiqueta) => <span className={etiquetasSeleccionadas.includes(etiqueta) ? "etiqueta-seleccionada": ""} data-etiqueta={etiqueta} onClick={handleClick} key={etiqueta}>#{etiqueta}</span>)
                }
            </div>
        </div>
    );
}

export default TagCloud;
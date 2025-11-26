import type { Entrada } from "../types/entrada";
import './PostCard.css';

interface PostCardProps {
    entrada: Entrada
}


function PostCard( {entrada} : PostCardProps ) {
    return (<div className="post-card">
<img className="post-card__image" alt={entrada.titular} src={entrada.imagen} />
<h4 className="post-card__title">{entrada.titular}</h4>
<p className="post-card__author">Por {entrada.autor.nombre}</p>
</div>);
}

export default PostCard;







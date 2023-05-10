import imageToAdd from '../../resources/img/404.jpg';
import {NotFound404Text, NotFoundDescription, NotFoundImage,} from "./NotFound.style";
export const NotFound = () => {

    return (
        <div>
        <NotFoundImage src={imageToAdd} />
        <NotFound404Text>404</NotFound404Text>
        <NotFoundDescription>Przepraszamy, ząb nie znaleziony</NotFoundDescription>
    </div>
    )


}

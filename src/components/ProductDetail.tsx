import { useParams } from "react-router"

export function ProductDetail(){
    const params = useParams()
    return(
        <>
        <h1>Showing {params.id} Product Detail</h1>
        </>
    )
}
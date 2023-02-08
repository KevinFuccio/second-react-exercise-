import SingleBook from "./SingleBook"
function bookList(prop){
    let book = prop.books
    return(
       book.map((e)=>
        <SingleBook book={e} key={e.asin}/>
       )
    )
}
export default bookList
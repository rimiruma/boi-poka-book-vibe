import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/Addtodb";






const BookDetail = () => {

    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id)
    const { bookId: currentBookId, image, bookName, author, tags, category, review, totalPages, rating, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
        

    }

    // console.log(data, book, bookId, id);


    return (
        <div className="hero flex justify-between mx-auto">
            <div className="hero-content bg-base-200 flex-col lg:flex-row">
                <img
                    src={image}
                    className="w-full rounded-lg shadow-2xl p-8" />
                <div className="p-8">
                    <h3 className="text-2xl font-bold">{bookName}</h3>
                    <p className="mt-3">
                        By: {author}
                    </p>
                    <p className="mt-3">{category}</p>
                    <p className="mt-3">Review: {review}</p>
                    <div className="p-3 mt-3">
                        {
                            tags.map((tag, indx) => <button key={indx} className="btn bg-green-50 text-lime-500 hover:text-red-800 font-bold px-8">{tag}</button>)
                        }
                    </div>
                    <div className="border-t-2 border-dashed"></div>

                    <p className="">Number of Pages: {totalPages}</p>
                    <p className="">Publisher: {publisher}</p>
                    <p className="">Year of Publishing: {yearOfPublishing}</p>
                    <p className="">Rating: {rating}</p>

                    <div className="mt-5">
                        <button onClick={ () =>handleMarkAsRead(bookId)} className="btn btn-active mr-5 hover:bg-orange-500">Mark as Read</button>
                        <button className="btn bg-[#50B1C9] text-white">Add to Wish list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
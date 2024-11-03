import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;
    return (
        <Link to={ `/books/${bookId}`}><div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-300 py-8 rounded-2xl">
            <img
                src={image}
                className="h-[166px] mx-auto"
                alt={bookName} />
        </figure>
        <div className="card-body">
            <div className="flex justify-center gap-4 p-3">
                {
                    tags.map((tag, indx) => <button key={indx} className="btn bg-green-50 text-lime-500 hover:text-red-800 font-bold rounded-full">{tag}</button>)
                }
            </div>
            <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>
            <div className="border-t-2 border-dashed"></div>
            <div className="card-actions justify-between">
                <div className="text-xl font-bold">{category}</div>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                    </div>
            </div>
        </div>
    </div></Link>
    );
};

export default Book;
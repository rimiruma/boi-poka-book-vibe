import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[400px] mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl ml-10" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] mt-10 text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
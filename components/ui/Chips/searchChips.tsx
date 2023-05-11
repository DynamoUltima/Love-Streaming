const SearchChips = ({title}:{title:String}) => {
    return (
        <button className='bg-gray-800 p-2 rounded-full px-4 shadow-md  text-white  my-1 hover:bg-white hover:text-black'>{title}</button>
    );
}

export default SearchChips;
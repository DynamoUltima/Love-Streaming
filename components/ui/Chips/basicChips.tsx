const BasicChips = ({title}:{title:String}) => {
    return (
        <button className=' w-auto h-auto bg-mattblack p-2 rounded-full px-4 shadow-md  text-white  my-1 hover:bg-white hover:text-black'>{title}</button>
    );
}

export default BasicChips;
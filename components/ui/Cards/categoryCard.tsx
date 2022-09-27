const CategoryCard = () => {
    return (
        <>
            <div className='flex flex-col w-52 space-y-2 justify-center'>
                {/* Image */}
                <div className=' h-52 w-52 bg-blue-500 rounded-lg overflow-clip flex flex-col space-y-4  p-2 justify-center shadow-lg'>

                    <div className="text-white text-lg font-extrabold">5 min with Pastor Oti</div>
                    <div className="text-gray-200 text-sm">
                        5 minutes with Pastor Oti is a daily audio devotional  for your personal Spiritual growth
                    </div>
   
                </div>
                {/* Text */}
                

            </div>
        </>
    );
}

export default CategoryCard;
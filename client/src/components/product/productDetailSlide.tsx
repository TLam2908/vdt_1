

const ProductDetailSlide = ({img, title}: {img: string, title: string}) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full object-cover h-[500px]"/>
            </div>
            <div className="p-6 flex flex-col">
                <h3 className="text-lg max-sm:text-md font-semibold text-black">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default ProductDetailSlide;
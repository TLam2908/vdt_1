const Title = ({ text }: { text: string }) => {
    return (
        <div className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl md:pb-20 pb-2"> 
            {text}
        </div>
    )
}

export default Title;
const Title = ({ text }: { text: string }) => {
    return (
        <div className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl pb-20"> 
            {text}
        </div>
    )
}

export default Title;
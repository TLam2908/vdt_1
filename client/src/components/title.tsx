const Title = ({ text }: { text: string }) => {
    return (
        <h1 className="font-semibold text-5xl max-lg:text-4xl max-md:text-3xl leading-tight md:pb-20 pb-2"> 
            {text}
        </h1>
    )
}

export default Title;
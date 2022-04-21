const CustomLoader = ({ src, width, quality }) => {
    return `https://cdn.sanity.io/${src}?w=${width}&q=${quality || 75}`
}

export default CustomLoader

const INITIAL_STATE = {
    sections: [
        {
            title: "Casio",
            imageUrl: "https://chasy.kg/image/cache/catalog/MTP-1308D-1A-800x800.jpg",
            id: 1,
            linkUrl: "shop/watch"
        },
        {
            title: "children's watch",
            imageUrl: "https://fortuna.kg/image/cache/catalog/i/ng/io/04671c309c6bab7a976a3f9043caa1c2-1024x768.png",
            id: 2,
            linkUrl: "shop/watch"
        },
        {
            title: "apple watch",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ultra-band-unselect-gallery-1-202309_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1693544486108",
            id: 3,
            linkUrl: "shop/watch"
        },
        {
            title: "womens watch",
            imageUrl: "https://img5.lalafo.com/i/posters/original/9b/91/7b/471444a24d7c68e17d2e2fd050.jpeg",
            size: "large",
            id: 4,
            linkUrl: "shop/watch"
        },
        {
            title: "mens watch",
            imageUrl: "https://swisstime-exclusive.kg/wp-content/uploads/2019/05/Armani-Exchange-AX2600.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/watch"
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer
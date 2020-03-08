import imgSrc from './pic.jpg'

var App = {
    data(){
        return {
            imgSrc : imgSrc
        }
    },
    template : `
        <div>
            <img :src='imgSrc' alt='图片' />
        </div>
    `
}

export default App;
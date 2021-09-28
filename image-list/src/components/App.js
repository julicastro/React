import React from 'react';
import axios from 'axios';
import SearchInput from './Searchinput';
import ImageList from './ImageList';




class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }


    async onSearchSubmit(entry) {
        const response = await axios.get(`https://pixabay.com/api/?key=23593155-6110516b279c1b3c5aacc66a9&q=${entry}&image_type=photo`)
        this.setState({ images: response.data.hits })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default App;
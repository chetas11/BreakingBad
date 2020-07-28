import React from 'react'
import CharctersItems from './CharctersItems'
import Spinner from  '../ui/Spinner'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? <Spinner /> : <section className = "cards">
        {items.map(items => (
            <CharctersItems key ={items.char_id} items = {items}></CharctersItems>
        ))}
    </section>
}

export default CharacterGrid

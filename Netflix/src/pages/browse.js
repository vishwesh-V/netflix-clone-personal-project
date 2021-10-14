import React from 'react';
import {BrowseContainer} from '../containers/browse';
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse(){
    const {series} = useContent('series');
    const {movies} = useContent('movies');

    const slides = selectionFilter({series, movies});
    

    return <BrowseContainer slides = {slides}/>;
}
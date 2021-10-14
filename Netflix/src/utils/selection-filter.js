export default function selectionFilter({series, movies}){
    return {
        series: [
            {
                title: 'Documentaries', 
                data: series.filter((item)=> item.genre === 'documentaries'),

            },
            {
                title: 'Comedies', 
                data: series.filter((item)=> item.genre === 'comedies'),

            },
            {
                title: 'Crime', 
                data: series.filter((item)=> item.genre === 'crime'),

            }
            
        ],
        movies: [
            {
                title: 'Children', 
                data: series.filter((item)=> item.genre === 'children'),

            },

            {
                title: 'Action', 
                data: series.filter((item)=> item.genre === 'action'),

            },
            {
                title: 'Comedy', 
                data: series.filter((item)=> item.genre === 'comedy'),

            }

        ]
    }
}
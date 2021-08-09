export default  class Pages {
    static paginatorSettings(total:number, perPage:number ) {
        let pages:number[] = [];
        const amount:number = Math.floor(total/perPage) + 2;
        for ( let i = 1 ; i < amount ; i++ ) {
            pages.push(i)
        }
        console.log(pages)
        return pages;
    }
}



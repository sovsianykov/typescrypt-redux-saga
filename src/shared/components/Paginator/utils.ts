
export default  class Pages {

    static paginatorSettings(total: number, perPage: number) {
        let pages:number[] = [];
        const amount:number = Math.ceil(total/perPage)  ;
        for ( let i = 1 ; i < amount ; i++ ) {
            pages.push(i)
        }
        console.log(pages)
        return pages;
    }
    static showingPages(array: any, perPage: number, activePageId: number) {
        const currentMax:number = perPage*activePageId;
        const currentMin:number = perPage*(activePageId-1);
        let newArr = []
        if (array ) {
            for (let i = 1; i < array.length; i++) {
                if (i > currentMin && i < currentMax) {
                    newArr.push(array[i])
                }
            }
        }
        console.log(newArr)
        return newArr
    };
}



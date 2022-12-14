class Book {
    constructor(name, genre, pageAmount) {
        this.name = '';
        this.genre = '';
        this.pageAmount = 0;
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}
const books = [
    new Book('Harry Potter', 'fantasy', 980),
    new Book('Lord of the Ring', 'fantasy', 1001),
    new Book('How to be productive', 'lifestyle', 500),
    new Book('Game of Thrones', 'fantasy', 999)
];
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
    }
}
const recommendedBook = findSuitableBook('fantasy', 1000);
if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
}
console.log(';;');
console.log('q2122;');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJO0lBS1IsWUFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLFVBQWtCO1FBSjNELFNBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxVQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsZUFBVSxHQUFHLENBQUMsQ0FBQTtRQUdaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQzlCLENBQUM7Q0FDRjtBQUVELE1BQU0sS0FBSyxHQUFXO0lBQ3BCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO0lBQ3hDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDN0MsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQztJQUNsRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO0NBQzVDLENBQUE7QUFFRCxTQUFTLGdCQUFnQixDQUN2QixLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsdUJBQXVCLEdBQUcsSUFBSTtJQUU5QixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUE7SUFDOUQsQ0FBQyxDQUFBO0lBRUQsSUFBSSx1QkFBdUIsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDbkM7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtLQUNqQztBQUNILENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFekQsSUFBSSxlQUFlLFlBQVksSUFBSSxFQUFFO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0NBRWxDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9vayB7XG4gIG5hbWUgPSAnJ1xuICBnZW5yZSA9ICcnXG4gIHBhZ2VBbW91bnQgPSAwXG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBnZW5yZTogc3RyaW5nLCBwYWdlQW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5nZW5yZSA9IGdlbnJlXG4gICAgdGhpcy5wYWdlQW1vdW50ID0gcGFnZUFtb3VudFxuICB9XG59XG5cbmNvbnN0IGJvb2tzOiBCb29rW10gPSBbXG4gIG5ldyBCb29rKCdIYXJyeSBQb3R0ZXInLCAnZmFudGFzeScsIDk4MCksXG4gIG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAxMDAxKSxcbiAgbmV3IEJvb2soJ0hvdyB0byBiZSBwcm9kdWN0aXZlJywgJ2xpZmVzdHlsZScsIDUwMCksXG4gIG5ldyBCb29rKCdHYW1lIG9mIFRocm9uZXMnLCAnZmFudGFzeScsIDk5OSlcbl1cblxuZnVuY3Rpb24gZmluZFN1aXRhYmxlQm9vayhcbiAgZ2VucmU6IHN0cmluZyxcbiAgcGFnZXNMaW1pdDogbnVtYmVyLFxuICBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWVcbik6IEJvb2sgfCBCb29rW10gfCB1bmRlZmluZWQge1xuICBjb25zdCBmaW5kQWxnb3JpdGhtID0gKGJvb2s6IEJvb2spID0+IHtcbiAgICByZXR1cm4gYm9vay5nZW5yZSA9PT0gZ2VucmUgJiYgYm9vay5wYWdlQW1vdW50IDw9IHBhZ2VzTGltaXRcbiAgfVxuXG4gIGlmIChtdWx0aXBsZVJlY29tbWVuZGF0aW9ucykge1xuICAgIHJldHVybiBib29rcy5maWx0ZXIoZmluZEFsZ29yaXRobSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYm9va3MuZmluZChmaW5kQWxnb3JpdGhtKVxuICB9XG59XG5cbmNvbnN0IHJlY29tbWVuZGVkQm9vayA9IGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKVxuXG5pZiAocmVjb21tZW5kZWRCb29rIGluc3RhbmNlb2YgQm9vaykge1xuICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2submFtZSlcblxufVxuXG5jb25zb2xlLmxvZygnOzsnKVxuY29uc29sZS5sb2coJ3EyMTIyOycpXG5cblxuIl19
function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;

}

function Book(title, author, pageCount) {
    
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    
    this.builder = function() {
        return {
            title: function(titleArg) {
                this.title = titleArg
                return this;
            },
            author: function(authorArg) {
                this.author = authorArg
                return this;
            },
            pageCount: function(pageCountArg) {
                this.pageCount = pageCountArg
                return this;
            },
            build: function() {
                return {
                    title: this.title,
                    author: this.author,
                    pageCount: this.pageCount
                }
            }
        }
    }

}

function BookTwo(title, author, pageCount) {
    
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    
    this.builder = function() {
        return {
            title: function(titleArg) {
                this.title = titleArg
                return this;
            },
            author: function(authorArg) {
                this.author = authorArg
                return this;
            },
            pageCount: function(pageCountArg) {
                this.pageCount = pageCountArg
                return this;
            },
            build: function() {
                return {
                    title: this.title,
                    author: this.author,
                    pageCount: this.pageCount
                }
            }
        }
    }

    return this.builder();

}

let book = new Book().builder()
    .title('A brave new world')
    .author('Aldous Huxley')
    .pageCount(345)
    .build();

let book2 = new Book('A brave new world', 'Aldous Huxley', 345);

let book3 = BookTwo().title('Anchor').author('Me').pageCount(125);

// console.log(book);
// console.log(book2);
console.log(book3);
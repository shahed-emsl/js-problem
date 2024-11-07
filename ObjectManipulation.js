
const books = [
    { title: "অগ্নি পরীক্ষা", author: "রবীন্দ্রনাথ ঠাকুর", year: 1910 },
    { title: "দ্বীপনামা", author: "কাজী নজরুল ইসলাম", year: 1931 },
    { title: "গোরা", author: "রবীন্দ্রনাথ ঠাকুর", year: 1910 },
    { title: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", year: 1929 }
  ];
  

  function getBookTitles(books) {
    return books.map(book => book.title);
  }
  

  const bookTitles = getBookTitles(books);
  console.log(bookTitles);
    
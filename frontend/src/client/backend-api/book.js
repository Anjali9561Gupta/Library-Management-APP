// const BookApi = {
//   getAllBooks: async () => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/book", { method: "GET" })
//     return res.json()
//   },
//   getBookByIsbn: async (bookIsbn) => {
//     const res = await fetch(`https://library-management-app-1.onrender.com/v1/book/${bookIsbn}`, { method: "GET" })
//     return res.json()
//   },
//   addBook: async (data) => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/book", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     })
//     return res.json()
//   },
//   patchBookByIsbn: async (bookIsbn, data) => {
//     const res = await fetch(`https://library-management-app-1.onrender.com/v1/book/${bookIsbn}`, {
//       method: "PATCH",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     })
//     return res.json()
//   },
//   deleteBook: async (bookIsbn) => {
//     const res = await fetch(`https://library-management-app-1.onrender.com/v1/book/${bookIsbn}`, { method: "DELETE" })
//     return res.json()
//   },
// }

// module.exports = { BookApi }



const BookApi = {
  getAllBooks: async () => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/book", { method: "GET" });
      if (!res.ok) {
        throw new Error(`Failed to fetch books: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in getAllBooks:", error);
      throw error;
    }
  },
  getBookByIsbn: async (bookIsbn) => {
    try {
      const res = await fetch(`https://library-management-app-1.onrender.com/v1/book/${bookIsbn}`, { method: "GET" });
      if (!res.ok) {
        throw new Error(`Failed to fetch book: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in getBookByIsbn:", error);
      throw error;
    }
  },
  addBook: async (data) => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/book", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`Failed to add book: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in addBook:", error);
      throw error;
    }
  },
  patchBookByIsbn: async (bookIsbn, data) => {
    try {
      const res = await fetch(`https://library-management-app-1.onrender.com/v1/book/${bookIsbn}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`Failed to update book: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in patchBookByIsbn:", error);
      throw error;
    }
  },
  deleteBook: async (bookIsbn) => {
    try {
      const res = await fetch(`https://library-management-app-1.onrender.com/v1/book/${bookIsbn}`, { method: "DELETE" });
      if (!res.ok) {
        throw new Error(`Failed to delete book: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in deleteBook:", error);
      throw error;
    }
  },
}

module.exports = { BookApi }
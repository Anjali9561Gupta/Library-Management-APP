// const UserApi = {
//   borrowBook: async (isbn, userId) => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/user/borrow", {
//       method: "POST",
//       body: JSON.stringify({ isbn, userId }),
//       headers: { "Content-Type": "application/json" },
//     })
//     return res.json()
//   },
//   returnBook: async (isbn, userId) => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/user/return", {
//       method: "POST",
//       body: JSON.stringify({ isbn, userId }),
//       headers: { "Content-Type": "application/json" },
//     })
//     return res.json()
//   },
//   getBorrowBook: async () => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/user/borrowed-books", { method: "GET" })
//     return res.json()
//   },
//   login: async (username, password) => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/user/login", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     })
//     return res.json()
//   },
//   getProfile: async () => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/user/profile", { method: "GET" })
//     return res.json()
//   },
//   logout: async () => {
//     const res = await fetch("https://library-management-app-1.onrender.com/v1/user/logout", { method: "GET" })
//     return res.json()
//   },
// }

// module.exports = { UserApi }



const UserApi = {
  borrowBook: async (isbn, userId) => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/user/borrow", {
        method: "POST",
        body: JSON.stringify({ isbn, userId }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`Failed to borrow book: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in borrowBook:", error);
      throw error;
    }
  },
  returnBook: async (isbn, userId) => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/user/return", {
        method: "POST",
        body: JSON.stringify({ isbn, userId }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`Failed to return book: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in returnBook:", error);
      throw error;
    }
  },
  getBorrowBook: async () => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/user/borrowed-books", { method: "GET" });
      if (!res.ok) {
        throw new Error(`Failed to get borrowed books: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in getBorrowBook:", error);
      throw error;
    }
  },
  login: async (username, password) => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`Failed to login: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },
  getProfile: async () => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/user/profile", { method: "GET" });
      if (!res.ok) {
        throw new Error(`Failed to get profile: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in getProfile:", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      const res = await fetch("https://library-management-app-1.onrender.com/v1/user/logout", { method: "GET" });
      if (!res.ok) {
        throw new Error(`Failed to logout: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error in logout:", error);
      throw error;
    }
  },
}

module.exports = { UserApi }

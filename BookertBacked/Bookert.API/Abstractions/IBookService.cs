using Bookert.API.Model;

using Microsoft.AspNetCore.Mvc;

namespace Bookert.API.Abstractions
{
    public interface IBookService
    {
        Task<IEnumerable<Book>> GetBooks();
        Task<Book> GetBookById(int id);
        Task<Book> CreateBook(Book book);
        Task PutBook(int id, Book book);
        Task DeleteBook(int id);
    }
}

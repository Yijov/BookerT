using Bookert.API.Abstractions;
using Bookert.API.Model;
using Bookert.API.Service;
using Microsoft.AspNetCore.Mvc;



namespace Bookert.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }


        [HttpGet]
        public  async Task<ActionResult<IEnumerable<Book>>> Get()
        {
            var books = await _bookService.GetBooks();
            return Ok(books);
        }

   
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBookById(int id)
        {

            var book = await _bookService.GetBookById(id);
            if (book == null)
                return NotFound();
            return Ok(book);
        }

      
        [HttpPost]
        public async Task<ActionResult<Book>> Post([FromBody] Book book)
        {
            var createdBook = await _bookService.CreateBook(book);
            return CreatedAtAction(nameof(GetBookById), new { id = createdBook.Id }, createdBook);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Book book)
        {

            if (id != book.Id)
                return BadRequest("Book ID mismatch");
        
            await _bookService.PutBook(id, book);
            return NoContent();
          
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
       
            await _bookService.DeleteBook(id);
            return NoContent();
        }
    }
}

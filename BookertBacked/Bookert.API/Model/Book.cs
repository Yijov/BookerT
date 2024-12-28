namespace Bookert.API.Model
{
    public class Book
    {
        
        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Excerpt { get; set; }

        public int PageCount { get; set; }
    }
}
using Bookert.API.Abstractions;
using Bookert.API.Model;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;

namespace Bookert.API.Service
{
    public class BookService : IBookService
    {
        private readonly string _address ;
        private readonly HttpClient _httpClient;

        public BookService(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _address = "https://fakerestapi.azurewebsites.net/api/v1/books";
        }

        public async Task<IEnumerable<Book>> GetBooks()
        {
            var response = await _httpClient.GetAsync(_address);

            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var books = JsonSerializer.Deserialize<IEnumerable<Book>>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return books;
        }


        public async Task<Book> GetBookById(int id)
        {
            var response = await _httpClient.GetAsync($"{_address}/{id}");
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<Book>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
        public async Task<Book> CreateBook(Book book)
        {
            var jsonContent = JsonSerializer.Serialize(book);
            var content = new StringContent(jsonContent, System.Text.Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync(_address, content);
            response.EnsureSuccessStatusCode();
            var responseContent = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<Book>(responseContent, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }

        public async Task PutBook(int id, Book book)
        {
            var jsonContent = JsonSerializer.Serialize(book);
            var content = new StringContent(jsonContent, System.Text.Encoding.UTF8, "application/json");
            var response = await _httpClient.PutAsync($"{_address}/{id}", content);
            response.EnsureSuccessStatusCode();
        }

        public async Task DeleteBook(int id)
        {
            var response = await _httpClient.DeleteAsync($"{_address}/{id}");
            response.EnsureSuccessStatusCode();
        }


    }
}
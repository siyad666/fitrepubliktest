
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using fitrepubliktest1.DB;
using fitrepubliktest1.Models;

namespace fitrepubliktest1.Controllers
{
    public class CustomerController:Controller
    {
        private TestDbContext _context;

        public CustomerController(TestDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        [Route("api/Customer/Index")]

        public IEnumerable<Customer> Index()

        {

            return _context.CustomerDetails;

        }
        [HttpPost]

        [Route("api/Customer/Create")]

        public void Create([FromBody] Customer customer)

        {

            _context.Add(customer);
            _context.SaveChanges();


        }
        [HttpGet]

        [Route("api/Customer/Details/{id}")]

        public Customer Details(int id)

        {

            return _context.CustomerDetails.FirstOrDefault(a => a.Id == id);

        }
        [HttpPut]

        [Route("api/Customer/Edit")]

        public void Edit([FromBody]Customer customer)

        {

          
            _context.Attach(customer);
            _context.Entry(customer).State = EntityState.Modified;
            
            _context.SaveChanges();

        }
        [HttpDelete]

        [Route("api/Customer/Delete/{id}")]

        public void Delete(int id)

        {

            var item = _context.CustomerDetails.FirstOrDefault(a => a.Id == id);
            _context.Remove(item);
            _context.SaveChanges();

        }
    }
}

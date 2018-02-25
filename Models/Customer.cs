using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitrepubliktest1.Models
{
    public class Customer
    {
        public  int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
    }
}

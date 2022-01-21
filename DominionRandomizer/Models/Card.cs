namespace DominionRandomizer.Models
{
    public class Card
    {
        public long id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string description { get; set; }
        public int cost { get; set; }
        public long expansion_id { get; set; }
     
    }
}

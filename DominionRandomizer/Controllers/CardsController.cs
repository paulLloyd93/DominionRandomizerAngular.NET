using Microsoft.EntityFrameworkCore;
using DominionRandomizer.Models;
using Microsoft.AspNetCore.Mvc;
using DominionRandomizer.Data;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using System;

namespace DominionRandomizer.Controllers
{
    [Route("dominionAPI/Cards")]
    [ApiController]
    [EnableCors("LocalOriginPolicy")]
    public class CardsController : ControllerBase
    {
        private readonly DominionContext ctx;
        private Random random;

        public CardsController(DominionContext context)
        {
            ctx = context;
            random = new Random();
        }

        [HttpGet]
        public async Task<List<Card>> GetAllCards()
        {
            return await ctx.card.ToListAsync();
        }

        [HttpGet]
        [Route("dominionAPI/RandomTen")]
        public async Task<List<Card>> GetRandomTen()
        {
            List<Card> allCards = await ctx.card.ToListAsync();
            int upperLimit = allCards.Count();
            List<Card> randomTen = new List<Card>();
            while (randomTen.Count() < 10)
            {
                int randomIndex = random.Next(upperLimit);
                if (!randomTen.Contains(allCards[randomIndex]))
                {
                    randomTen.Add(allCards[randomIndex]);
                }
            }
            return randomTen;
        }

        [HttpGet("{expansionIds}")]
        public async Task<List<Card>> GetChosenPool([FromRoute] int[] expansionIds)
        {
            List<Card> allCards = await ctx.card.ToListAsync();
            List<Card> chosenPool = new List<Card>();
            foreach (Card card in allCards)
            {
                foreach(int expansionId in expansionIds)
                {
                    if(expansionId == (int)card.expansion_id)
                    {
                        chosenPool.Add(card);
                    }
                }
            }

            return chosenPool;
        }
    }
}

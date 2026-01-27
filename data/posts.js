import { marked } from 'marked'

export class Post {
  constructor(content, options = {}) {
    this.content = content;
    this.isPublished = options.isPublished ?? true;
    this.date = options.customDate || new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getTitle() {
    return this.content.split('\n').find(line => line.trim().startsWith('##'))?.replace('##', '').trim() || 'Untitled';
  }

  toHTML() {
    return marked(this.content);
  }

  getExcerpt(length = 200) {
    const text = this.content.replace(/##.*\n/, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`#]/g, '').trim();
    return text.length > length ? text.substring(0, length) + '...' : text;
  }
}

export const posts = [
  new Post(`
## Armin and Earendil

Last time I checked in it was to say that after nine years at Balderton I was beginning a new adventure.

Today I'm stoked to share that the adventure is an internet company, [Earendil](https://earendil.com), and that I've started it with [Armin](https://lucumr.pocoo.org/).

Here is what Armin and I wrote about ourselves in a memo we prepared for our angel investors:

> armin and colin met 2 years ago. vienna is a small city. colin read armin's blog and appreciated how thoughtful he sounded.
>
> first we started sharing coffees. then we started sharing meals. then we started seeing each other on weekends. brainstorming late on weekdays. our families met. you would find us jamming on saturdays at midnight. we went on a hike with our kids. we took a trip to china, riding high speed rail from beijing to hong kong. we had a 24 hour pit stop in changsha. we experimented with karaoke and payment software. we discussed how the world was changing and what was going to matter in software even after the seas rose. where will the high ground be?
>
> we've never formally worked together but there is a clarity and purpose to our relationship — our company — that is refreshing and energizing.
>
> what draws us together is a common sense of values and purpose. we want to be successful and we want to do it the right way. the way where we can go home and tell our kids about it transparently, excitedly.

[Earendil](https://earendil.com) was formed to craft software and open protocols to strengthen human agency. Open standards, the Internet and AI all have the power to greatly enhance what humanity can achieve. We believe it is important that we build mechanisms that strengthen our capabilities rather than diminish them. We wield the hammer, the hammer does not wield us.

If you want to follow along with Earendil, you can do so [here](https://earendil.com/posts/subscribe/).
`, {
    customDate: 'Jan 27, 2026',
    isPublished: true
  }),

  new Post(`
## next chapter

Last week marks nine years since I joined Balderton. Today I am announcing with both sadness and excitement that I will be departing in my role as a Partner at the end of the month.

On the Balderton website it says the best way to change the world is to build a business. I'm leaving to do just that. Across many dimensions it feels like a new order is forming. I have the urge to help shape the internet that my children may use one day by building products, by building teams, by having my fingers in the clay of an operating business again.

Looking back, I feel overwhelming gratitude towards the entire firm and for my time as an investor.

I was asked recently what the purpose of Balderton is. While managing capital is a less obviously tactile pursuit, the firm is extraordinary not because of what we do but because of how we do it.

It is extraordinary because of how we treat those around us. We are stubbornly kind, even under pressure. We are reflective and thoughtful. We leave our egos at the door, and push towards excellence without sacrificing our ideals or principles.

This is what the purpose of Balderton is for me. It is more a way of demonstrating to the world how to be rather than what to be. This is something I will take with me.

There are many other learnings I am grateful for. The Founders I work with have shown me what perseverance, creativity, and ambition can yield. I will try to do right by those learnings. The proof, as they say, will be in the pudding.

More to come..
`, {
    customDate: 'Jul 5, 2025',
    isPublished: true
  }),

  new Post(`
## gendered AI

My sense is that it is a problem for humanity that the resource we are increasingly turning to for knowledge is likely heavily biased towards men and away from women.

To my knowledge none of the large LLMs have published the breakdown of gender within their training data. But we do know that the models are trained on sites like Wikipedia and Reddit and we have gender data for those sites.

Several Wikipedia studies state that 90% of Wikipedia contributors are male and fewer than 10% female. Other studies show that of all the biographies on Wikipedia, roughly 80% are of men and 20% are of women.

On Reddit, the gender skew of the user base currently is something like 65% male, 35% female, although historically the skew towards men was greater. This [study](https://www.cyber.pitt.edu/sites/default/files/who_authors_the_internet_analyzing_gender_diversity_chatgpt3_data.pdf) states that just over a quarter of the training data for GPT-3 was authored by women.

What kind of perspective does this gender skew in training data give us? What perspective do we miss? If half of humanity are women, shouldn't that voice be equally represented in software and weights that attempt to reflect the combined knowledge of humanity?

When life leads me to an important crossroad, or when I'm simply looking for another perspective, I'm lucky to be able to turn to both my mom and my dad for help. We will lose something profound if we lose sight of that.
`, {
    customDate: 'Apr 5, 2025',
    isPublished: true
  }),

  new Post(`
## daydream

daydream is a new way of giving power to people to create things online that they own and control.

Our tech stack consists of large language models, IPv6, SMTP, other open standards of the internet, and authentic human creativity.

We believe the human voice should be at the center of human computer interaction.

Our mission is to empower people to own the online versions of themselves with ease.

We want to unmediate social media.
`, {
    customDate: 'Feb 9, 2025',
    isPublished: false
  }),

  new Post(`
## fuse

Earlier this year, my Partner Daniel and I found ourselves in the Docklands in East London at sunrise. We were there to meet Alan Chang and Charles Orr of [Fuse](https://www.fuseenergy.com/), who have just announced their ambitious $78M raise to help fix Europe's broken energy market. Having both previously worked at Revolut, where Alan was most recently Chief Revenue Officer, they both have a keen sense of the importance of ambition, focus and tenacity in the face of very large, very regulated, and very complex markets.

But let's rewind to that first dawn meeting. What became immediately apparent to Daniel and I as the sun came up was that Alan and Charles, like Nikolay, were deeply hungry entrepreneurs who had a knack for identifying big hairy global problems, untangling their complex causes, breaking those down into a list of concrete actions, motivating humans around them to join them in their purpose, and together knocking out these actions and building solutions, bird by bird.

That morning, we were discussing European energy markets, and the confounding problem that despite the availability of a record supply of renewable electricity in Europe and the UK, which was costing next to nothing in marginal input costs, electricity prices across the continent had soared due to the invasion of Ukraine and misplaced policies of marginal-cost pricing.

That these prices are generating windfall profits for power producers is not news to any of us. What most of us haven't done in response is to start a hugely ambitious network whose goal it is to lower energy bills, finance further investments into green energy, and help households and small businesses realize the wide benefits of wind, solar and batteries.

We are excited to be welcoming Alan, Charles and the whole Fuse team to Balderton.
`, {
    customDate: 'Sep 12, 2022',
    isPublished: true
  }),

  new Post(`
## ory

As a venture investor there are rare occasions when you get to be the first check into a company that is truly special.

While we are still in the early innings, what Aeneas, Thomas and the team at [Ory](https://www.ory.sh/) are committed to is to building something important and doing so with a sharp eye for excellence. We believe that excellence is a quality that persists over time, and both Thomas, one of Germany's early internet stalwarts, and Aeneas, who has received Germany's highest civilian honor, have exhibited it in spades.

Based in Munich but already boasting a truly global community, Ory is building a zero-trust, cloud-native identity layer for the internet. Built on top of their widely-used open source stack, the Ory Cloud delivers to developers and organizations the ability to implement identity across their software stack without compromising on privacy, extensibility and security. Ory was building hardened open source identity software for many years before commercialization, and has experience merging pull requests and managing a decentralized community of contributors, something we believe grants a fundamental advantage in infrastructure software.

Since we at Balderton first spoke to the team in 2019, their commitment to the ideals of open source, the passion they have for product, and the commitment to becoming global leaders in what they do has been apparent.

You can read more about Ory and what they stand for in their Manifesto.

We are very excited to be working alongside Insight Partners and George Mathew, alongside the Ory team to play a small role in Ory's future success.
`, {
    customDate: 'Jan 05, 2022',
    isPublished: true
  }),

  new Post(`
## product market fit

a lot of people smarter than me have written a lot of intelligent things about product market fit. i still get asked the question by entrepreneurs of how i would define it so i thought i'd lay down a summary of my thoughts here.

creative, but largely unhelpful definition:
where the rubber meets the road

or, as Andy Rachleff would say:
when the dogs start eating the dog food

this is the most simple definition. the market is ingesting what you're serving.

external (the investors) definition:

a non-trivial group of customers or users are engaging with your product and service, and have proven that they are willing to trade something valuable for it, usually time or money (or both)

internal (the founders) definition:

early observations of your original value hypothesis being proven correct. a value hypothesis articulates what exactly your product or service is, who will use it, and most importantly why they will value it.

when you have early signs that your product or service is being used by people who truly value it, you've achieved product market fit.

this framework may seem a bit at odds with lean startup methodology.

what if the product or service that customers are valuing is not core to our business?
what if my core product or service is being valued by customers we didn't built it for?
shouldn't these be celebrated? shouldn't that count as product market fit? yes, eventually. but in the first instance you need to rally the company around the product or service that is taking off, and potentially rethink your long-term mission, your medium term strategy and your short-term tactics. in the second instance you should run with it, but also ask yourself why your targeted audience isn't ingesting the product or service and another one is, and potentially rejig the customer facing aspects of your business accordingly.

the above definitions may seem vague and imprecise. the truth is, it's hard to find a universal definition of product market fit that applies to every company. it might mean 4 enterprise customers signing sizeable contracts, it might mean $80k MRR, it might mean participants in a network starting the share meaningful content with one another, it might mean one developer deploying your framework for the first time in production...

perhaps it's clear, but of the above, i think the internal definition is most vital. if you're confident you've achieved product market fit but an investor or external party doesn't agree, go find one that does.
`, {
    customDate: 'May 18, 2021',
    isPublished: true
  }),

  new Post(`
## the open source requirement

Engineers have been writing software for IT infrastructure a lot longer than I have been alive, and at Balderton we led the Series A in MySQL when the sounds of dial-up modems were still pervasive. There is nothing new about load balancers, relational databases, or search algorithms.

What is new is how these fundamental components of infrastructure are now being built and bought. Not long ago, an open source approach to building infrastructure software was a philosophical choice. For the generation of infrastructure software builders starting out today, being open source has become a requirement.

It has become a requirement because open source projects have distinct advantages in infrastructure software versus their closed source counterparts, namely:

i. Greater implicit trust in the quality of the work
ii. Larger scope for collaboration across a worldwide developer community
iii. Development and iteration speed that isn't gated by hiring and onboarding
iv. Scale and adoption benefits due to wider distribution and awareness
v. Revenue benefits as software buyers from developers to CTOs begin to view open source as a hygiene factor on the label

How did we get here? In the days of MySQL, open source was often still considered a fringe, radical ideology that pitted greedy businessmen against idealistic creators. Today, venture capitalists are pouring money into open source at unprecedented rates, and founders with quickly accelerating Github star counts are just as likely to attract capital as those with rapid revenue growth.

This is partially due to a signalling effect. The successes of MySQL, Redhat, MongoDB, Elastic, Confluent, HashiCorp and Databricks, among many others, have shown that the interests of the businessmen and the dreamers are perhaps not irreconcilable.

We've been excited to be part of open source journeys from MySQL to Talend, and more recently backing the company behind Traefik, one of the strongest open source communities to ever emerge out of Europe.

There is a generational shift afoot. Gen Z and those that come after them will have been networked to one another their entire lives. They share media, play games, write words and cultivate friendships with contacts next door and around the world. They have grown up with a set of tools available to them that allows for proximity, convenience, and efficiency when it comes to collaboration and communication. When they build software that is globally relevant they will harness the power of those tools to build them with global approaches.

It is interesting that even as we shift towards wider and more diverse collaboration among builders, the platforms they are ultimately building on are collapsing into fewer and fewer ecosystems. Whether it's the paucity of options in cloud hosting providers, the emergence of a single dominant standard in container orchestration, or a handful of forward-thinking social media companies that dominate the development of open source frameworks, there is a degree of concentration that is troublesome, as is often the case in software these days.

Moreover, there are some fundamental issues of fairness around value capture and maintainer compensation that are as yet unsolved. The open source requirement will only harden as the benefits of trust, collaboration, speed, scale and revenue accelerate over time, and as open source becomes increasingly commercialized it will be important that commercial entities created by and using open source contributions think about how to do so fairly.

That said, the undeniable shift towards open source is inspiring. It enables and celebrates humans from one end of the world to the other who work together on designing, creating, and debugging the most complex machines of our time.
`, {
    customDate: 'Sep 03, 2020',
    isPublished: true
  }),
];

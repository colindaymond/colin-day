import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"
import { marked } from 'marked'

class Post {
  constructor(content, options = {}) {
    this.content = content;
    this.isPublished = options.isPublished ?? true;
    this.date = options.customDate || new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  toHTML() {
    return marked(this.content);
  }
}

export default function Foggynotions() {
  const posts = [
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

  Earlier this year, my Partner Daniel and I found ourselves in the Docklands in East London at sunrise. We were there to meet Alan Chang and Charles Orr of Tesseract, who have just announced their ambitious $78M raise to help fix Europe's broken energy market. Having both previously worked at Revolut, where Alan was most recently Chief Revenue Officer, they both have a keen sense of the importance of ambition, focus and tenacity in the face of very large, very regulated, and very complex markets.

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

While we are still in the early innings, what Aeneas, Thomas and the team at Ory are committed to is to building something important and doing so with a sharp eye for excellence. We believe that excellence is a quality that persists over time, and both Thomas, one of Germany's early internet stalwarts, and Aeneas, who has received Germany's highest civilian honor, have exhibited it in spades.

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

    new Post(`
## probably quantum? NISQ and where we are today

![probably quantum](/images/probably_quantum.png)

In October, my colleagues Lars Fjeldsoe-Nielsen, Maxime Le Dantec and I were honored to co-host an awesome crowd of thinkers and builders in Quantum Computing at Balderton HQ alongside the UK's National Physical Laboratory, just a night before Google announced their achievement of quantum supremacy.

I won't get into the fray as to whether Google's result amounts to supremacy or speedup, and I think this blog post by Leo at Rahko does a succinct job of summarizing the result and placing it in context. (For a more detailed take see Scott Aaronson's post) Needless to say, these are exciting times for the future of computing and for achieving a greater capacity to understand Nature.

Our gathering was motivated by John Preskill's paper Quantum Computing in the NISQ Era and Beyond. NISQ is an acronym that describes the current available quantum computing devices. They are Noisy Intermediate-Scale Quantum Computers that represent huge advances compared to the available technology a few years ago, but are still a far cry from a truly Universal Quantum Computer. In the paper, Preskill writes that "Now is an opportune time for a fruitful discussion among researchers, entrepreneurs, managers, and investors who share an interest in quantum computing." As capital has surged into this still-highly experimental field in ever greater quantities (from $70M in total quantum-focused VC in 2015 to $560M so far in 2019), it becomes critical to gather disparate viewpoints within four walls and try to separate signal from noise. (We were also inspired by BlueYard and Google's 2017 Munich gathering, A Quantum Leap.)

Over the course of the day we were lucky to have vigorous debate from company leaders like Christopher Savoie, CEO at Zapata, Ilyas Khan, CEO at Cambridge Quantum Computing, Leo Wossnig, CEO at Rahko and Justin Ging, CCO at Honeywell Quantum. These voices were complemented by many researchers from Oxford, Cambridge, UCL and other universities, by investors, and also by representatives of the UK government, including Roger McKinlay, the Challenge Director for Quantum Technologies at UK Research and Innovation.

Through the course of the afternoon we uncovered some of the challenges associated with measuring progress within quantum computing. What are the right metrics? The oft-reported total qubit number is almost certainly not a fair metric. One also has to look at measures of connectivity, fidelity, and circuit depth. Similarly to when you look at the specs for your new laptop, there is no one metric to rule them all.

We had a debate about the benefits and drawbacks of the various hardware approaches for quantum computing, including superconducting qubits, ion traps, and spin qubits. Most notably, we had agreement that superconducting qubits are easy to design with microwave electronics, but can be inherently unstable and there can be calibration issues. Ion trapped qubits have high fidelity and connectivity, but can be difficult and inaccurate to control. Spin qubits in silicon have the benefit of a pre-existing fabrication supply chain that is already manufacturing silicon chips at massive scale and low cost.

To varying degrees, all approaches are experiencing challenges scaling devices to many high quality qubits. We also lack any sort of infrastructure to allow interoperability between different QCs with different types of qubits.

A recurring theme was the necessity of teams working on hardware, software, and end-users (customers) to maintain an open dialogue. A preference one place in the stack could turn into a specification somewhere else.

On the software side, the discussion largely focused on what degree quantum algorithms would need to combine with classical and machine learning algorithms in order to be usable in the near term. Many of us were excited by the scope of using quantum computing and machine learning to augment one another, (as an example of a hybrid approach see this recent paper). All that said, we still have a ways to go in terms of demonstrating concrete value to customers.

Finally, we discussed the need for a deeper talent pool in quantum; quantum chemistry and other potential areas of near-term applications; and how quantum computing might best be regarded as a new frontier of generalized computation that is well-suited to problems requiring high dimensionality rather than high throughput.

Gathering perspectives from academia, industry, investors, and government is an important way to drive technologies further in a thoughtful fashion and we look forward to continuing the conversation with all those who joined us.
    `, { 
      customDate: 'Nov 06, 2019',
      isPublished: true
    }),

    new Post(`
  ## rahko

  For decades theoretical physicists and computer scientists have explored what might be possible if we took a fundamentally quantum approach to computation. They've discovered algorithms that are theoretically able to accomplish tasks no classical algorithm has historically proven capable of. In order to execute those algorithms we require usable quantum computers that are able to perform operations on quantum bits. While a truly general purpose quantum computer is still some time in the future, the pace of advances in quantum hardware in the past few years has been astonishing.

At Balderton, we have been following the rapid emergence of quantum computing with tremendous curiosity (and a healthy dose of skepticism) for several years.

While the future scope of disruption is potentially vast, many applications of quantum computing are contingent on clearing major engineering challenges, largely around scaling the number of error-corrected qubits required to perform many quantum algorithms.

However, there are areas emerging, in particular, quantum chemistry and quantum machine learning, where quantum computing may have a disproportionate impact sooner than anticipated. Why? In chemistry, classical computers have encountered intractable problems that cannot be solved, unless we use quantum approaches to model quantum phenomena. For example, today we fix nitrogen and create ammonia using the Haber-Bosch process. The Haber-Bosch process is only 15% efficient with each pass and we use it to produce 450 million tons of nitrogen fertilizer each year. Currently a ton of fertilizer goes for around $500. Plants are able to fix nitrogen more efficiently but we don't fully understand how because we can't simulate nitrogenase. Using simulations to help better understand nitrogen fixation is an opportunity of tremendous scale.

Within this backdrop, we were lucky enough to come across the team at Rahko. Leo, Ed, Miriam and Ian have gathered a small but world-class team in London. They are taking unique approaches towards unlocking quantum discovery for chemical simulation, with techniques rooted in quantum machine learning that don't require fully error-corrected quantum computers. Their goal on the product side is to build a robust quantum chemistry platform that provides best-in-class toolboxes for running quantum algorithms. Their work cuts across an entire spectrum: from deploying classical machine learning techniques and quantum-inspired methods on classical computers, to hybrid approaches using both classical and noisy intermediate-scale quantum computers (so-called "NISQ" devices), and in time techniques that will utilize quantum computers exclusively. Academically, there is a growing body of research exploring the intersection of machine learning techniques and quantum circuits. Rahko is well positioned to help companies leverage breakthroughs in this area as they unfold.

We couldn't be more proud to be working with the entire team at Rahko and are looking forward to growing and learning together in the years to come.
`, { 
      customDate: 'Oct 11, 2019',
      isPublished: true
    }),

    new Post(`
## a brighter take on privacy

![privacy](/images/privacy.png)

I had the fortune of joining a many-to-one video conference with Ed Snowden in August in Berlin.

Perhaps counterintuitively, it left me feeling rather optimistic about our current direction in regards to privacy both online and in our society, a feeling that contrasted sharply with the gloom I felt after first seeing Citizen Four by Berlin-based filmmaker Laura Poitras. My optimism was informed by a variety of thoughts, namely that:

(i) Ed Snowden is a controversial figure, and rightfully so. Yet here is an individual who sacrificed a tremendous amount in his own life to help bring systemic violations to human liberty into public awareness. However we feel about his first acts, the facts he brought to light have helped us confront challenges to privacy with greater transparency. That he himself was originally culpable and a part of this system clearly brought a level of urgency and raised the stakes regarding the set of choices he had to make.

(ii) For most of us the relevant choices are trivial in comparison. They boil down largely to choosing privacy over convenience, participating in our societies in a fashion consistent with the idea that privacy is a human right, and holding the products and services we engage with online accountable to that same ideal.

Luckily, the gap between true privacy and high quality user experiences in consumer software is narrowing. Before, you may have had to mess around with your own PGP keys to send and receive encrypted emails. Today, for example, you can use ProtonMail. Before, WhatsApp, Facebok Messenger and WeChat were clearly the leaders in terms of mobile messenger UX. Today, Telegram and Signal provide far greater privacy (not to be confused with end-to-end encryption, Facebook still plans on opening WhatsApp up to "businesses in your community"), with quasi feature parity. Organizers of protests in Hong Kong can now effectively communicate on Telegram without sacrificing convenience. What these privacy-focused solutions often don't have are as-robust social graphs, meaning not everyone you care about will be on them, but that's for us to change.

Speaking of social graphs, there are various worthwhile efforts at recreating social networks. Some are based on topics (like gaming) and take a pseudonymous approach, like Discord. Others are trying to create a truly p2p version of a social network, notably Scuttlebutt which feature-wise is attempting to replace a lot of what FB did in the early days, or Mastodon, which is a more p2p version of Twitter. If you want privacy from your browser, you can look to Brave or Tor, and if you want privacy while you search you can use DuckDuckGo, who has built a profitable advertising business without resorting to "we know you better than you know yourself" targeting. Even if you want to stay with your current ecosystem of apps, but better manage configs and permissions, apps like Jumbo Privacy can help you do that.

So the trade-offs we have to make in favor of privacy are getting easier, even as awareness of the cost of the status quo (which supports surveillance, direct personal data monetization, and personal data vulnerability through poor security and storage) expands.

![photo underground](/images/photo_underground.jpeg)

iii. Since Snowden brought institutionalized online surveillance programs like PRISM and XKeyScore to our attention in 2013, privacy has become a daily front-page issue for publications and boardrooms around the world. Alongside this narrative has been the slow realisation that most companies simply cannot be trusted with our own personal data (go have a look at Have I Been Pwned and see for yourself). Luckily, in the relatively short six years since, the European Union has put into law the General Data Protection Regulation (GDPR, implemented in May 2018), which states that "The protection of natural persons in relation to the processing of personal data is a fundamental right". GDPR outlines a comprehensive framework that fundamentally changes how businesses and services must collect, process and treat personal data. Enforcement has so far been muted in my view, while authorities allow for some adjustment time, but I believe major enforcement is a question of when, not if.

Europe is not alone in terms of front-footed policy making on privacy. California passed the California Consumer Privacy Act (CCPA, enforceable beginning January 1, 2020) last year. The Act begins with a reminder that a fundamental right to privacy for all is recognized and protected by California's constitution. These policies have been a critical impetus in ensuring that citizens and market participants treat counterparty data with more respect. The bills have also created huge opportunities for companies focused on privacy software that help businesses bridge the wide gap between what policymakers are signing into law and the privacy-jeopardizing status-quo of the past few decades. Companies that are seizing this opportunity include Collibra, Onetrust and DataGuard

iv. I used to hear the oft-repeated defence of "Why should I care about privacy if I have nothing to hide?" Slowly, that sort of naive collective thinking is starting to fade away. My partner remarked to me that you hear that refrain most often from citizens of countries like the UK and US, who have by and large not had a reason to fear their governments in the past few decades. You won't hear that from Berlin residents who are old enough to remember the Stasi or older residents of Eastern Bloc countries. You won't hear it from protestors in Hong Kong, or families in South Texas huddling in fear of ICE raids. Slowly we are all realizing that it is not just terrorists and criminals who have something to fear from unfettered surveillance. Slowly we are all realizing that the proper time to make decisions to safeguard our civil liberties is when doing so may seem foolish, because when it doesn't it may be too late.

Luckily, the steps we have to take today don't seem as foolish and aren't as hard as they were yesterday.
  `, { 
      customDate: 'Sep 02, 2019',
      isPublished: true
    }),

  new Post(`

## anticipations for 2019

*Und nun wollen wir glauben an ein langes Jahr, das uns gegeben ist, neu, unberührt, voll nie gewesener Dinge...*

"And now we would like to believe in a long year, given to us new, untouched, full of things that never before were..." 
-- Rainer Maria Rilke in a letter to his wife, January 1, 1907

I thought I'd start the new year with a few technology related anticipations.

1/ People will continue to awaken to the idea that social media and our social lives should not be synonymous with massive companies that monetize our attention and interactions with one another via advertising. I strongly believe we have the technical capability and increasingly, the consumer demand for social platforms that will allow us to communicate and share content with people that we care for without giving an effectively free license for that media and data to be compromised or sold and our privacy and attention jeopardized. Protocols like Scuttlebutt demonstrate how truly p2p social media might be designed, platforms like Steemit show how you might built endogenous content-monetization structures, and the increasing popularity of messengers like Signal or Telegram, and browsers like DuckDuckGo and Brave are encouraging.

Contextual Data: From Q32017 to Q32018, FB DAUs in the US & Canada didn't grow (stayed flat at 185M). Europe DAUs grew only 1.5% yoy from 274M to 278M. However FB is growing quickly in Asia-Pacific and 'Rest of World'. FB makes approximately $24 per user per year globally, and is doing annually approximately $52B in revenue at 40-45% operating margins. It also has 4 of the world's top 5 most downloaded apps.

2/ Mobile-first consumer subscription software will continue to soar, although with more scrutiny on predatory practices and annual renewal rates, particularly for those apps that have favored annual subscriptions over monthly. A majority of the time these annual subscriptions represent one-off purchases (renewal rates under 50% are very common). Consumers will start to demand better tools for monitoring, organizing and managing services they have subscribed to.

Contextual Data: Sensor Tower estimates that Q32018 App Store revenue was $18B globally, up 23% from the year prior. $12B of those $18B came from the iOS App Store. Apple takes between 15-30% of subscription revenue and 30% of in-app purchases so safe to say if Sensor Tower is correct Apple is making ±$3B per quarter via App Store revenue. For it's part Apple breaks out Total Services revenue which has been growing 20-30% yoy and in the most recent quarter reached $10B.

3/ Relations between the world's two largest superpowers will continue to deteriorate. On the American side, misperceptions and poor leadership will plague negotiations. Unpredictable incidents like the arrest of the Huawei CFO, which Trump reportedly was not aware of prior to the incident, will destabilize attempts at unwinding tension, and may provoke nationalistic fury from the Chinese directed towards America which we have largely avoided until now. On the Chinese side, the pursuit of 6%+ GDP growth at almost any cost (despite the fact that net new labourers has turned negative) will keep them at the negotiating table, but they will be increasingly sensitive to any actions that may jeopardize their own legitimacy and may therefore respond unpredictably.

Contextual Data: China's economy grew at 6.5% yoy in Q30218, down from 6.7% in Q2 and 6.8% in Q1

4/ There will be a deserved increase of concern over smartphone addiction, accompanied by an increase in smartphone usage. More links will be found between smartphone usage and anxiety, particularly among children and adolescents. This will help fuel a renewed push towards a clearer understanding of our own mental health and wellness, mindfulness, meditation, and the impact of psychedelics on consciousness and their capacity to treat mental health issues. The irony will be lost on people who will turn to smartphones to try and solve their smartphone addiction problems.

5/ As investor confidence and valuations continue to fall, several tech stocks will start to look cheap on a FCF yield basis. Network effects and monopoly power will continue to buoy profits, and with a split legislature and profit-driven President in power, legislative action to counter monopoly effects will not come to pass in 2019.

Contextual Data: In the twelve months ending Sep 30, 2018, Apple had ±$63.4B in free cash flow (based on my rough workings). At today's market cap of $675B that represents 9.4% FCF yield

  `, { 
      customDate: 'Jan 04, 2019',
      isPublished: true
    }),


new Post(`

## back to basics > operating leverage

i've liked thinking about businesses in terms operating leverage since i started looking at internet companies seven years ago. why? it's a great framework for both founders and investors to think about profitability, scalability, and the stage of maturation of a business. it's also just a neat concept.

operating leverage is the rate of change of operating profit with respect to revenue. (in calculus speak d Op Profit / d Revenue) it is bound by 1 on the low end and infinity on the high end.

operating leverage is not to be mistaken for financial leverage. financial leverage is usually understood as debt. borrowing allows firms and funds to generate higher returns on equity by increasing the total amount of resources they can marshal. operating leverage on the other hand is something that is more inherent to a given business model, and in particular its cost structure. let's start with the equation. there are several definitions, and i prefer the following:

operating leverage = (contribution margin) / (operating profit margin)

so a lemonade stand that sells 10k cups of lemonade at $4 each with a unit cost of $2 and total fixed costs of $5k (stands are expensive) has operating leverage of 1.33x

how do i get there?

10k cups of lemonade * $4 revenue per cup = $40k in revenue
$40k - (10k cups * $2 cost per cup) = $20k contribution profit
$20k contribution profit / $40k revenue = 50% contribution margin

$20k contribution profit - $5k fixed costs = $15k operating profit
$15k operating profit / $40k revenue = 37.5% operating profit

50% contribution margin / 37.5% operating profit = 1.33x

this means that for every 1x unit increase in revenue, operating profit increases by 1.33x

you can also think about operating leverage more simply,

operating leverage = (fixed costs) / (total costs)

a company with a high proportion of fixed costs has high operating leverage. put another way, a company with a low proportion of variable costs also has high operating leverage.

![operating leverage](/images/oplev.png)

why is that?

the classic example given for a business with high operating leverage was Microsoft back in the 90s. the R&D costs (developer salaries) incurred by creating enterprise software like Microsoft Word was relatively high even before a single CD of Microsoft Office was sold. once the software had been written, the incremental cost of each additional CD sold was essentially the cost of a blank CD (and the sales & marketing spend in order to get it onto store shelves and into companies). so Microsoft started in a hole of fixed costs, and each incremental copy of Office they sold was essentially pure profit. if they sold enough copies they dug themselves out of the hole and generated substantial profits on top.

other businesses that exhibit high operating leverage include gaming publishers (like EA or Supercell), software-as-a-service companies, pharmaceutical companies, and media consumer subscription companies (as long as they own the content they're selling).

i find operating leverage most helpful when used to compare two businesses within the same sector, like two software businesses offering the same service but one with an API-driven go-to-market and another focused on on-premise installations.

leverage can cut both ways, businesses with high operating leverage might be at risk of not recovering their fixed costs if a particular product or service doesn't perform well. it also makes the financial performance more sensitive to expectations and volatility in revenue growth (because a business with high operating leverage will recoup less overall costs in a downturn than a similar business with low operating leverage)

a short-hand way of determining whether a company has high operating leverage is to look at its gross margin. because COGS are generally variable costs, businesses with high gross margins also usually have high operating leverage (unless sales & marketing costs are unusually high).

as technology investors, most, but not all companies we look at have high operating leverage. incremental copies of the same strings of code have almost zero variable costs. API-driven businesses could have even lower variable costs than Microsoft used to have.

that said, people's attention increasingly does come at a cost. customer acquisitions cost (CAC) is a variable cost, and businesses with high CACs don't have high operating leverage. it's often not that simple to work out at an early stage what future CACs might look like. that tends to be a reason why venture investors like consumer businesses with an element of virality or strong network effects, but those deserve their own post.

in early stage venture, a companies cost structure is often still being built out, and it can be hard to ascertain whether or not particular company will have operating leverage. however, i still think the fixed cost vs variable cost lens is a really helpful way of thinking about businesses.

  `, { 
      customDate: 'Dec 03, 2018',
      isPublished: true
    }),


new Post(`
  ## luno

a central challenge facing venture capitalists today is the decentralization of tomorrow's internet. while many won't admit it, venture capitalists often need centralization to create companies at the scale that deliver outsized returns to their investors. if the internet becomes decentralized, where will those returns be generated?

we've been thinking about that here at balderton with regards to the emerging crypto economy. one conclusion is that the bridges and access points between the "crypto economy" and the "fiat world" will continue to drive value and growth in years to come.

to bridge this gap, you need a team that can both form partnerships with institutions around the world and ship easy-to-use and secure software to the mass market on the devices where they access the internet. it's often said that the crypto world is held back by a severe UX problem; it's less often that you see a cross-platform suite of products addressing that problem at scale.

marcus, tim, and the whole team at luno have known this for years. they have built a suite of products to help empower billions of people by bringing digital currencies to everyone, everywhere. from cape town to singapore, lagos to kuala lumpur, people use luno to buy, store and learn about digital currencies.

the caliber of luno's team and the pace that they are growing their business continues to set them apart. today, luno is announcing their launch into europe, meaning their services will now be available in 40 countries around the world. we're proud to be a part of the journey.
  `, { 
      customDate: 'Sep 19, 2017',
      isPublished: true
    }),

new Post(`
  ## consciousness and intent in technology

![removed](/images/removed.jpg)

Credit to Eric Pickersgill

We have a thesis we've been discussing internally here at Balderton on The End of Reality. Quantum physics and simulation theory aside, it's clear that we are increasingly escaping our immediate physical reality in favor of alternative digitally (or chemically) constructed realities.

This doesn't come as a surprise to me, but I do think it comes at a cost. While we may be more "connected" than ever, are we as present with those with whom we share physical space? While social media allows us to construct a self according to our mind's eye, do we share our flaws and faults as openly and honestly?

Somehow I feel that in the past year or two we have all collectively begun to go over a brink. I remember in the early days of smart devices people were very conscious of not using them during a meal. Today, it's not uncommon for me to look around at a restaurant and see more than half the groups or couples staring down at LCDs. I think we've slowly started to feel that being somewhere else, and not giving those we surround our attention and our presence, is acceptable.

Are we using technology to enhance our own reality or depart from it? For me this question boils down to intent. App makers are becoming very good at distracting us and keeping us engaged well past the point of accomplishing what it is we originally set out to achieve. For me, this means that I need to be extra vigilant:

Why did I take out my phone?
What was my original intent? Have i fulfilled that intent? If so, why am I still using this? What is the most fulfilling way for me to spending the next few minutes?

I know that if I don't stay sharp on this, then minutes, hours, and days of my life will be spent doing things that aren't high on my priority list, don't help me grow, and that haven't really helped me enjoy or live my life fully.

To some of you it may seem ironic for a tech investor to be stating this, given that many of the companies that have built a foundation for venture returns are driven on attention. But I think that the most impactful and important companies of tomorrow will help enable us to fulfil our intentions, rather than distract us from our life's priorities.

Flurry Analytics reported that in Q42016, Americans were spending 300 minutes (5 hours) a day on mobile devices. That's up from 162 minutes (almost double) from Q12014. 5 hours a day is 30% of your waking life. It is 114 days or almost 4 months every year. No doubt that much of that time was spent video chatting with loved ones, capturing memories, editing documents, listening to awesome albums, and answering urgent emails. But how much of the time was spent on click-bait? On checking your email for the 7th time that hour? On videotaping a concert, taking yourself away from the moment for a video that you will never watch again?

I don't think I'm the only one who is thinking about getting this balance right. I recently spent a week in Brooklyn and while I was there a meditation center and yoga studio opened on my street. I spent last week at a tech conference in Berlin where an entire tent revolved between meditation, yoga, qi gong, and kakao ceremonies. The tent was always full. One of the ways we embody this at Balderton is by banning laptops and smartphones from our Monday meetings so that we can be fully present to engage with one another.

Slowly I think we are realizing that as we plug into the promise of digital interfaces and the instant gratification of their realities, it's becoming increasingly important to slow down and awaken to the feel of the earth under our toes, to listen to the words and smiles of our companions. We need time and space to ponder and process our priorities, and only then can equip ourselves with the right tools to achieve them. It's very unlikely those tools are inside your next push notification.

  `, { 
      customDate: 'Jul 24, 2017',
      isPublished: true
    }),

new Post(`
## ethereum and the cryptocurrency opportunity

I have spent some time in recent months thinking and learning about cryptographic tokens and blockchain, specifically Ethereum. This included time at the Ethereum Developers Conference, conversations with thoughtful folks in the space, and a wheat beer at Room77 in Berlin. After these conversations, I feel strongly for various reasons that it is a space we all should be on top of, and where tech investors should be looking to put capital to work, sometimes in unfamiliar ways.

1.  Top Down. Cryptocurrencies (mostly Bitcoin and Ethereum) are emerging as an entirely new asset class with returns we, as technology investors, shouldn't ignore

    In 2010 all the world's cryptocurrencies were worth virtually nothing, today they are worth between $20-25B. In a world where the existing 5 macro asset classes (currencies, commodities, rates, equities, fixed income) are largely influenced by policymakers, central bankers, and increasingly unpredictable democratic outcomes, cryptocurrencies are providing a relatively uncorrelated asset class that can potentially reduce portfolio volatility and increase risk-adjusted returns.

    Not to mention, the returns have been fantastic. In the last 12 months BTC has grown from a market cap of $6.3B to $17.8B. In the last 12 months ETH has grown from a market cap of $850M to $4B. While it's true that these asset classes have also historically been extremely volatile, it's also clear from the data that they have thus far delivered consistently handsome returns to early investors. Losses were posted two of the 9 years, with annual average returns of in the ballpark of 350% and 500% respectively for Bitcoin and Ethereum.

    We may argue that, as impressive as these numbers may be, we are equity investors into technology companies, and as such these and related asset classes are clearly inappropriate investments. That would be a mistake. These tokens are fundamentally new technologies first, and financial assets second.

2.  Tokens are becoming a new funding paradigm. It behooves us to think about how as VCs we can operate here if we see compelling cases.

    Previously, protocol layers (like HTTP or TCP/IP) were largely provided by researchers who didn't (at scale) monetize their protocols directly. It took entities who built software on top of those protocols, and then either sold that software directly, or built networks large enough to be attractive to advertisers, before the protocol could be meaningfully monetized.

    Networks like Ethereum are entirely different. Through cryptographic token sales, a for-profit entity can issue tokens to would-be participants in the network while retaining some portion of the tokens for themselves. As network participation increases, so does the value of the withheld tokens, which they can use to fund operations, incentivize employees, etc.

As such, as technology investors I think we need to think about how we can gain exposure to these tokens
in the event that we see a company that is attractive to us and meets our investment criteria.

3. It is very early days for Ethereum (genesis block in July 2015), and yet the flexibility of its scripting language (Solidity) means that it has already garnered lots of developer attention, with the
promise of a much richer and diverse application layer of decentralized applications (DApps) built on top of it

Big validation points for Ethereum include:

$4B market cap less than two year after creation
Coinbase's adoption (July 2016)
The formation of an Enterprise Ethereum Alliance including Microsoft and JPMorgan (Feb 2017)
Leaders in the space abandoning Bitcoin in favor of Ethereum
You already have an entire ecosystem of developers using Solidity to build DApps
A full list of DApps maintained by ethereum.org

Some examples:

Status - A mobile browser, OS and messaging platform for Ethereum & Dapps

Oraclize - Data carrier for decentralized apps
Ujo Music, Musicoin - Blockchain-enabled digital rights mgmt. for musicians
Etherisc -  p2p Social insurance, flight delay insurance, crop insurance
Gnosis - Prediction market platform including automatic payouts
Ethernote - Legal contracts and templates
uPort - Identity Management
KYC Chain - KYC solutions for finance and law
Augur - Forecasting Tool

Risks

To be fair, this space is fraught with risk, of which here are some:

Security - There have been numerous cases of security breaches at high-profile stores of currencies, most notably Mt. Gox and the DAO. Security needs to be #1 DD item for any investment involved with storing or transferring a high volume of keys
Volatility - Tokens have been tremendously volatile, which is a direct risk for us as investors but also a risk to mass-market adoption.
Reputational risk - Ask your friends what they buy with their Bitcoin
Scale - Both Bitcoin and Ethereum have issues at scale involving block-size, and transaction speeds/costs. Ethereum has an active community and is willing to evolve via hard forks, which suggests it will be the more flexible solution
Is this just crazy?I don't know. Is this so out there? I don't think so. At this point, there have been billionaires created by investing in these tokens, building companies in the space, and building next generation protocol layers. The value of these networks is increasing exponentially as more and more smart people dedicate their careers and lives to the space.

  `, { 
      customDate: 'Mar 21, 2017',
      isPublished: true
    }),

  new Post(`
  ## holding the center - a letter

  Shortly before the election my Grandmother, who is the most ardent Hillary supporter I know, wrote me and asked if I could help explain Trump's popularity. She just couldn't understand it. Here was my letter in response:

--

Grammy,

Somehow I think the anger that manifested itself in Trump's campaign is related to the deep feelings of unfairness that manifested itself in the Occupy movement of 2011. It's why Bernie mounted such a strong challenge despite seeming like a kooky professor.

People are angry. Inequality and the growing divide has a lot to do with it. I'm not entirely sure that's everything though. I think some of it has to do with the loss of faith in a state that provides and supports for its citizens. This doesn't exist any longer in the US. The most "patriotic" people are also those that detest the US Government.

I think some of it has to do with the sterilization and alienation inherent to a society that has allowed corporate interests to grow virtually unchecked while defunding governments and local communities.

I'd also likely to touch on technology, which on one hand has been an unbelievable boost to productivity and is facilitating some wonderful things in terms of connectivity (I'm emailing you!). It's been a huge boon to society in many ways but we always have to be conscious about how we use the tools available to us. Because on the other hand technology and in particular cellular infrastructure has allowed companies to scale at an absolutely unprecedented speed.

I know about these business because it's my job to invest in them, and I know that software companies will enter every aspect of our society. While I believe in the power of capitalism to allocate resources more or less efficiently, history is rife with examples of where we need strong and clear-minded governments to help us steer the boat, to ensure that externalities like pollution are priced in, to ensure that people are not priced out of the basic goods, services and opportunities they should be afforded as human beings. In the long run it is about the governments ability to regulate these businesses fairly and ensure that the gains are accruing to all stakeholders. To founders, investors, employees, and back again to society (taxes).

The truth is, with the rapid development of artificial intelligence, automation, and robotics, fewer and fewer people are equipped with the requisite skills to work competitively in today's economy. On one hand, economists have argued that technological improvements historically haven't increased joblessness but instead changed the nature of the jobs we do (we become "machine managers"). There has also been a boosted demand effect that increases the volume of goods at equilibrium and thus stems job loss. I find these analyses short sighted because they miss the point that in an absolute sense machines are approaching the computing power of the human brain and the capacity for us to differentiate ourselves vs machines is undoubtedly shrinking.

So, in my and many other's view a Universal Basic Income (UBI) of some fashion will be necessary in the medium term. We have to do a better job of ensuring that everyone, across red states and blue, and not just coastal technologists or investors, are participating in the promise of tomorrow. Despite it's reputation a UBI could actually do much to foster a greater sense of fairness across our society, to ensure that everyone is equipped with the positive rights of education and opportunity and the right to live above poverty. The problem is that with the leaders we have now elected it will be likely impossible in the current environment of Fear and Others politics. The forces that have driven many people to such a feeling of displacement within their own society are only accelerating. Unless those of us who are lucky and well-off stop and think about how to reshape our society to make it fundamentally more fair, the discord and divide between red and blue, black and white, young and old, urban and rural, and between rich and poor, is only going to widen.

Turning and turning in the widening gyre
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold

  `, { 
      customDate: 'Nov 10, 2016',
      isPublished: true
    })
  ];

  return (
    <div id="wrapper">
      <Head>
        <title>foggy notions</title>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </Head>

      <header id="blog-header">
        <div className="inner">
          <h1 className="blog-name"><a href="/">foggy notions</a></h1>
        </div>
      </header>

      <main className="content" role="main">
        <div id="index" className="container">
          {posts
            .filter(post => post.isPublished)
            .map((post, index) => (
              <article key={index} className="post no-image">
                <div className="inner">
                  <header className="post-header">
                    <h2 className="post-title">{post.content.split('\n')[0].replace('#', '').trim()}</h2>
                    <span className="post-meta">
                      <time>{post.date}</time>
                    </span>
                    <div className="clear"></div>
                  </header>
                  <section className="post-excerpt">
                    <div dangerouslySetInnerHTML={{ __html: post.toHTML() }} />
                  </section>
                </div>
              </article>
            ))}
        </div>
      </main>

      <style jsx global>{`
        body {
          font-family: 'EB Garamond', serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'EB Garamond', serif;
          letter-spacing: -1px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          padding-top: 7rem; /* Add padding to account for fixed header */
        }

        .post {
          margin-bottom: 4rem;
          font-size: 1.1rem;
        }

        .post-title {
          font-size: 2rem;
          margin: 0;
          margin-top: -1.5rem;  /* Pull title up towards the date */
          color: #696969;
        }

        .post-meta {
          color: #ff00e7;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0;
        }

        .post-excerpt {
          margin-top: 0.5rem;
        }

        .inner {
          padding: 1rem 0;
        }

        .clear {
          clear: both;
        }

        #blog-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1rem 0;
          border-bottom: 1px solid #eee;
          background: white;
          z-index: 1000;
        }

        .post-header {
          margin-bottom: 0;
        }

        .blog-name {
          font-family: 'EB Garamond', serif;
          letter-spacing: -1px;
          font-size: 2rem;
          margin: 0;
          text-align: center;
        }

        .blog-name a {
          color: #1a1a1a;
          text-decoration: none;
        }

        .blog-name a:hover {
          color: #ff00e7;
        }
      `}</style>
    </div>
  )
} 

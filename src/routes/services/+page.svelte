<script lang="ts">
	import HeaderMetatags from 'src/components/HeaderMetatags.svelte';
	import Rating from './Rating.svelte';

	const s = (label: string, years: number, rating: number) => ({ label, years, rating });
	let skills = [
		s('JavaScript', 10, 5),
		s('Express', 7, 5),
		s('React', 7, 5),
		s('Node', 7, 5),
		s('Typescript', 3, 5),
		s('Architecture', 10, 5),
		s('Delivery', 10, 5),
		s('Mentoring', 6, 5),
		s('Technical Hiring', 5, 5),
		s('Technical Vetting', 5, 5),
		s('Java', 10, 4),
		s('Postgres', 10, 4),
		s('DevOps', 6, 4),
		s('Leadership', 6, 4),
		s('AWS', 7, 3),
		s('DevRel', 6, 3),
		s('Recruiting', 6, 3)
	];
</script>

<div class="flex flex-col gap-8">
	<HeaderMetatags title="Services" />

	<h1 class="text-3xl font-bold">I'm a consulting software developer.</h1>

	<p>
		I have over 10 years of experience. I've worked on a wide range of projects, from small websites
		to large enterprise applications.
	</p>

	<h1 class="text-3xl font-bold">What I excel at.</h1>
	<p>
		I'm a strong developer as well as an experienced business builder, and so I really shine when
		I'm working at the intersection of software development and core business needs. I'm able to
		take many variables and factors into account that my peers are not familiar with, including
		sales funnels; conversion rates; user journeys; regulations and compliance; talent sourcing
		strategy; internal business needs; and marketing.
	</p>

	<h1 class="text-3xl font-bold">Fun projects that I've worked on.</h1>
	<ul class="list-disc pl-4">
		<li>
			Full-stack web apps, mobile apps, CLI tools, CI/CD pipelines, gigabyte-scale ETL and
			reporting, serverless lambdas, and other cool tech.
		</li>
		<li>
			Apprenticeship programs that let my team sidestep the tech talent crunch (reliably) with a
			combination of vetting, hiring, and training.
		</li>
		<li>A hackathon SaaS platform that eventually had 10,000+ software developers as users.</li>
		<li>
			Early-stage hiring processes for a freelancer talent marketplace that wanted to hire React and
			Node developers at scale.
		</li>
	</ul>

	<h2 class="text-3xl font-bold">My strongest skills</h2>
	<table>
		<tr>
			<th class="text-left">Skill</th>
			<th class="text-left">Experience</th>
			<th class="text-left">Self-rating</th>
		</tr>
		{#each skills as { label, years, rating }}
			<tr>
				<td>
					{label}
				</td>
				<td>{years} years</td>
				<td>
					<Rating val={rating} />
				</td>
			</tr>
		{/each}
	</table>

	<h1 class="text-3xl font-bold">Case Study #1: SDK Creation in a FinTech Setting</h1>

	<h2 class="text-xl">Problem</h2>

	<p>
		My client is a small FinTech startup that builds financial portfolio analytics APIs and
		microfrontends. Their customers are financial institutions who embed those APIs and
		microfrontends into their own applications in order to offer accurate and actionable financial
		advice to their end-users.
	</p>

	<p>
		At the time, it cost my client $XX,000 in labor for an integration project with a single
		financial institution. Each subsequent integration would take another $XX,000. This was a major
		expense that severely limited how many financial institutions could afford their software. They
		needed to find a way to make these integrations much cheaper, so that they could scale their
		business.
	</p>

	<h2 class="text-xl">Solution</h2>
	<p>
		I built a reusable JavaScript SDK that financial institutions could use to integrate with my
		client's software. This SDK was easily installable via NPM and exposed two sets of
		functionality: (1) API integration, and (2) Microfrontend integration via iFrames.
	</p>

	<h2 class="text-xl">Impact</h2>
	<p>
		Before, it would cost my client $XX,000 for every integration. After my solution was
		implemented, my client's cost to integrate was reduced to $0 (zero dollars). Financial
		institutions were even able to integrate with my clients without involvement from my client's
		developer team, leading to greater revenues and much greater profitability.
	</p>

	<h1 class="text-3xl font-bold">Case Study #2: Mintbean, a Hackathon SaaS Platform</h1>

	<h2 class="text-xl">Problem</h2>

	<p>
		Mintbean was a hackathon platform that connected developers with companies who wanted to hire
		them. It did so using an innovative hackathon-based vetting and proof-of-skill system.
	</p>
	<p>
		Commercial hackathon hosting systems were very expensive at the time, and didn't fully cater to
		the needs of 100% remote hackathon communities. We needed a way to announce hackathons when they
		happened, provide marketing and logistical information to our community, provide hackathon
		challenge instrucitons, and provide a place where the community could submit their hackathon
		projects and show them off on social media.
	</p>

	<h2 class="text-xl">Solution</h2>
	<p>
		I built a full-stack SaaS platform using React, Typescript, Node, Postgres, AWS, and other
		technologies. In order to develop the platform faster and on a budget, I also created a junior
		developer apprenticeship program where I would hire junior developers and train them on the job.
	</p>

	<h2 class="text-xl">Impact</h2>
	<p>
		We hosted 100+ hackathons in 2.5 years, with literally hundreds of online workshops and a
		community of thousands of software developers. At peak, we had 10,000+ software developers on
		the platform. The apprenticeship program graduated 15+ junior developers who went on to work at
		companies like Postman, Shopify, Charter Communications, and more.
	</p>

	<h1 class="text-3xl font-bold">Getting in touch.</h1>
	<p>
		I'm easily reachable at <a
			href="https://linkedin.com/in/monarchwadia"
			target="_blank"
			rel="noreferrer noopener nofollow"
			class="link">my profile on LinkedIn</a
		>.
	</p>
</div>

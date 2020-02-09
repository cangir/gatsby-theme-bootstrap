import { Frontmatter } from "./Frontmatter";

export interface Post {
	id: number;
	body: string;
	excerpt: string;
	frontmatter: Frontmatter;
	timeToRead: number;
}

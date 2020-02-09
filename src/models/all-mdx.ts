import { Post } from "./Post";

export interface AllMdx {
	totalCount: number;
	edges: { node: Post }[];
}

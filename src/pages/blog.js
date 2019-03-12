import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from '../components/layout';
import Article from '../components/article/';

export default () => (
	<Layout>
		<StaticQuery
			query = {graphql`
				{
					allContentfulBlogArticle {
					    edges {
					      node {
					        articleImg {
					          file {
					            url
					          }
					        }
					        id
					        articleDescr
   							publishedAt
					      }
					    }
					}
				}
			`}
			render = {({
				allContentfulBlogArticle: {
					edges
				}
			}) => (
				edges.map(({ node }) => (
		            <Article key = { node.id } content = { node }/>
		        ))
			)}
		/>
	</Layout>
);

// <h1>Blog list page</h1>
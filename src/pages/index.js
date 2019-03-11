import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Article from "../components/article";

const App = () => (
	<div>
		<StaticQuery
			query = {graphql`
				{
				  allContentfulMainText {
				    edges {
				      node {
				        title
				        text
				        id
				      }
				    }
				  },
				  allContentfulImage {
				    edges {
				      node {
				        someImage {
				          file {
				            url
				          }
				        }
				      }
				    }
				  }
				}
			`}
			render = {({
				allContentfulMainText: {
					edges
				}
			}) => (
	          edges.map(({ node }) => (
	            <Article key={node.id} content={node} />
	          ))
	        )}
		/>
	</div>
)

export default App;

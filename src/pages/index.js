import React from "react";
import { StaticQuery, graphql } from "gatsby";

// import Article from "../components/article";
import Layout from '../components/layout';

// const App = () => <h1>Hello</h1>;
// 	<Layout>
// 		<StaticQuery
// 			query = {graphql`
// 				{
// 				  allContentfulMainText {
// 				    edges {
// 				      node {
// 				        title
// 				        text
// 				        id
// 				      }
// 				    }
// 				  },
// 				  allContentfulAsset(filter: { title: { eq: "Main image" } } ) {
// 				    edges {
// 				      node {
// 				        title
// 				        file {
// 				          url
// 				        }
// 				      }
// 				    }
// 				  }
// 				}
// 			`}
// 			render = {({
// 				allContentfulMainText: {
// 					edges
// 				}
// 			}) => (
// 	          edges.map(({ node }) => (
// 	            <Article key = { node.id } content = { node } />

// 	          ))
	          
// 	        )}
// 		/>
// 	</Layout>
// )

const App = () => (
	<Layout>
		<StaticQuery
			query = {graphql`
				{
					contentfulMainPageContent {
				    title
				    mainText {
				      mainText
				    }
				    mainPageImg {
				      file {
				        url
				      }
				    }
				  }
				}
			`}
			render = {({
				contentfulMainPageContent: {
					title,
					mainText: {mainText},
					mainPageImg: {file}
				}
			}) => (
				<div>
					<h1>{ title }</h1>
					<p>{ mainText }</p>
					<img src = { file.url } alt="alt"/>
				</div>
	        )}
		/>
	</Layout>
)

export default App;

//<h1>{ title }</h1>
//<p>{ mainText }</p>


// {
//   allContentfulAsset(filter: { title: { eq: "some imggg" } } ) {
//     edges {
//       node {
//         title
//         file {
//           url
//         }
//       }
//     }
//   }
// }


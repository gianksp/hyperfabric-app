import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { IoIosArrowRoundForward } from "react-icons/io";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Heading from "reusecore/Heading";
import { Container, Row, Col } from "reusecore/Layout";

import PageHeader from "../../components/PageHeader";
import Sidebar from "../../components/Blog-sidebar";

import data from "assets/data/blog";
import { BlogPageWrapper } from "./blogGrid.style";

const BlogPage = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog Grid" author={{ name: "Alexa", profile: "/#" }} />

      <Box className="blog-page-wrapper">
        <Container>
          <Row>
            <Col className="xs-12 lg-8">
              <Box className="blog-grid-wrapper">
                <Row>
                  {/* blog posts */}
                  {data.posts.map((post, index) => (
                    <Col key={index} className="xs-12 sm-6">
                      <Box className="post-block">
                        <Box className="post-thumb-block">
                          <Link href="/blog-single">
                            <a>
                              <img
                                src={post.thumbnail}
                                alt="cryptik blog image"
                              />
                            </a>
                          </Link>
                        </Box>
                        <Box className="post-content-block">
                          <Box className="post-meta-block">
                            <Text as="span">In: </Text>
                            <Link href="/blog-single">
                              <a>Discussion</a>
                            </Link>
                            <Text as="span" className="Boxider">
                              /
                            </Text>
                            <Text as="span">15 Sep 2020</Text>
                          </Box>
                          <Heading as="h2" className="post-title">
                            <Link href="/blog-single">
                              <a>{post.title}</a>
                            </Link>
                          </Heading>
                          <Text className="post-entry"> {post.body} </Text>
                          <Link href="/blog-single">
                            <a className="readmore-btn">
                              see more <IoIosArrowRoundForward />
                            </a>
                          </Link>
                        </Box>
                      </Box>
                    </Col>
                  ))}
                  {/* blog posts end*/}
                </Row>
              </Box>
            </Col>

            <Col className="xs-12 sm-4">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  );
};

export default BlogPage;

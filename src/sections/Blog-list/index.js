import React from "react";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

import { Container, Row, Col } from "reusecore/Layout";
import Heading from "reusecore/Heading";
import Box from "reusecore/Box";
import Text from "reusecore/Text";

import PageHeader from "../../components/PageHeader";
import Sidebar from "../../components/Blog-sidebar";

import blogThumb1 from "assets/images/blog/post/blog-post-4.png";
import blogThumb2 from "assets/images/blog/post/blog-post-3.png";

import { BlogPageWrapper } from "./blogList.style";

const BlogList = () => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog List" />
      <Box className="blog-list-wrapper">
        <Container>
          <Row>
            <Col className="sm-12 md-8">
              <Row>
                <Col className="xs-12">
                  <Box className="post-block list">
                    <Box className="post-thumb-block">
                      <img src={blogThumb1} alt="prime blog page" />
                      <Box className="post-meta">
                      <Text as="span" > 
                        <em> 15 </em> DEC 
                      </Text>
                      </Box>
                    </Box>
                    <Heading as="h2" className="post-title">
                      <Link href="/blog-single">
                        <a>It is a long established fact that</a>
                      </Link>
                    </Heading>
                    <Text className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </Text>

                    <Link href="/blog-single">
                      <a className="readmore-btn">
                        see more <IoIosArrowRoundForward />
                      </a>
                    </Link>
                  </Box>
                </Col>
                <Col className="xs-12">
                  <Box className="post-block list text-only">
                    <Heading as="h2" className="post-title">
                      <Link href="/blog-single">
                        <a>
                          Friendship contrasted solicitude insipidity in
                          introduced literature it.
                        </a>
                      </Link>
                    </Heading>
                    <Text className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </Text>

                    <Link href="/blog-single">
                      <a className="readmore-btn">
                        see more <IoIosArrowRoundForward />
                      </a>
                    </Link>
                  </Box>
                </Col>
                <Col className="xs-12">
                  <Box className="post-block list qutoe-post">
                    <Heading as="h2" className="post-title">
                      <Link href="/blog-single">
                        <a>
                          Friendship contrasted solicitude insipidity in
                          introduced literature it. He seemed denote except as
                          oppose do spring my.
                        </a>
                      </Link>
                    </Heading>
                  </Box>
                </Col>
                <Col className="xs-12">
                  <Box className="post-block list">
                    <Box className="post-thumb-block">
                      <img src={blogThumb2} alt="prime blog page" />
                      <Box className="post-meta">
                      <Text as="span" > 
                        <em> 15 </em> DEC 
                      </Text>
                      </Box>
                    </Box>
                    <Heading as="h2" className="post-title">
                      <Link href="/blog-single">
                        <a>It is a long established fact that</a>
                      </Link>
                    </Heading>
                    <Text className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </Text>

                    <Link href="/blog-single">
                      <a className="readmore-btn">
                        see more <IoIosArrowRoundForward />
                      </a>
                    </Link>
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col className="sm-12 md-4">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Box>
    </BlogPageWrapper>
  )
};

export default BlogList;

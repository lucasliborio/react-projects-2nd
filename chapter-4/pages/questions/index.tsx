import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Card from "../../components/card";
import { Pagination } from "../../components/pagination";

export const QuestionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;
export type ServerProps = {
  questions: Array<Question>;
  hasMore: boolean;
  page: number;
};
export type Question = {
  title: string;
  view_count: number;
  answer_count: number;
  question_id: number;
};
function Question({ questions, hasMore, page }: ServerProps) {
  return (
    <>
      <Head>
        <title>Questions</title>
      </Head>
      <QuestionsContainer>
        <h2>Questions</h2>
        <div>
          {questions.map((question) => (
            <Link
              key={question.question_id}
              href={`questions/${question.question_id}`}
            >
              <Card
                key={question.question_id}
                title={question.title}
                views={question.view_count}
                answers={question.answer_count}
              ></Card>
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={(page as unknown as number) || 1}
          hasMore={hasMore}
        />
      </QuestionsContainer>
    </>
  );
}
export async function getServerSideProps(context: any) {
  const { page } = context.query;
  const data = await fetch(
    `https://api.stackexchange.com/2.2/questions?${
      page ? `page=${page}&` : ""
    }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
  );
  const result = await data.json();

  return {
    props: {
      questions: result.items,
      hasMore: result.has_more,
      page: page || 1,
    },
  };
}
export default Question;

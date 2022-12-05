import Link from "next/link";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
type PaginationLinkProps = {
  disabled: any;
};
export const PaginationLink = styled.div`
  padding: 20px;
  margin: 0 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  background: ${(props: PaginationLinkProps) => {
    return !props.disabled ? "orange" : "lightGrey";
  }};
  pointer-events: ${(props: PaginationLinkProps) => {
    return !props.disabled ? "pointer" : "not-allowed";
  }};
`;
type PropsType = {
  currentPage: number;
  hasMore: boolean;
};
export function Pagination({ currentPage, hasMore }: PropsType) {
  return (
    <PaginationContainer>
      <Link href={`?page=${parseInt(currentPage as unknown as string) - 1}`}>
        <PaginationLink
          style={{ display: currentPage <= 1 ? "none" : "block" }}
          disabled={!!(currentPage <= 1)}
        >
          PREVIOUS
        </PaginationLink>
      </Link>
      <Link href={`?page=${parseInt(currentPage as unknown as string) + 1}`}>
        <PaginationLink
          style={{ display: !hasMore ? "none" : "block" }}
          disabled={!hasMore}
        >
          NEXT
        </PaginationLink>
      </Link>
    </PaginationContainer>
  );
}

import "./Skeleton.scss";

type SkeletonType =
  | "header"
  | "subheader"
  | "paragraph"
  | "paragraph-s"
  | "expand"
  | "fullwidth";

type SkeletonProps = {
  type?: SkeletonType;
  disableMargins?: boolean;
};

export const Skeleton = (props: SkeletonProps): JSX.Element => {
  const { type = "expand", disableMargins = false } = props;

  return (
    <div
      className={`skeleton-container animated-background container-type-${type} ${
        disableMargins ? "disableMargins" : ""
      }`}
    />
  );
};

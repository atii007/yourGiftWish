import { SVGProps } from "react";

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? "31"}
        height={props.height ?? "24"}
        viewBox="0 0 31 24"
        fill="none"
      >
        <path
          d="M9.5001 18.645L3.13844 12.2833C2.79565 11.9405 2.33072 11.748 1.84594 11.748C1.36116 11.748 0.89623 11.9405 0.553437 12.2833C0.210645 12.6261 0.0180664 13.091 0.0180664 13.5758C0.0180664 13.8159 0.0653461 14.0536 0.157205 14.2753C0.249064 14.4971 0.383704 14.6986 0.553437 14.8683L8.21677 22.5317C8.93177 23.2467 10.0868 23.2467 10.8018 22.5317L30.1984 3.13499C30.5412 2.7922 30.7338 2.32727 30.7338 1.84249C30.7338 1.35771 30.5412 0.892782 30.1984 0.549989C29.8556 0.207197 29.3907 0.0146179 28.9059 0.0146179C28.4212 0.0146179 27.9562 0.207197 27.6134 0.549989L9.5001 18.645Z"
          fill={props.color ?? "#ffffff"}
        />
      </svg>
    </>
  );
};
export default SVGComponent;

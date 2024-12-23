import dynamic from "next/dynamic";

interface Props {
    linkIframe: string
}
const IframeComponent = dynamic(() => Promise.resolve(({ linkIframe }: Props) => (
    <iframe
        src={linkIframe}
        onError={(e) => {
            console.error("Iframe failed to load:", linkIframe);
        }}
        loading="lazy"
        style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 0,
            maxWidth: "90%",
            width: "100%",
            height: "100%",
            background: "#fff"
        }}
    ></iframe>
)), { ssr: false });

export default IframeComponent

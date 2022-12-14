import React from "react";
import useRouter from './../hooks/useRouter';

// useRouter를 통해 push를 받아와 button이 눌리면 "/about"페이지로 이동하도록 push를 실행
const Root = () => {
    const { push } = useRouter();
    return (
        <>
            <h1>Root</h1>
            <button onClick={()=>push("/about")}>About</button>
        </>
    )

}

export default Root;
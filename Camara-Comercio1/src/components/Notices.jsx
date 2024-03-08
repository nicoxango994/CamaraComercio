import React from "react";
import { useNotice } from "../hook/useNotice";
import { Notice } from "./Notice"; // Asegúrate de importar el componente Notice

export const Notices = () => {
    const {notices}  = useNotice();

    return (
        <>
            {notices.map((notice) => (
                <Notice key={notice.id} notice={notice} /> // Aquí utilizas el componente Notice
            ))}
        </>
    );
};

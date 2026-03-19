'use client';
import Link from "next/link";

const BackButton = () => {


    
    const BackToProjects = () => {
         <Link href="/Projects">Projects</Link>
    };


    <div>
        <button onClick={BackToProjects}> Back </button>
    </div>
}

export default BackButton;
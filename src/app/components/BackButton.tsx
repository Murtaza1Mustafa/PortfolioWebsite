'use client';

const BackButton = () => {


    
    const BackToProjects = () => {
         <Link href="/Projects">Projects</Link>
    };


    <div>
        <button onClick={BackToProjects}> Back </button>
    </div>
}

export default BackButton;
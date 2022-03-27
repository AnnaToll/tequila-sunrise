import { useRouter } from "next/router";

const seeData = () => {
    const router = useRouter();
    const data = router.query;
    console.log(data)
    return ( 
        <p>Hej!</p>
        )
        
}
 
export default seeData;

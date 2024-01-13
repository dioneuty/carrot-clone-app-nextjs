import type {NextPage} from "next";

const Index: NextPage = ()=> {
    return (
        <div className={`py-10 divide-y-[1px]`}>
            {[1,1].map((_,i)=>(
                <div key={i} className={`flex mb-3 px-4 cursor-pointer py-3 /*last:border-b-0 border-b*/ items-center space-x-3`}>
                    <div className={`w-10 h-10 rounded-full bg-slate-300`}/>
                    <div>
                        <p className={`text-gray-700`}>Steve Jebs</p>
                        <p className={`text-sm text-gray-500`}>
                            See you tommorrow in the cornet at 2pm.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Index;
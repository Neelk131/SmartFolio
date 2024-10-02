import Link from "next/link";

export default function Dashboard() {
    return <div className="pt-20 flex justify-center items-center h-screen"><Link href="/addPortfolio" passHref>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add New Portfolio
        </button>
    </Link></div>
}
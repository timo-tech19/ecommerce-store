import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {
	const billboard = await getBillboard("cbce06d1-5646-4467-8544-5fa5c2a53dea");

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
			</div>
		</Container>
	);
}

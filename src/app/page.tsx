import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
	const user = await prisma.user.findMany();
	console.log('user: ', user);
	return (
		<div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start'>
				<Link href={'/about'}>
					<Image
						className='dark:invert mb-8 w-auto h-auto'
						src='/bo.png'
						alt='bo mo`'
						width={100}
						height={100}
						priority
					/>
				</Link>
				<div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
					{user.map((u) => (
						<div key={u.id}>
							<h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
								{u.name}
							</h2>
							<p className='text-gray-600 dark:text-gray-400'>{u.email}</p>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

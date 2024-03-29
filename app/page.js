import AboutSection from './components/AboutSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectsSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Navbar />
			<div className='container mx-auto px-12 py-4 mt-16 lg:mt-8'>
				<HeroSection />
				<AboutSection />
				<ProjectSection/>
				<EmailSection/>
				<Footer/>
			</div>
		</main>
	);
}

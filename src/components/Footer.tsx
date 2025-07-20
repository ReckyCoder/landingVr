import logoVr from '@img/logo-vr-group.png';
import logoAppian from '@img/Appian.png';
import linkedin from '@img/linkedin.png';
import texto from '@json/home.json';

export default function Footer() {
    return (
        <footer className='colorBg flex justify-between py-4 md:px-32 items-center'>
            <div className='flex items-center not-first:gap-4'>
                <img className='w-0 invisible md:visible md:w-[130px]' src={logoVr} alt="" />
                <p className='ms-6'>{texto.partnerShips}</p>
                <img className='ms-5 md:ms-0' src={logoAppian} alt="" />
            </div>
            <div className='flex gap-x-7 items-center'>
                <p className='text-white'>{texto.siguenos}</p>
                <a href="https://www.linkedin.com/company/vr-group-chile/" target='_blank'>
                    <img className='w-[50px]' src={linkedin} alt="" />
                </a>
            </div>
        </footer>
    )
}

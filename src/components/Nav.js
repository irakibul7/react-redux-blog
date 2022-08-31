import logo from '../assets/blog_icon.png';

export default function Nav() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="/">
          <img className="h-10" src={logo} alt="Blog" />
        </a>
      </div>
    </nav>
  );
}

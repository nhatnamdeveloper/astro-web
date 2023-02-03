const Header = () => (
  <header id="masthead" className=" my-8 font-light">
    <div className="text-zinc-500 hover:text-green-600">
      <p className="text-4xl">
        <a href={import.meta.env.BASE_URL || '/'} rel="home">
          Test
        </a>
      </p>

      <p className="text-sm">50歳からの出会いを応援する</p>
    </div>
  </header>
);

export default Header;

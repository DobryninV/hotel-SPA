import styless from './Header.module.css';

export function Header() {
  return (
    <header>
      <div className={styless.wrapper}>
        <div>
          <img src="bibliotellogo2_0.png" width={134} height={40} alt="logo" />
        </div>
        <div>
          <button type="button" className="button">
            Бронировние
          </button>
        </div>
      </div>
    </header>
  );
}

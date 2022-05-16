import classNames from 'classnames';
import styless from './Section.module.css';

export function Section({ children, bgClass = '', containerClass = '' }) {
  return (
    <section className="wrapper">
      <div className={classNames(styless.box, bgClass)}>
        <div className={classNames(styless.container, containerClass)}>{children}</div>
        {bgClass && (
          <svg
            className={styless.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z" />
          </svg>
        )}
      </div>
    </section>
  );
}

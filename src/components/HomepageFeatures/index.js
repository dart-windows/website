import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Packages for accessing Windows APIs',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dart | Windows includes simple packages like <code>win32_registry</code>
        and <code>win32_gamepad</code> that provide high-level idiomatic
        wrappers around core Windows functionality.
      </>
    ),
  },
  {
    title: 'Call Windows Runtime APIs',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With the <code>windows_*</code> set of packages, you can call almost any
        Windows Runtime API with similar ease to other languages like C# and
        C++.
      </>
    ),
  },
  {
    title: 'Call Win32 and COM APIs',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Many standard Win32 and COM APIs are exposed through the
        <code>win32</code> package, allowing you to call traditional Windows
        APIs without having to hand-craft C API signatures in Dart.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

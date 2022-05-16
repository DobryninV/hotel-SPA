import { FormCard, Section } from '../../components';
import styless from './MainSection.module.css';

export function MainSection() {
  return (
    <Section bgClass={styless.main}>
      <FormCard />
    </Section>
  );
}

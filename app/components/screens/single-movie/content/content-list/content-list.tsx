import Link from 'next/link';
import { FC, Fragment } from 'react';

import styles from './content-list.module.scss';
import { IContentList } from './content.interface';

const ContentList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<h5 className={styles.name}>{name}</h5>
			<div className={styles.links}>
				{links.map((link, idx) => (
					<Fragment key={idx}>
						<Link href={link.link}>
							<a>{link.title}</a>
						</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	);
};
export default ContentList;

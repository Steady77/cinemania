import Image from 'next/image';
import { FC } from 'react';

import Description from '@/components/ui/heading/description';
import Heading from '@/components/ui/heading/heading';
import SubHeading from '@/components/ui/heading/sub-heading';
import { List } from '@/components/ui/list/list';
import { IList } from '@/components/ui/list/list.interface';

import { IPerson } from '@/shared/types/staff.types';

import { getArrayOfUnique } from '@/utils/array';
import Meta from '@/utils/meta/meta';
import { formatAge } from '@/utils/string';

import { getMovieRoute } from '@/config/route.config';

import styles from './person.module.scss';

const Person: FC<{ person: IPerson }> = ({ person }) => {
	const uniqueFilms = getArrayOfUnique(person.films, 'filmId');

	const films: IList[] = uniqueFilms.length
		? uniqueFilms.map((film) => ({
				link: getMovieRoute(film.filmId),
				name: film.nameRu || film.nameEn,
				rating: film.rating,
		  }))
		: [];

	return (
		<Meta title={person.nameRu}>
			<section className={styles.person}>
				<div className={styles.info}>
					<Image
						src={person.posterUrl}
						alt={person.nameRu || person.nameEn}
						className="shadow-lg rounded-layout"
						width={200}
						height={288}
					/>
					<ul className={styles.list}>
						<Heading
							title={person.nameRu}
							className="text-5xl mb-2"
						/>
						<SubHeading title={person.nameEn || ''} />
						<li>Профессия: {person.profession || '---'}</li>
						<li>Место рождения: {person.birthplace || '---'}</li>
						<li>Возраст: {formatAge(person.age) || '---'}</li>
						<li>Дата рождения: {person.birthday || '---'}</li>
						<li>Дата смерти: {person.death || '---'}</li>
					</ul>
				</div>

				<Description
					text={person.facts.join(' ')}
					className="pb-4"
				/>

				<div>
					<SubHeading title="Фильмография" />
					<List items={films} />
				</div>
			</section>
		</Meta>
	);
};
export default Person;

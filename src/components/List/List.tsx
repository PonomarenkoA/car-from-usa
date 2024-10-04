import { cn } from '@/lib/utils';
import { ListItem } from './ListItem';

type Props = {
	className?: string;
	children: React.ReactNode;
};

const List = ({ className, children }: Props) => {
	return <ul className={cn('', className)}>{children}</ul>;
};

List.Item = ListItem;

export default List;

import { Repository } from 'typeorm';
import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Comment } from './comment.entity';

@CustomRepository(Comment)
export class CommentRepository extends Repository<Comment> {}

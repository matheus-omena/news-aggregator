import { HighlightArticleCard } from './highlight-article-card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';

describe('HighlightArticleCard component', () => {
  test('should render correctly with data', () => {
    const mockArticle = {
      redirect_url: 'https://example.com',
      img_url: 'https://example.com/image.jpg',
      title: 'Sample Article',
      description: 'This is a sample article description.',
      pub_date: moment().toDate(),
      author: 'John Doe',
      category: 'Technology',
    };

    const { getByText, getByAltText } = render(<HighlightArticleCard data={mockArticle} />);

    expect(getByText('Sample Article')).toBeInTheDocument();
    expect(getByText('This is a sample article description.')).toBeInTheDocument();
    expect(getByAltText('Sample Article')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('should render default image if no image is provided', () => {
    const mockArticle = {
      redirect_url: 'https://example.com',
      title: 'Sample Article',
      description: 'This is a sample article description.',
      pub_date: moment().toDate(),
      author: 'John Doe',
      category: 'Technology',
    };

    const { getByAltText } = render(<HighlightArticleCard data={mockArticle} />);
    expect(getByAltText('Sample Article')).toHaveAttribute('src', expect.stringContaining('no-image.png'));
  });

  test('should not render if no data is provided', () => {
    const { container } = render(<HighlightArticleCard />);
    expect(container.firstChild).toBeNull();
  });
});

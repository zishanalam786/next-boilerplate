import { cn } from '@/lib/utils';

describe('cn', () => {
  it('merges class names and removes falsy values', () => {
    const result = cn('btn', undefined, null, false, 'primary');
    expect(result).toBe('btn primary');
  });

  it('resolves Tailwind conflicts preferring later classes', () => {
    const result = cn('p-2', 'p-4', 'text-sm', 'text-base');
    expect(result).toBe('p-4 text-base');
  });

  it('handles array inputs gracefully', () => {
    const classes = ['mt-2', 'mt-4', 'font-bold'];
    const result = cn(classes);
    expect(result).toBe('mt-4 font-bold');
  });
});

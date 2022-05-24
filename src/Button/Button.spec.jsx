import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {
    it('should render the button with text', () => {
        render(<Button text="load more" />);
        expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="load more" onClick={fn} />);
        userEvent.click(screen.getByRole('button', { name: /load more/i }));
        expect(fn).toHaveBeenCalledTimes(1)
    });

    it('should be enable when disabled is false', () => {
        render(<Button text="load more" disabled={false} />);
        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);
        expect(button).toBeEnabled(0);
    });

})

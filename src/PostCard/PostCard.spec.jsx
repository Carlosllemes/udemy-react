import { render, screen } from "@testing-library/react";
import {PostCard} from '.';

const props = {
    title:'title 1',
    body:'body 1',
    id:'id 1',
    cover:'img/img.png'
};


describe('<PostCard/>', ()=>{
    it('should render PostCard corretly', ()=>{
        render(<PostCard  {...props}/>);
        expect(screen.getByRole('img', {name: /title 1/i })).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', {name: props.title})).toBeInTheDocument();
        expect(screen.getByText(props.body)).toBeInTheDocument();
    });
    
});
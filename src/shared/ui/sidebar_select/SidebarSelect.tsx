import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './select';
import React, { FunctionComponent } from 'react';

interface Props {
    values: Record<string, string>
    currentValue: string
    setter: (param: unknown) => void
}


export const SidebarSelect: FunctionComponent<Props> = ({ currentValue, setter, values }) => {

    return (
        <Select value={currentValue} onValueChange={nextValue => setter(nextValue)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберете значение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {Object.keys(values).map(item => (
                        <SelectItem key={item} value={values[item]}>
                            <span className='first-letter:capitalize text-muted-foreground'>{item}</span>
                        </SelectItem>)
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

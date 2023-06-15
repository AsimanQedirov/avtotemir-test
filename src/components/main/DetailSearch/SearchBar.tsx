import React from 'react';
import {Select , NumberInput} from "@mantine/core";
import { IconChevronDown } from '@tabler/icons-react';
import styled from "@emotion/styled";
import Image from "next/image";
import manatIcon from '@/assets/icons/home/Manat.svg'
const StyledComponent = styled(Select)`
      input::placeholder {
        color: #2C2C2C;
        font-size: 11px;
        font-weight: 600;
      }
`
const SearchBar = () => {
    return (
        <div className={'flex flex-col mt-3 gap-3 bg-white p-3 rounded-b10'}>
                <StyledComponent
                    radius={"md"}
                    placeholder="Kateqoriya seç"
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['a', 'b', 'c', 'd']}
                />
                <StyledComponent
                    radius={"md"}
                    placeholder="Vəziyyəti"
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['a', 'b', 'c', 'd']}
                />
                <div className={"flex justify-between items-center gap-gap10"}>
                    <NumberInput
                        hideControls
                        placeholder="Min."
                        radius={'md'}
                    />
                    <NumberInput
                        hideControls
                        placeholder="Max."
                        radius={'md'}
                    />
                    <div className={`border border-gray
                     w-[73px] h-[35px] flex justify-center
                      items-center rounded-b10`}>
                        <Image width={13} height={13} src={manatIcon} alt={'Manat'}/>
                    </div>
                </div>
                <StyledComponent
                    radius={"md"}
                    placeholder="Ucuzdan bahaya"
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['a', 'b', 'c', 'd']}
                />
                <StyledComponent
                    radius={"md"}
                    placeholder="Ustalar üzrə"
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['a', 'b', 'c', 'd']}
                />
            <button className={'bg-orange rounded-b5 text-white py-[10px] text-[12px]'}>
                Axtar
            </button>
            <button className={'bg-[#F3F3F3] rounded-b5 font-bold py-[10px] text-[12px]'}>
                Ətraflı axtarış
            </button>
        </div>
    );
};

export default SearchBar;
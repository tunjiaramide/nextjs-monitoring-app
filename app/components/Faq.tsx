"use-client"

import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../public/assets/Plus.svg'
import Image from 'next/image';

const items = [
    {
        question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        question: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        question: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        question: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    }
]

const Faq = () => {
  return (
    <div className="flex flex-col w-full py-12 lg:flex-row lg:py-[60px] lg:gap-x-6">
        <div className='lg:w-2/5 lg:py-8 lg:pr-[56px]'>
            <h3 className="text-[#EB2891] font-medium lg:text-base">Frequently Asked Questions</h3>
            <h1 className="font-medium py-4 text-2xl text-[#172026] lg:text-[42px] lg:leading-[58px]">Lets clarify some of your questions</h1>
            <p className="text-[#36485C] pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </div>

        <div className='lg:w-3/5'>
        <Accordion.Root
        type="single"
        defaultValue='item-1'
        collapsible
        className='flex flex-col gap-y-4'
        >
            { items.map((item, index) => (
                <div key={index}>
                        <Accordion.Item value={`item-${index + 1}`} className='bg-[#E3F1FF] p-4 rounded-lg'>
                        <Accordion.Header>
                            <Accordion.Trigger className='flex w-full items-center justify-between gap-x-2'>
                                <p className='text-left font-medium text-[#172026] lg:text-[18px]'>{item.question}</p>
                                <span><Image src={Plus} alt="" className='h-10 w-10 lg:w-6 lg:h-6' /></span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                                <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                        </Accordion.Content>
                        </Accordion.Item>
                </div>
            ))}
        </Accordion.Root>
        </div>
    </div>
  )
}

export default Faq
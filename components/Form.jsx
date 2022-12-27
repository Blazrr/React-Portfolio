import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input,Textarea ,Button
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import FormSent from './FormSent'

const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_be9wjcc', 'template_pvic6tb', form.current, 'eZkX0TG4owgXU1lb-')
            .then((result) => {
                console.log(result.text);
                setSent(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
    const [sent, setSent] = useState(false)

    return (
   <>   {!sent ?
        <section>
            <div className='max-w-[700px] mx-auto'>
                <h2 className='text-center text-2xl md:text-3xl underline'>Contact Form</h2>
                <form action="" className='flex  flex-col space-y-8' ref={form} onSubmit={sendEmail}>
                    <FormControl >
                        <FormLabel>Your Name</FormLabel>
                        <Input placeholder='First name' name='user_name' />
                    </FormControl>
                    <FormControl isInvalid={isError} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={input} onChange={handleInputChange} name="user_email" />
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to send your email with.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired>
                    <Textarea  placeholder='Enter your message' name='message' />
                    </FormControl>
                    <div className='flex justify-center'>
                    <Button colorScheme='facebook'>Send your Email</Button>
                    </div>
                </form>
            </div>
        </section>
         :
         <FormSent/>
}
        </>
    )
}

export default Form
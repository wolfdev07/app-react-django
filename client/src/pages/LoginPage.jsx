import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoginRequest } from "../api/users"
import { Formik, Field, Form } from "formik"
import { Link, useNavigate } from "react-router-dom"

import { BsTwitter } from "react-icons/bs"

const LoginPage = () => {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const loginMutation = useMutation({
        mutationFn:LoginRequest,
        onSuccess: () => {
            queryClient.invalidateQueries("tweets")
            navigate("/home")
            console.log('Inicio de sesion exitoso')
        },
        onError: (error) => {
            console.error(error)
        }
    })

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="m-5 p-10 bg-grey-3">
                <div>
                    <BsTwitter className="mx-auto text-sky-500 h-12 w-12" />
                    <h2 className="mt-6 text-center text-3xl text-grey">Login in Twtter</h2>
                </div>

                <Formik 
                    initialValues={{email: '', password: '',}} 
                    onSubmit={(values)=>{
                        loginMutation.mutate(values)
                    }}
                >

                    <Form>
                        <Field 
                            id='email' name='email' placeholder='Email'
                            className="border-b-[1px] border-neutral-800 w-full p-5 cursor-pointer my-3 bg-transparent outline-neutral-800"
                        >
                        </Field>

                        <Field
                            type='password' id='password' name='password' placeholder='*******'
                            className="my-3 border-b-[1px] border-neutral-800 w-full p-5 cursor-pointer bg-transparent outline-neutral-800"
                        >
                        </Field>

                        <button type="submit" className="bg-sky-400 my-2 w-full hover:bg-sky-500 p-2 px-5 rounded-full text-white">
                            login
                        </button>
                    </Form>

                </Formik>

                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link to={'/register'}>
                            Don't have an account? 
                            <span className="hover:text-sky-500 ml-2 transition-colors">
                                Sign up here!
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage

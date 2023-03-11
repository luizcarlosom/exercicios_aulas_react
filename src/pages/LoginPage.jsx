import React from 'react';

class LoginPage extends React.Component{
    render(){
        return(
            <>
                <div className='flex flex-col justify-center items-center h-screen'>
                    <div className='w-full flex items-center justify-center  flex-col'>
                        <div><img src="/logo.png" alt="logo" /></div>
                        <h1 className='text-3xl font-bold m-5'>Entre com sua conta</h1>
                        <input type="text" placeholder='E-mail' className='border-gray-400 border-2 p-2 w-96 rounded-md'/>
                        <input type="text" placeholder='Senha' className='border-gray-400 border-2 p-2 w-96 rounded-md'/>
                        <div className='w-96'>
                            <p className='text-right text-blueDark m-4'>Esqueceu sua senha?</p>
                        </div>
                        <input type="text" placeholder='Senha' className='bg-blueDark p-2 w-96 rounded-md text-center m-4'/>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginPage;
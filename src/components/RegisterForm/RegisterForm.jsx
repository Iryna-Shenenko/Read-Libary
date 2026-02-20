import Logo from "../Logo/Logo.jsx"
import css from "./RegisterForm.module.css"
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm} from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/operations.js";
import { selectErrorMessage } from "../../redux/auth/selectors.js";




    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),


        email: Yup.string()
            .trim()
            .lowercase()
            .email('Invalid email address')
            .required('Email is required')
            // .matches(/[A-Z]/, 'Email must contain at least one uppercase letter')
            // .matches(/[a-z]/, 'Email must contain at least one lowercase letter')
            // .matches(/[0-9]/, 'Email must contain at least one number')
            // .matches(/[@$!%*?&]/, 'Email must contain at least one special character')
            .test('domin-check', 'Invalid email domain', (value) => {
                if (!value) return false; // Handle empty value case
                const parts = value.split('@');
                if (parts.length < 2) return false; // Invalid email format
                return (parts[1].includes('.') && parts[1].split('.') .filter(Boolean).length > 1 );// Check if domain contains a dot
            }
        ),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Password is required'),

            repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), ], 'Passwords must match')
            .required('Repeat Password is required'),
            
    });
    const RegisterForm = () => { 
        const dispatch = useDispatch();
        const errorMessage = useSelector(selectErrorMessage);

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onTouched',
    });

    const onSubmit = async (data) => {
        try {
            await dispatch(
                registerUser({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })
            ).unwrap();

            toast.success('You were successfully signed up!');
            reset();// Clear form fields after successful registration
        } catch {
            errorMessage && toast.error(errorMessage);
        }
    };




    return (
        <div className={css.wrapper}>
            <Logo />
            <div className={css.container}>
                <h1 className={css.title}>Expand your mind, reading a book</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.container_input}>
                        
                        {/*NAME*/}
                        <div> 
                <label htmlFor="name">Name</label> 
                    <input className={css.input}
                    autoComplete="name"
                    id='name'
                    type="text" 
                    placeholder="Name:" 
                    {...register('name')}
                    />
                    {touchedFields.name && errors.name && (
                        <p className={css.error}>{errors.name.message}</p>
                    )}
                        </div>

                        { /*EMAIL*/}
                        
                        <div> 
                <label htmlFor="email">Email</label>  
                <input className={css.input}
                 autoComplete="email"
                    id='email'
                    type="email" 
                    autoFocus
                    placeholder="Email:" 
                    {...register('email')}
                    />
                    {touchedFields.email && errors.email && (
                        <p className={css.error}>{errors.email.message}</p>
                    )}
                    </div>
                
                    {/*PASSWORD*/}

                    <div> 
                <label htmlFor="password">Password</label> 
                <input className={css.input}
                autoComplete="new-password" // add автозаполнение пароля/
                    id='password'
                    type="password" 
                    placeholder="Password:" 
                    {...register('password')}
                    />
                    {touchedFields.password && errors.password && (
                        <p className={css.error}>{errors.password.message}</p>
                    )}
                    </div>
                        {/* <svg className={css.icon}><FaEyeSlash  className="Eye" size="24"/></svg> */}
                        <div>
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                    className={css.input}
                    id="repeatPassword"
                    type="password"
                    placeholder="Repeat password:"
                    {...register('repeatPassword')}
                    />
                    {touchedFields.repeatPassword && errors.repeatPassword && (
                    <p className={css.error}>{errors.repeatPassword.message}</p>
                         )}
                    </div>
            </div>
            <div className={css.register}>
              
                <button className={css.button} type="submit">Registration</button>
            
                    <Link className={css.login} to='/login'>Already have an account?</Link>
                
            </div>
                    </form>
        </div>
        </div>
        
    );
};
export default RegisterForm;
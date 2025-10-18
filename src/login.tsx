
import "./login.css";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  User,
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  ShieldCheck,
  Sun,
  Moon
} from "lucide-react";

const credencial = {
  student: {
      email: "student@email.com",
      password: "student1234"
},
  faculty: {
      email: "faculty@email.com",
      password: "faculty1234"
},
  admin: {
      email: "admin@email.com",
      password: "admin1234"
}
};

export function CardDemo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const errorObj = {};
    const [isMenuButtonPressed, setIsmenuButtonPressed] = useState(false);
    const [user, setUser] = useState("admin");
    const [passwordShow, setPasswordShow] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

const checkCredential = () => {
        if(!email.trim()) {
            errorObj.email = "this entry cannot be blank";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            errorObj.email = "invalid email address";
        }
        if(!password.trim()){
            errorObj.password = "this entry cannot be blank";
        }
        let userValue = user;
        if(userValue === "faculty"){
            if(email !== credencial.faculty.email){
                errorObj.email = "wrong email address entered";
            }
            else if(password !== credencial.faculty.password){
                errorObj.password = "wrong password entered";
            }
        }
       else if(userValue === "student"){
            if(email !== credencial.student.email){
                errorObj.email = "wrong email address entered";
            }
            else if(password !== credencial.student.password){
                errorObj.password = "wrong password entered";
            }
        }
       else if(userValue === "admin"){
            if(email !== credencial.admin.email){
                errorObj.email = "wrong email address entered";
            }
            else if(password !== credencial.admin.password){
                errorObj.password = "wrong password entered";
            }
        }
        setError(errorObj);
        if(Object.keys(errorObj).length === 0){
            alert("login was successful!");
        }
}
const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
}

  return (
    <div  className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? ' bg-gray-900' : 'bg-gray-50'}`}>
    <div className="mb-26 pt-8 text-center ">
     <div className="absolute top-4 right-4 z-10">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="icon"
          className={`rounded-md ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-300 hover:text-gray-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 " />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
  <CardTitle className={`text-6xl mb-3 ${isDarkMode &&  ' text-gray-200'}`} >Smart Attendance System</CardTitle>
  <CardDescription className={`text-base mt-3 ${isDarkMode && ' text-gray-200'}`}>An unique initiative to assist the educational institutes in monitoring student attendance</CardDescription>
</div>
    <Card className={`w-full max-w-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 ' : 'bg-white border-gray-300 text-gray-700 '}`}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          {user && `${user} Login`}
        </CardDescription>
        <CardAction>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="custom-dropdown-trigger" variant="outline">Login options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-56 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-200 ' : 'bg-white border-gray-300 text-gray-700 '} `} align="start">
        <DropdownMenuLabel >Role</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="dropdown-menu-item" style={{ paddingLeft: "55px", "position": "relative" }} onClick={() => {setUser("admin")}}>
            Admin
            {user === "admin" && <Check size={13} style={{ "position": "absolute", "right": "2px", "top": "50%", "transform": "translateY(-50%)" }} />}
             <ShieldCheck size={13} style={{ "position": "absolute", "left": "28px", "top": "50%", "transform": "translateY(-50%)"}} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className={`others ${isDarkMode && 'bg-gray-800 border-gray-700 text-gray-200 ' }`} >Others</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className={` ${isDarkMode && 'bg-gray-800 border-gray-700 text-gray-200 ' }`}>
                <DropdownMenuItem className="dropdown-menu-item" style={{ paddingLeft: "55px", paddingRight: "55px", "position": "relative" }} onClick={() => {setUser("faculty")}}>Faculty
                {user === "faculty" && <Check size={13} style={{ "position": "absolute", "right": "8px", "top": "50%", "transform": "translateY(-50%)" }} />}
                 <GraduationCap size={13} style={{ "position": "absolute", "left": "28px", "top": "50%", "transform": "translateY(-50%)"}} />
                </DropdownMenuItem>
                <DropdownMenuItem className="dropdown-menu-item" style={{ paddingLeft: "55px",  paddingRight: "55px", "position": "relative" }} onClick={() => {setUser("student")}}>Student
                {user === "student" && <Check size={13} style={{ "position": "absolute", "right": "8px", "top": "50%", "transform": "translateY(-50%)" }} />}
                <User size={13} style={{ "position": "absolute", "left": "28px", "top": "50%", "transform": "translateY(-50%)"}} />
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeHolder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${error.email && "error"}`}
                required
              />
              {error.email && (
                        <p className="errorMessage">{error.email}</p>
                    )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  placeHolder="enter password"
                  type={passwordShow ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${error.password && "error"} pr-10`}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {passwordShow ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {error.password && (
                        <p className="errorMessage">{error.password}</p>
                    )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className={`w-full ${isDarkMode && ' text-gray-200 '}`} onClick={checkCredential}>
          Login
        </Button>
        <Button variant="outline" className={`w-full ${isDarkMode && 'bg-gray-800 border-gray-700 text-gray-200 ' }` }>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  </div>);
}

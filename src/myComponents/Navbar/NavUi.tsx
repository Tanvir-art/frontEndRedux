import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import { NavLink } from "react-router-dom"


export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="text-white space-x-6">


                <NavigationMenuItem >
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold ' : '')}>
                        <NavigationMenuLink >
                            Home
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'font-bold ' : '')}>
                        <NavigationMenuLink >
                            About Us
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? 'font-bold ' : '')}>
                        <NavigationMenuLink >
                            All Products
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavLink to="/manage-products" className={({ isActive }) => (isActive ? 'font-bold ' : '')}>
                        <NavigationMenuLink >
                            Manage Products
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavLink to="/cart" className={({ isActive }) => (isActive ? 'font-bold ' : '')}>
                        <NavigationMenuLink >
                            Cart
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'font-bold ' : '')}>
                        <NavigationMenuLink >
                            Checkout
                        </NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}


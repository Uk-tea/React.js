
import { useMemo, useState } from "react";

function Nav({ current, onNavigate }) {
  return (
    <nav style={{ display: "flex", gap: 12, padding: 16, justifyContent: "center" }}>
      <button onClick={() => onNavigate("auth")} disabled={current === "auth"}>Login/Signup</button>
      <button onClick={() => onNavigate("shop")} disabled={current === "shop"}>Categories</button>
      <button onClick={() => onNavigate("cart")} disabled={current === "cart"}>Cart</button>
    </nav>
  );
}

function Auth({ onSuccess }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    onSuccess({ email });
  }

  return (
    <div style={{ display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ width: 360, background: "#0d0f14", borderRadius: 16, padding: 24, color: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: 8 }}>{mode === "login" ? "Log In" : "Sign Up"}</h2>
        <p style={{ textAlign: "center", opacity: 0.8, marginBottom: 16 }}>Food Bank</p>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 12, borderRadius: 10 }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 12, borderRadius: 10 }}
          />
          <button type="submit" style={{ padding: 12, borderRadius: 10, background: "#ff3d6e", color: "#fff", fontWeight: 600 }}>
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: 12 }}>
          {mode === "login" ? (
            <button onClick={() => setMode("signup")} style={{ background: "transparent", color: "#fff" }}>Create an account</button>
          ) : (
            <button onClick={() => setMode("login")} style={{ background: "transparent", color: "#fff" }}>Have an account? Log in</button>
          )}
        </div>
      </div>
    </div>
  );
}

const SAMPLE_PRODUCTS = [
  { id: "p1", name: "Pancakes", price: 300.0, image: "/vite.svg", category: "Breakfast" },
  { id: "p2", name: "Omelette", price: 300.0, image: "/vite.svg", category: "Breakfast" },
  { id: "p3", name: "Burger", price: 300.0, image: "/vite.svg", category: "Fast Food" },
  { id: "p4", name: "Fries", price: 300.0, image: "/vite.svg", category: "Fast Food" },
  { id: "p5", name: "Soup", price: 300.0, image: "/vite.svg", category: "Starters" },
];

function ProductCard({ product, onAdd }) {
  return (
    <div style={{ background: "#111826", color: "#fff", padding: 12, borderRadius: 12, width: 160 }}>
      <div style={{ height: 110, borderRadius: 10, overflow: "hidden", background: "#0b0f16", marginBottom: 8, display: "grid", placeItems: "center" }}>
        <img src={product.image} alt={product.name} style={{ width: 64, height: 64 }} />
      </div>
      <div style={{ fontWeight: 600 }}>{product.name}</div>
      <div style={{ opacity: 0.9 }}>${product.price.toFixed(2)}</div>
      <button onClick={() => onAdd(product)} style={{ marginTop: 8, width: "100%", padding: 8, borderRadius: 8, background: "#ff3d6e", color: "#fff", fontWeight: 600 }}>Add Cart</button>
    </div>
  );
}

function Shop({ onAdd }) {
  const categories = useMemo(() => {
    const map = new Map();
    for (const p of SAMPLE_PRODUCTS) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category).push(p);
    }
    return Array.from(map.entries()).map(([name, items]) => ({ name, items }));
  }, []);

  return (
    <div style={{ padding: 16 }}>
      {categories.map((c) => (
        <section key={c.name} style={{ marginBottom: 24 }}>
          <h3 style={{ color: "#fff", margin: "8px 0" }}>{c.name}</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {c.items.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function Cart({ items, onInc, onDec, onRemove }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  return (
    <div style={{ padding: 16, color: "#fff" }}>
      <h3>Cart</h3>
      {items.length === 0 ? (
        <p style={{ opacity: 0.8 }}>Your cart is empty.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {items.map((it) => (
            <div key={it.id} style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 12, alignItems: "center", background: "#0d0f14", padding: 12, borderRadius: 12 }}>
              <img src={it.image} alt={it.name} style={{ width: 64, height: 64 }} />
              <div>
                <div style={{ fontWeight: 600 }}>{it.name}</div>
                <div style={{ opacity: 0.8 }}>${it.price.toFixed(2)}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                  <button onClick={() => onDec(it.id)}>-</button>
                  <span>{it.qty}</span>
                  <button onClick={() => onInc(it.id)}>+</button>
                </div>
              </div>
              <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                <div>${(it.price * it.qty).toFixed(2)}</div>
                <button onClick={() => onRemove(it.id)} style={{ background: "transparent", color: "#ff5a5a" }}>Remove</button>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#111826", padding: 12, borderRadius: 12 }}>
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button style={{ padding: 12, borderRadius: 10, background: "#22c55e", color: "#fff", fontWeight: 700 }}>Checkout</button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [route, setRoute] = useState("auth");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  function handleLogin(u) {
    setUser(u);
    setRoute("shop");
  }

  function handleAdd(product) {
    setCart((prev) => {
      const found = prev.find((x) => x.id === product.id);
      if (found) {
        return prev.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function inc(id) {
    setCart((prev) => prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)));
  }
  function dec(id) {
    setCart((prev) => prev.flatMap((x) => (x.id === id ? (x.qty > 1 ? [{ ...x, qty: x.qty - 1 }] : []) : [x])));
  }
  function removeItem(id) {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }

  return (
    <>
      <Nav current={route} onNavigate={setRoute} />
      {route === "auth" && <Auth onSuccess={handleLogin} />}
      {route === "shop" && <Shop onAdd={(p) => { handleAdd(p); setRoute("cart"); }} />}
      {route === "cart" && <Cart items={cart} onInc={inc} onDec={dec} onRemove={removeItem} />}
    </>
  );
}

export default App

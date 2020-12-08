const MinimalNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Menu open={open}>
        <MenuToggle
          open={open}
          onClick={() => setOpen(!open)}
        >
          <span class="uil uil-plus" />
         </

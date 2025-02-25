import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/atoms/Search";
import { ROUTES } from "@/constants";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const term = searchParams.get("q");
  const [value, setValue] = useState(term);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    changeQuerySearchParam(username);
    setValue(username);
  };

  const changeQuerySearchParam = useDebouncedCallback((username: string) => {
    if (username) {
      router.push(ROUTES.SEARCH_BY_USERNAME(username));
    } else {
      router.push(ROUTES.HOME());
    }
  }, 250);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleChange}
        value={value}
        placeholder="Search…"
        inputProps={{ "aria-label": "search", type: "search" }}
      />
    </Search>
  );
};

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/atoms/Search/Search";
import { ROUTES } from "@/constants";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { debounce } from "throttle-debounce";

export const SearchHeader = () => {
  const router = useRouter();
  const handleChange = debounce(
    250,
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const username = event.target.value;
      if (username) {
        router.push(ROUTES.SEARCH_BY_USERNAME(username));
      } else {
        router.push(ROUTES.HOME());
      }
    },
  );
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleChange}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

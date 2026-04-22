import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Wrapper } from "@/shared/ui/Wrapper/Wrapper";
import SearchInput from "@/features/search/ui/SearchInput";
import Pagination from "@/features/pagination/ui/Pagination";
import EntityGrid from "@/widgets/entity-grid/ui/EntityGrid";
import type { EntityItem } from "@/widgets/entity-grid/model/types";
import { getTeams } from "@/entities/team/api/teamApi";

const PAGE_SIZE = 16;

const TeamsPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const COMPETITION_ID = 2021;

  const { data, isError, isLoading } = useQuery({
    queryKey: ["teams", COMPETITION_ID],
    queryFn: () => getTeams(COMPETITION_ID),
  });

  useEffect(() => {
    if (isError) {
      toast.error("Данные не получены", {
        toastId: "teams-error",
      });
    }
  }, [isError]);
  const teams = data?.teams ?? [];

  const filtered = useMemo(() => {
    if (!search.trim()) return teams;
    const q = search.toLowerCase();
    return teams.filter((t) => t.name.toLowerCase().includes(q));
  }, [teams, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const items: EntityItem[] = paginated.map((t) => ({
    id: t.id,
    name: t.name,
    emblem: t.crest ?? null,
  }));

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleItemClick = (id: number) => {
    navigate("/teams/" + id);
  };

  if (isError && !isLoading) {
    return (
      <Wrapper>
        <div
          style={{
            padding: "40px 24px",
            textAlign: "center",
            color: "#c62828",
          }}
        >
          Не удалось загрузить команды. Попробуйте позже.
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SearchInput
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <EntityGrid
        items={items}
        onItemClick={handleItemClick}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Wrapper>
  );
};

export default TeamsPage;

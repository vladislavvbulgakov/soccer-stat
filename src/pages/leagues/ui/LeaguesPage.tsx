import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Wrapper } from "@/shared/ui/Wrapper/Wrapper";
import SearchInput from "@/features/search/ui/SearchInput";
import Pagination from "@/features/pagination/ui/Pagination";
import EntityGrid from "@/widgets/entity-grid/ui/EntityGrid";
import type { EntityItem } from "@/widgets/entity-grid/model/types";
import { getCompetitions } from "@/entities/league/api/leagueApi";
import type { CompetitionsResponse } from "@/entities/league/model/types";

const PAGE_SIZE = 12;

const LeaguesPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery<CompetitionsResponse>({
    queryKey: ["competitions"],
    queryFn: getCompetitions,
  });
  useEffect(() => {
    if (isError) {
      toast.error("Данные не получены", {
        toastId: "competitions-error",
      });
    }
  }, [isError]);
  const competitions = data?.competitions ?? [];

  const filtered = useMemo(() => {
    if (!search.trim()) return competitions;
    const q = search.toLowerCase();
    return competitions.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.area.name.toLowerCase().includes(q),
    );
  }, [competitions, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const items: EntityItem[] = paginated.map((c) => ({
    id: c.id,
    name: c.name,
    subtitle: c.area.name,
    emblem: c.emblem ?? null,
  }));

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleItemClick = (id: number) => {
    navigate("/leagues/" + id);
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
          Не удалось загрузить лиги. Попробуйте позже.
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

export default LeaguesPage;

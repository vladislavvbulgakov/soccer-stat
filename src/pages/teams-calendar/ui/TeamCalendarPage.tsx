import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Wrapper } from "@/shared/ui/Wrapper/Wrapper";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import DateFilter from "@/features/date-filter/ui/DateFilter";
import Pagination from "@/features/pagination/ui/Pagination";
import MatchesTable from "@/widgets/matches-table/ui/MatchesTable";
import type { MatchItem } from "@/widgets/matches-table/model/types";
import { getTeam, getTeamMatches } from "@/entities/team/api/teamApi";
import type { TeamMatchesResponse } from "@/entities/team/model/types";

const PAGE_SIZE = 10;

const TeamCalendarPage = () => {
  const { id } = useParams<{ id: string }>();
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [page, setPage] = useState(1);

  let params:
    | {
        date?: string;
        dateFrom?: string;
        dateTo?: string;
      }
    | undefined;

  if (dateFrom && dateTo) {
    params = { dateFrom, dateTo };
  } else if (dateFrom || dateTo) {
    params = { date: dateFrom || dateTo };
  } else {
    params = undefined;
  }

  const { data: teamData } = useQuery({
    queryKey: ["team", id],
    queryFn: () => getTeam(Number(id)),
    enabled: !!id,
  });

  const { data, isLoading, isError } = useQuery<TeamMatchesResponse>({
    queryKey: ["team-matches", id, dateFrom, dateTo],
    queryFn: () => getTeamMatches(Number(id), params),
    enabled: !!id,
  });
  useEffect(() => {
    if (isError) {
      toast.error("Данные не получены");
    }
  }, [isError]);

  const matches: MatchItem[] = (data?.matches ?? []).map((m) => ({
    id: m.id,
    utcDate: m.utcDate,
    status: m.status,
    homeTeam: { name: m.homeTeam.name },
    awayTeam: { name: m.awayTeam.name },
    score: {
      fullTime: {
        homeTeam: m.score?.fullTime?.home ?? null,
        awayTeam: m.score?.fullTime?.away ?? null,
      },
      extraTime: m.score?.extraTime
        ? {
            homeTeam: m.score.extraTime.home ?? null,
            awayTeam: m.score.extraTime.away ?? null,
          }
        : undefined,
      penalties: m.score?.penalties
        ? {
            homeTeam: m.score.penalties.home ?? null,
            awayTeam: m.score.penalties.away ?? null,
          }
        : undefined,
    },
  }));

  const teamName = teamData?.name ?? "Команда";
  const totalPages = Math.ceil(matches.length / PAGE_SIZE);
  const paginated = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleDateFrom = (v: string) => {
    setDateFrom(v);
    setPage(1);
  };

  const handleDateTo = (v: string) => {
    setDateTo(v);
    setPage(1);
  };

  return (
    <Wrapper>
      <Breadcrumbs
        items={[{ label: "Команды", to: "/teams" }, { label: teamName }]}
      />
      <DateFilter
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={handleDateFrom}
        onDateToChange={handleDateTo}
      />
      <MatchesTable
        matches={paginated}
        isLoading={isLoading}
        error={isError ? "Не удалось загрузить матчи. Попробуйте позже." : null}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Wrapper>
  );
};

export default TeamCalendarPage;

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlarmClock,
  ArrowUpRight,
  Check,
  CircleDot,
  Dumbbell,
  Goal,
  Home,
  LineChart,
  NotebookText,
  Play,
  RotateCcw,
  Target,
  UserRound,
  Zap
} from "lucide-react";

import { SectionBadge } from "@/components/shared/SectionBadge";
import { dashboardHabits, weeklyBars } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PreviewTab = "today" | "goals" | "workout" | "routine";

type GoalItem = {
  label: string;
  detail: string;
  done: boolean;
};

type RoutineItem = {
  label: string;
  detail: string;
  done: boolean;
};

type WorkoutItem = {
  label: string;
  detail: string;
  done: boolean;
};

type HabitRow = {
  label: string;
  values: boolean[];
};

const sidebarItems = [
  {
    id: "today",
    label: "Hoje",
    icon: Home,
    title: "Painel de rotina",
    description: "Visão geral do dia, metas, hábitos e próximo treino.",
    focus: "Executar antes de buscar motivação."
  },
  {
    id: "goals",
    label: "Metas",
    icon: Goal,
    title: "Metas em execução",
    description: "Objetivos claros, prioridade da semana e progresso visível.",
    focus: "Finalizar o bloco de carreira."
  },
  {
    id: "workout",
    label: "Treino",
    icon: Dumbbell,
    title: "Treino de hoje",
    description: "Sessão planejada, exercícios marcáveis e ritmo do corpo.",
    focus: "Peito + Ombro, sem negociar."
  },
  {
    id: "routine",
    label: "Rotina",
    icon: AlarmClock,
    title: "Rotina e hábitos",
    description: "Sequência diária e consistência semanal no mesmo painel.",
    focus: "Fechar o dia sem pendências."
  }
] as const satisfies ReadonlyArray<{
  id: PreviewTab;
  label: string;
  icon: typeof Home;
  title: string;
  description: string;
  focus: string;
}>;

const initialGoals: GoalItem[] = [
  {
    label: "Finalizar bloco de carreira",
    detail: "Hoje, 18h",
    done: false
  },
  {
    label: "Treino 5x na semana",
    detail: "3 de 5 sessões",
    done: true
  },
  {
    label: "Leitura por 30 minutos",
    detail: "Sequência de 6 dias",
    done: true
  }
];

const initialRoutine: RoutineItem[] = [
  { label: "Água + sol", detail: "07:10", done: true },
  { label: "Planejamento", detail: "07:25", done: true },
  { label: "Treino", detail: "18:30", done: true },
  { label: "Leitura", detail: "21:40", done: true }
];

const initialWorkout: WorkoutItem[] = [
  { label: "Aquecimento articular", detail: "8 min", done: true },
  { label: "Supino inclinado", detail: "4x8", done: true },
  { label: "Desenvolvimento", detail: "4x10", done: true },
  { label: "Elevação lateral", detail: "3x12", done: false }
];

const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"] as const;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getRatio = (done: number, total: number) => (total === 0 ? 0 : done / total);

export function PlatformPreviewSection() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("today");
  const [hasManualControl, setHasManualControl] = useState(false);
  const [goals, setGoals] = useState<GoalItem[]>(initialGoals);
  const [routineItems, setRoutineItems] =
    useState<RoutineItem[]>(initialRoutine);
  const [workoutItems, setWorkoutItems] =
    useState<WorkoutItem[]>(initialWorkout);
  const [habits, setHabits] = useState<HabitRow[]>(
    dashboardHabits.map((habit) => ({
      label: habit.label,
      values: [...habit.values]
    }))
  );
  const [workoutStarted, setWorkoutStarted] = useState(true);

  useEffect(() => {
    if (hasManualControl) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = sidebarItems.findIndex(
          (item) => item.id === currentTab
        );
        return sidebarItems[(currentIndex + 1) % sidebarItems.length].id;
      });
    }, 5200);

    return () => window.clearInterval(interval);
  }, [hasManualControl]);

  const activeItem = sidebarItems.find((item) => item.id === activeTab);

  const progress = useMemo(() => {
    const completedGoals = goals.filter((goal) => goal.done).length;
    const habitValues = habits.flatMap((habit) => habit.values);
    const completedHabits = habitValues.filter(Boolean).length;
    const completedRoutine = routineItems.filter((item) => item.done).length;

    return Math.round(
      getRatio(completedGoals, goals.length) * 30 +
        getRatio(completedHabits, habitValues.length) * 55 +
        getRatio(completedRoutine, routineItems.length) * 15
    );
  }, [goals, habits, routineItems]);

  const weeklyProgress = useMemo(
    () =>
      weeklyBars.map((height, index) => {
        const completedOnDay = habits.filter((habit) => habit.values[index]).length;
        return clamp(
          height + Math.round((progress - 76) * 0.45) + completedOnDay * 2 - 4,
          28,
          96
        );
      }),
    [habits, progress]
  );

  const workoutProgress = useMemo(
    () =>
      Math.round(
        getRatio(
          workoutItems.filter((item) => item.done).length,
          workoutItems.length
        ) * 100
      ),
    [workoutItems]
  );

  const levelLabel = progress >= 86 ? "Nível Forte" : "Nível Consistente";

  function takeControl() {
    setHasManualControl(true);
  }

  function selectTab(tab: PreviewTab) {
    takeControl();
    setActiveTab(tab);
  }

  function toggleGoal(index: number) {
    takeControl();
    setGoals((currentGoals) =>
      currentGoals.map((goal, goalIndex) =>
        goalIndex === index ? { ...goal, done: !goal.done } : goal
      )
    );
  }

  function toggleRoutine(index: number) {
    takeControl();
    setRoutineItems((currentItems) =>
      currentItems.map((item, itemIndex) =>
        itemIndex === index ? { ...item, done: !item.done } : item
      )
    );
  }

  function toggleWorkout(index: number) {
    takeControl();
    setWorkoutStarted(true);
    setWorkoutItems((currentItems) =>
      currentItems.map((item, itemIndex) =>
        itemIndex === index ? { ...item, done: !item.done } : item
      )
    );
  }

  function toggleHabit(rowIndex: number, valueIndex: number) {
    takeControl();
    setHabits((currentHabits) =>
      currentHabits.map((habit, habitIndex) =>
        habitIndex === rowIndex
          ? {
              ...habit,
              values: habit.values.map((value, index) =>
                index === valueIndex ? !value : value
              )
            }
          : habit
      )
    );
  }

  function resetPreview() {
    takeControl();
    setActiveTab("today");
    setGoals(initialGoals);
    setRoutineItems(initialRoutine);
    setWorkoutItems(initialWorkout);
    setHabits(
      dashboardHabits.map((habit) => ({
        label: habit.label,
        values: [...habit.values]
      }))
    );
    setWorkoutStarted(true);
  }

  return (
    <section id="plataforma" className="relative overflow-hidden py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <SectionBadge>Plataforma</SectionBadge>
          <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
            Sua evolução, acompanhada todos os dias.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Uma plataforma completa para acompanhar metas, hábitos, treinos e
            rotina com clareza e foco.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-gold/18 bg-[#070707]/90 shadow-premium-card backdrop-blur-xl">
          <div className="grid min-h-[680px] lg:grid-cols-[230px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-gold">
                  <Target aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">
                    GOAT OS
                  </p>
                  <p className="text-sm text-muted-foreground">Beta Preview</p>
                </div>
              </div>

              <nav className="grid gap-2" aria-label="Navegação do preview">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => selectTab(item.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-md border border-transparent px-3 py-3 text-left text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/40",
                        isActive
                          ? "border-gold/25 bg-gold/10 text-gold"
                          : "text-muted-foreground hover:border-white/10 hover:bg-white/[0.04] hover:text-ivory"
                      )}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-lg border border-neon-red/20 bg-neon-red/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-neon-red">
                  Foco do dia
                </p>
                <p className="mt-3 text-sm leading-6 text-ivory">
                  {activeItem?.focus}
                </p>
              </div>

              <button
                type="button"
                onClick={resetPreview}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-3 text-sm font-bold text-muted-foreground transition duration-300 hover:border-gold/30 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              >
                <RotateCcw aria-hidden="true" className="size-4" />
                Resetar preview
              </button>
            </aside>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Segunda, 27 de abril
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-ivory">
                    {activeItem?.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {activeItem?.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-gold/10 text-gold">
                    <UserRound aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ivory">Mateus</p>
                    <p className="text-xs text-muted-foreground">{levelLabel}</p>
                  </div>
                </div>
              </div>

              <div>
                {activeTab === "today" && (
                  <TodayPanel
                    goals={goals}
                    habits={habits}
                    progress={progress}
                    routineItems={routineItems}
                    weeklyProgress={weeklyProgress}
                    workoutProgress={workoutProgress}
                    onOpenWorkout={() => selectTab("workout")}
                    onToggleGoal={toggleGoal}
                    onToggleHabit={toggleHabit}
                    onToggleRoutine={toggleRoutine}
                  />
                )}

                {activeTab === "goals" && (
                  <GoalsPanel
                    goals={goals}
                    progress={progress}
                    onToggleGoal={toggleGoal}
                  />
                )}

                {activeTab === "workout" && (
                  <WorkoutPanel
                    workoutItems={workoutItems}
                    workoutProgress={workoutProgress}
                    workoutStarted={workoutStarted}
                    onStart={() => {
                      takeControl();
                      setWorkoutStarted(true);
                    }}
                    onToggleWorkout={toggleWorkout}
                  />
                )}

                {activeTab === "routine" && (
                  <RoutinePanel
                    habits={habits}
                    progress={progress}
                    routineItems={routineItems}
                    onToggleHabit={toggleHabit}
                    onToggleRoutine={toggleRoutine}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TodayPanel({
  goals,
  habits,
  progress,
  routineItems,
  weeklyProgress,
  workoutProgress,
  onOpenWorkout,
  onToggleGoal,
  onToggleHabit,
  onToggleRoutine
}: {
  goals: GoalItem[];
  habits: HabitRow[];
  progress: number;
  routineItems: RoutineItem[];
  weeklyProgress: readonly number[];
  workoutProgress: number;
  onOpenWorkout: () => void;
  onToggleGoal: (index: number) => void;
  onToggleHabit: (rowIndex: number, valueIndex: number) => void;
  onToggleRoutine: (index: number) => void;
}) {
  return (
    <>
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <ProgressChart progress={progress} weeklyProgress={weeklyProgress} />

        <div className="grid gap-4">
          <GoalsList goals={goals} onToggleGoal={onToggleGoal} compact />

          <button
            type="button"
            onClick={onOpenWorkout}
            className="rounded-lg border border-neon-red/20 bg-neon-red/10 p-5 text-left transition duration-300 hover:border-neon-red/40 hover:bg-neon-red/15 focus:outline-none focus:ring-2 focus:ring-neon-red/35"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Dumbbell
                  aria-hidden="true"
                  className="size-5 text-neon-red"
                />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Próximo treino
                  </p>
                  <p className="font-bold text-ivory">Peito + Ombro</p>
                </div>
              </div>
              <span className="text-sm font-black text-gold">
                {workoutProgress}%
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
        <RoutineChecklist
          routineItems={routineItems}
          onToggleRoutine={onToggleRoutine}
        />
        <HabitsMatrix habits={habits} onToggleHabit={onToggleHabit} />
      </div>
    </>
  );
}

function GoalsPanel({
  goals,
  progress,
  onToggleGoal
}: {
  goals: GoalItem[];
  progress: number;
  onToggleGoal: (index: number) => void;
}) {
  const completedGoals = goals.filter((goal) => goal.done).length;

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Objetivos concluídos</p>
            <p className="mt-2 text-4xl font-black text-ivory">
              {completedGoals}/{goals.length}
            </p>
          </div>
          <div className="flex size-11 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-gold">
            <Goal aria-hidden="true" className="size-5" />
          </div>
        </div>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
          <div
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-gradient-to-r from-neon-red via-gold to-[#f1d774]"
          />
        </div>

        <div className="mt-6 grid gap-3">
          {[
            ["Prioridade", "Bloco de carreira"],
            ["Janela", "90 min protegidos"],
            ["Revisão", "Domingo, 19h"]
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-md bg-black/20 px-3 py-3"
            >
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-bold text-ivory">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <GoalsList goals={goals} onToggleGoal={onToggleGoal} />
    </div>
  );
}

function WorkoutPanel({
  workoutItems,
  workoutProgress,
  workoutStarted,
  onStart,
  onToggleWorkout
}: {
  workoutItems: WorkoutItem[];
  workoutProgress: number;
  workoutStarted: boolean;
  onStart: () => void;
  onToggleWorkout: (index: number) => void;
}) {
  return (
    <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
      <div className="rounded-lg border border-neon-red/20 bg-neon-red/10 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Sessão ativa</p>
            <h4 className="mt-2 text-3xl font-black text-ivory">
              Peito + Ombro
            </h4>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Carga progressiva, execução registrada e fechamento da semana.
            </p>
          </div>
          <div className="flex size-11 items-center justify-center rounded-md border border-neon-red/25 bg-black/20 text-neon-red">
            <Dumbbell aria-hidden="true" className="size-5" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            ["Volume", "14 séries"],
            ["Ritmo", workoutStarted ? "ativo" : "pronto"],
            ["Status", `${workoutProgress}%`]
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-md border border-white/10 bg-black/20 p-3"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-neon-red">
                {label}
              </p>
              <p className="mt-2 text-sm font-black text-ivory">{value}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onStart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-black text-gold transition duration-300 hover:bg-gold/15 focus:outline-none focus:ring-2 focus:ring-gold/40"
        >
          <Play aria-hidden="true" className="size-4" />
          {workoutStarted ? "Treino em andamento" : "Iniciar treino"}
        </button>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="font-bold text-ivory">Exercícios</p>
          <span className="rounded-md border border-white/10 px-3 py-1 text-xs font-bold text-muted-foreground">
            {workoutProgress}% completo
          </span>
        </div>
        <div className="grid gap-3">
          {workoutItems.map((item, index) => (
            <TaskButton
              key={item.label}
              done={item.done}
              label={item.label}
              detail={item.detail}
              onClick={() => onToggleWorkout(index)}
              tone="red"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RoutinePanel({
  habits,
  progress,
  routineItems,
  onToggleHabit,
  onToggleRoutine
}: {
  habits: HabitRow[];
  progress: number;
  routineItems: RoutineItem[];
  onToggleHabit: (rowIndex: number, valueIndex: number) => void;
  onToggleRoutine: (index: number) => void;
}) {
  return (
    <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
      <div className="grid gap-4">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Consistência geral</p>
              <p className="mt-2 text-4xl font-black text-ivory">{progress}%</p>
            </div>
            <div className="flex size-11 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-gold">
              <Zap aria-hidden="true" className="size-5" />
            </div>
          </div>
        </div>

        <RoutineChecklist
          routineItems={routineItems}
          onToggleRoutine={onToggleRoutine}
        />
      </div>

      <HabitsMatrix habits={habits} onToggleHabit={onToggleHabit} />
    </div>
  );
}

function ProgressChart({
  progress,
  weeklyProgress
}: {
  progress: number;
  weeklyProgress: readonly number[];
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Progresso semanal</p>
          <p className="mt-2 text-4xl font-black text-ivory">
            {progress}%
          </p>
        </div>
        <div className="flex size-11 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-gold">
          <LineChart aria-hidden="true" className="size-5" />
        </div>
      </div>
      <div className="mt-8 flex h-40 items-end gap-3">
        {weeklyProgress.map((height, index) => (
          <div
            key={`${height}-${index}`}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="flex h-32 w-full items-end rounded-sm bg-white/[0.04]">
              <div
                style={{ height: `${height}%` }}
                className="w-full rounded-sm bg-gradient-to-t from-neon-red to-gold"
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {weekDays[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoalsList({
  goals,
  compact = false,
  onToggleGoal
}: {
  goals: GoalItem[];
  compact?: boolean;
  onToggleGoal: (index: number) => void;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-bold text-ivory">Objetivos</p>
        <ArrowUpRight aria-hidden="true" className="size-4 text-gold" />
      </div>
      <div className="grid gap-3">
        {goals.map((goal, index) => (
          <TaskButton
            key={goal.label}
            done={goal.done}
            label={goal.label}
            detail={compact ? undefined : goal.detail}
            onClick={() => onToggleGoal(index)}
          />
        ))}
      </div>
    </div>
  );
}

function RoutineChecklist({
  routineItems,
  onToggleRoutine
}: {
  routineItems: RoutineItem[];
  onToggleRoutine: (index: number) => void;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-5 flex items-center gap-3">
        <NotebookText aria-hidden="true" className="size-5 text-gold" />
        <p className="font-bold text-ivory">Rotina matinal</p>
      </div>
      <div className="grid gap-3">
        {routineItems.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onToggleRoutine(index)}
            className="flex items-center justify-between rounded-md bg-black/20 px-3 py-2 text-left transition duration-300 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            <span>
              <span className="block text-sm text-muted-foreground">
                {item.label}
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground/70">
                {item.detail}
              </span>
            </span>
            <span
              className={cn(
                "size-2 rounded-full transition duration-300",
                item.done ? "bg-gold" : "bg-white/20"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function HabitsMatrix({
  habits,
  onToggleHabit
}: {
  habits: HabitRow[];
  onToggleHabit: (rowIndex: number, valueIndex: number) => void;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <p className="mb-5 font-bold text-ivory">Hábitos da semana</p>
      <div className="grid gap-3">
        {habits.map((habit, rowIndex) => (
          <div
            key={habit.label}
            className="grid grid-cols-[76px_1fr] items-center gap-3 sm:grid-cols-[90px_1fr]"
          >
            <span className="text-sm text-muted-foreground">{habit.label}</span>
            <div className="grid grid-cols-7 gap-2">
              {habit.values.map((done, valueIndex) => (
                <button
                  key={`${habit.label}-${valueIndex}`}
                  type="button"
                  aria-label={`${habit.label} ${weekDays[valueIndex]}`}
                  aria-pressed={done}
                  onClick={() => onToggleHabit(rowIndex, valueIndex)}
                  className={cn(
                    "h-8 rounded-md border transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/40",
                    done
                      ? "border-gold/35 bg-gold/20 hover:bg-gold/30"
                      : "border-white/10 bg-white/[0.04] hover:border-gold/20 hover:bg-gold/10"
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaskButton({
  done,
  label,
  detail,
  tone = "gold",
  onClick
}: {
  done: boolean;
  label: string;
  detail?: string;
  tone?: "gold" | "red";
  onClick: () => void;
}) {
  const activeTone =
    tone === "red" ? "bg-neon-red/15 text-neon-red" : "bg-gold/15 text-gold";

  return (
    <button
      type="button"
      aria-pressed={done}
      onClick={onClick}
      className="flex items-center gap-3 rounded-md border border-white/10 bg-black/20 p-3 text-left transition duration-300 hover:border-gold/25 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-gold/40"
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full transition duration-300",
          done ? activeTone : "bg-white/[0.05] text-muted-foreground"
        )}
      >
        {done ? (
          <Check aria-hidden="true" className="size-3.5" />
        ) : (
          <CircleDot aria-hidden="true" className="size-3.5" />
        )}
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block text-sm font-semibold",
            done ? "text-ivory" : "text-muted-foreground"
          )}
        >
          {label}
        </span>
        {detail && (
          <span className="mt-0.5 block text-xs text-muted-foreground/70">
            {detail}
          </span>
        )}
      </span>
    </button>
  );
}

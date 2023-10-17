<script lang="ts">
  import { parseISO, format } from 'date-fns';

  export let dateString: string;

  const date = parseISO(dateString);
</script>

<time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
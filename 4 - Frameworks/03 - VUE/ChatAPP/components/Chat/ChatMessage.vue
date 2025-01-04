<template>
    <div class="flex gap-3 justify-between">
        <div class="grid gap-3 w-full grid-cols-[auto_1fr]">
            <ChatAvatar :sender="record.sender" />
            <div class="prose prose-invert lg:prose-xl max-w-full has-[:only-child]:content-center"
                v-html="formattedMesage.html" />
        </div>

        <time>{{ formattedTime }}</time>
    </div>
</template>

<script setup lang="ts">
import type { ChatRecord } from '~/types';
const props = defineProps<{
    record: ChatRecord;
}>();

const { parse } = useMarkdown();

const formattedMesage = computed(() => {
    return parse(props.record.message);
});

const formattedTime = computed(() => {
    const date = new Date(props.record.timestamp);

    return new Intl.DateTimeFormat('es', {
        hour: 'numeric',
        minute: 'numeric',
    }).format(date);
});
</script>
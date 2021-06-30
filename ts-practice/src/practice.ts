class Queue<T> { // Generic으로 T 타입 설정
    list: T[] = [];  // list의 타입은 T로 이루어진 배열이다, 기본값은 빈배열

    get length() { // get 메서드
        return this.list.length;
    }

    enqueue(item: T) { // enqueue는 queue에 새로운걸 등록할때 사용
        this.list.push(item);
    }

    dequeue() { // queue에서 가장 첫번째 항목을 뺄때 사용
        return this.list.shift();
    }
}

const queue = new Queue<number>(); // 새로운 Queue는 숫자로 이루어져있다.
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
    console.log(queue.dequeue()); // queue의 길이가 0보다 크다면 queue에서 dequeue를 호출
}
class BufferFullException(BufferError):
    """Raised when the circular buffer is full."""

    def __init__(self, message):
        super().__init__(message)


class BufferEmptyException(BufferError):
    """Raised when the circular buffer is empty."""

    def __init__(self, message):
        super().__init__(message)


class CircularBuffer:
    def __init__(self, capacity):
        self.capacity = capacity
        self.buffer = [None] * capacity

        self.read_position = 0
        self.write_position = 0
        self.size = 0

    def read(self):
        # Reading is impossible when the buffer is empty
        if self.size == 0:
            raise BufferEmptyException("Circular buffer is empty")

        # Get the oldest item
        data = self.buffer[self.read_position]

        # Make the position empty
        self.buffer[self.read_position] = None

        # Move the reading position forward
        self.read_position = (
            self.read_position + 1
        ) % self.capacity

        self.size -= 1

        return data

    def write(self, data):
        # Normal writing is blocked when the buffer is full
        if self.size == self.capacity:
            raise BufferFullException("Circular buffer is full")

        self.buffer[self.write_position] = data

        # Move the writing position forward
        self.write_position = (
            self.write_position + 1
        ) % self.capacity

        self.size += 1

    def overwrite(self, data):
        if self.size == self.capacity:
            # Replace the oldest value
            self.buffer[self.write_position] = data

            # Move both positions forward
            self.write_position = (
                self.write_position + 1
            ) % self.capacity

            self.read_position = (
                self.read_position + 1
            ) % self.capacity

        else:
            # When space is available, overwrite works like write
            self.write(data)

    def clear(self):
        self.buffer = [None] * self.capacity
        self.read_position = 0
        self.write_position = 0
        self.size = 0
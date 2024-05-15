class Main{
    public static void main(String[] args) {
        // System.err.println("Hello");

        int n = 5;

        // for(int i = 1; i <= n; i++){
        //     for(int j = 1; j < i; j++){
        //         System.out.print("*"+" ");
        //     }

        //     System.out.println();
        // }

        for(int i = 1; i <= n; i++){
            for(int j = 1; j < i + 1; j++){

                if(i % 2 == 0){
                    System.out.print(0+" ") ;
                }else if(i % 2 != 0){
                    System.out.print(1+" ");
                }else{
                    System.out.print("");
                }
            }

            System.out.println();
        }
    }
}
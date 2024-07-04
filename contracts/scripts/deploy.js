const main = async () => {
    const SudokuVerifier = await hre.ethers.getContractFactory("SudokuVerifier");
    const sudokuVerifier = await SudokuVerifier.deploy();
    await sudokuVerifier.waitForDeployment();
    console.log("SudokuVerifier Contract deployed to:", sudokuVerifier.target);
  
    const Sudoku = await hre.ethers.getContractFactory("Sudoku");
    const sudoku = await Sudoku.deploy(sudokuVerifier.target);
    await sudoku.waitForDeployment();
    console.log("Sudoku Contract deployed to:", sudoku.target);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
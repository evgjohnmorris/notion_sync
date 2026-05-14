/**
 * Generated Tool: databasesTool_0509
 * Domain: Databases
 * ID: 0509
 */
exports.databasesTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0509:', error);
    throw error;
  }
};

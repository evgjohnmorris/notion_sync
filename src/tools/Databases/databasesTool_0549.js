/**
 * Generated Tool: databasesTool_0549
 * Domain: Databases
 * ID: 0549
 */
exports.databasesTool_0549 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0549:', error);
    throw error;
  }
};

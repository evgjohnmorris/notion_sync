/**
 * Generated Tool: databasesTool_0570
 * Domain: Databases
 * ID: 0570
 */
exports.databasesTool_0570 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0570:', error);
    throw error;
  }
};

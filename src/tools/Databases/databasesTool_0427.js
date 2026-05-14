/**
 * Generated Tool: databasesTool_0427
 * Domain: Databases
 * ID: 0427
 */
exports.databasesTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0427:', error);
    throw error;
  }
};

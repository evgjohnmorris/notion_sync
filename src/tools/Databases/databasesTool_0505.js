/**
 * Generated Tool: databasesTool_0505
 * Domain: Databases
 * ID: 0505
 */
exports.databasesTool_0505 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0505:', error);
    throw error;
  }
};

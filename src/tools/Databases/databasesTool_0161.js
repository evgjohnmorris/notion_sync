/**
 * Generated Tool: databasesTool_0161
 * Domain: Databases
 * ID: 0161
 */
exports.databasesTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0161:', error);
    throw error;
  }
};

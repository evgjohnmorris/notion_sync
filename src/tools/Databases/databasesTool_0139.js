/**
 * Generated Tool: databasesTool_0139
 * Domain: Databases
 * ID: 0139
 */
exports.databasesTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0139:', error);
    throw error;
  }
};
